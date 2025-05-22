import { useQuery } from '@tanstack/react-query'

declare global {
    interface Window {
        googlePlacesApiLoaded?: boolean;
        google: any;
    }
}

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

const waitForGoogleApi = (): Promise<void> => {
    return new Promise((resolve) => {
        if (window.googlePlacesApiLoaded) {
            resolve();
            return;
        }

        const checkInterval = setInterval(() => {
            if (window.googlePlacesApiLoaded) {
                clearInterval(checkInterval);
                resolve();
            }
        }, 100);
    });
};

const fetchGoogleReviews = async (): Promise<PlaceDetails> => {
    try {
        await waitForGoogleApi();

        return new Promise((resolve, reject) => {
            const service = new window.google.maps.places.PlacesService(
                document.createElement('div')
            );

            service.getDetails(
                {
                    placeId: import.meta.env.VITE_GOOGLE_PLACE_ID,
                    fields: ['rating', 'user_ratings_total', 'reviews']
                },
                (result: any, status: any) => {
                    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                        reject(new Error('Failed to fetch reviews'));
                        return;
                    }

                    // Filter reviews: 4+ stars from the past year with text content
                    const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
                    const filteredReviews = (result.reviews || [])
                        .filter((review: GoogleReview) => {
                            const reviewDate = review.time * 1000; // Convert to milliseconds
                            return reviewDate > oneYearAgo && 
                                   review.rating >= 4 && 
                                   review.text.trim().length > 0;
                        });

                    resolve({
                        rating: result.rating || 0,
                        user_ratings_total: result.user_ratings_total || 0,
                        reviews: filteredReviews
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