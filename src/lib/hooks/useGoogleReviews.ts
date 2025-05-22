import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

// Define our interfaces to match Google Maps API types
export interface GoogleReview {
    author_name: string
    profile_photo_url: string
    rating: number
    relative_time_description: string
    text: string
    time: number
}

export interface PlaceDetails {
    rating: number
    user_ratings_total: number
    reviews: GoogleReview[]
}

// Add Google Maps types
declare global {
    interface Window {
        google: {
            maps: {
                places: {
                    PlacesService: any;
                    PlacesServiceStatus: {
                        OK: string;
                        [key: string]: string;
                    };
                };
            };
        };
    }
}

// Load Google Maps JavaScript API
const loadGoogleMapsAPI = () => {
    if (window.google?.maps) return Promise.resolve();

    return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Google Maps API'));
        document.head.appendChild(script);
    });
};

// Fetch reviews using browser-based Places API
const fetchGoogleReviews = async (): Promise<PlaceDetails> => {
    try {
        await loadGoogleMapsAPI();

        return new Promise((resolve, reject) => {
            const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
            const service = new window.google.maps.places.PlacesService(document.createElement('div'));

            service.getDetails(
                {
                    placeId,
                    fields: ['rating', 'user_ratings_total', 'reviews']
                },
                (result: any, status: string) => {
                    if (status !== window.google.maps.places.PlacesServiceStatus.OK || !result) {
                        reject(new Error(`Places API error: ${status}`));
                        return;
                    }

                    // Filter reviews: 4+ stars from the past year with text content
                    const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
                    const filteredReviews = (result.reviews || []).filter((review: any) => {
                        const reviewDate = review.time * 1000; // Convert to milliseconds
                        return reviewDate > oneYearAgo &&
                            review.rating >= 4 &&
                            review.text && review.text.trim().length > 0;
                    });

                    const mappedReviews: GoogleReview[] = filteredReviews.map((review: any) => ({
                        author_name: review.author_name,
                        profile_photo_url: review.profile_photo_url,
                        rating: review.rating,
                        relative_time_description: review.relative_time_description,
                        text: review.text,
                        time: review.time
                    }));

                    resolve({
                        rating: result.rating || 0,
                        user_ratings_total: result.user_ratings_total || 0,
                        reviews: mappedReviews
                    });
                }
            );
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export function useGoogleReviews() {
    return useQuery({
        queryKey: ['googleReviews'],
        queryFn: fetchGoogleReviews,
        staleTime: 1000 * 60 * 5, // Consider data stale after 5 minutes
        refetchOnWindowFocus: false,
        retry: 1,
    });
} 