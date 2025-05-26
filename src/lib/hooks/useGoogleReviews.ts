import { useQuery } from '@tanstack/react-query'

// Define proper TypeScript types for Google Places API responses
export interface GooglePlaceReview {
    author_name: string;
    author_url?: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

export interface GooglePlaceDetails {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews?: GooglePlaceReview[];
}

// Declare global Google Maps types
declare global {
    interface Window {
        google: {
            maps: {
                places: {
                    PlacesService: new (element: Element) => {
                        getDetails: (
                            request: { placeId: string; fields: string[] },
                            callback: (
                                result: GooglePlaceDetails | null,
                                status: google.maps.places.PlacesServiceStatus
                            ) => void
                        ) => void;
                    };
                    PlacesServiceStatus: {
                        OK: string;
                        ZERO_RESULTS: string;
                        INVALID_REQUEST: string;
                        OVER_QUERY_LIMIT: string;
                        REQUEST_DENIED: string;
                        ERROR: string;
                    };
                };
            };
        };
    }
}

/** Fetches place details from Google Places API (via Maps JS library) */
async function fetchPlaceDetails(placeId: string): Promise<GooglePlaceDetails> {
    // Ensure Google Places API is available
    if (!window.google?.maps?.places) {
        throw new Error('Google Places API not loaded. Please ensure the API script is included with the "places" library.');
    }

    // Create a dummy element for PlacesService (required but not used)
    const service = new window.google.maps.places.PlacesService(
        document.createElement('div')
    );

    return new Promise((resolve, reject) => {
        service.getDetails(
            {
                placeId,
                fields: ['name', 'rating', 'user_ratings_total', 'reviews']
            },
            (result, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && result) {
                    resolve({
                        name: result.name || '',
                        rating: result.rating || 0,
                        user_ratings_total: result.user_ratings_total || 0,
                        reviews: result.reviews || []
                    });
                } else {
                    reject(new Error(`Places API request failed: ${status}`));
                }
            }
        );
    });
}

/**
 * React hook to fetch and cache Google Place reviews
 * @param placeId - The Google Place ID to fetch reviews for
 * @returns Query result containing place details including reviews
 */
export function useGoogleReviews(placeId: string) {
    return useQuery({
        queryKey: ['googleReviews', placeId],
        queryFn: () => fetchPlaceDetails(placeId),
        staleTime: 2 * 24 * 60 * 60 * 1000, // Consider data fresh for 2 days
        gcTime: 2 * 24 * 60 * 60 * 1000,    // Keep cached data for 2 days (garbage collection time)
        retry: 2, // Retry failed requests twice
        refetchOnWindowFocus: false, // Don't refetch when window regains focus
    });
} 