import { useQuery } from '@tanstack/react-query'

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

const fetchGoogleReviews = async (): Promise<PlaceDetails> => {
    try {
        // Using Vite's proxy to avoid CORS issues
        const response = await fetch(
            `/api/google-places/place/details/json?place_id=${import.meta.env.VITE_GOOGLE_PLACE_ID}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch reviews')
        }

        const data = await response.json()

        if (!data.result) {
            throw new Error('No reviews data in response')
        }

        // Filter reviews: 4+ stars from the past year with text content
        const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000)
        const filteredReviews = (data.result.reviews || []).filter((review: GoogleReview) => {
            const reviewDate = review.time * 1000 // Convert to milliseconds
            return reviewDate > oneYearAgo &&
                review.rating >= 4 &&
                review.text.trim().length > 0
        })

        return {
            rating: data.result.rating || 0,
            user_ratings_total: data.result.user_ratings_total || 0,
            reviews: filteredReviews
        }
    } catch (error) {
        console.error('Error fetching reviews:', error)
        throw error
    }
}

export function useGoogleReviews() {
    return useQuery({
        queryKey: ['googleReviews'],
        queryFn: fetchGoogleReviews,
        staleTime: 1000 * 60 * 5, // Consider data stale after 5 minutes
        refetchOnWindowFocus: false,
        retry: 1,
    })
} 