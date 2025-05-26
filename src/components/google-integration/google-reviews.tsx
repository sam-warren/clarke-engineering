import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { GooglePlaceReview } from '@/lib/hooks/useGoogleReviews'
import { useGoogleReviews } from '@/lib/hooks/useGoogleReviews'
import { Star, StarHalf } from 'lucide-react'
import { useState } from 'react'

interface GoogleReviewsProps {
  placeId?: string
  className?: string
}

export function GoogleReviews({
  placeId = import.meta.env.VITE_GOOGLE_PLACE_ID,
  className = '',
}: GoogleReviewsProps) {
  const { data, isLoading, error } = useGoogleReviews(placeId)
  const [expandedReviews, setExpandedReviews] = useState<
    Record<number, boolean>
  >({})

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />,
      )
    }

    // Add empty stars to make total of 5
    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="h-4 w-4 text-gray-300" />,
      )
    }

    return stars
  }

  const toggleExpand = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <div className="text-center">
          <div className="mb-2 h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <p className="text-sm text-gray-500">Loading reviews...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-48 items-center justify-center">
        <div className="text-center text-red-500">
          <p className="mb-2 font-medium">Failed to load reviews</p>
          <p className="text-sm">
            {error instanceof Error ? error.message : 'Unknown error occurred'}
          </p>
        </div>
      </div>
    )
  }

  if (!data?.reviews?.length) {
    return (
      <div className="flex h-48 items-center justify-center">
        <p className="text-gray-500">No reviews available</p>
      </div>
    )
  }

  return (
    <div className={`py-8 ${className}`}>
      {/* Overall Rating Section */}
      <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            {data.name || 'Customer Reviews'}
          </h2>
          <div className="mt-4 text-lg text-gray-600">
            See what our clients have to say about their experience with us.
          </div>
        </div>

        <Card className="flex-1 bg-white/30 backdrop-blur max-w-sm">
          <CardContent>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="mb-1 text-6xl font-bold text-gray-900">
                  {data.rating.toFixed(1)}
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(data.rating)}
                </div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="flex flex-col items-start">
                <div className="text-sm font-medium text-gray-600">
                  Total Reviews
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {data.user_ratings_total}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  From Google Reviews
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.reviews.map((review: GooglePlaceReview, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex h-full flex-col p-4">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src={review.profile_photo_url}
                      alt={`${review.author_name}'s profile`}
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">
                        <a
                          href={review.author_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          {review.author_name}
                        </a>
                      </h3>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <p
                      className={`mb-2 text-sm text-gray-600 ${
                        !expandedReviews[index] ? 'line-clamp-3' : ''
                      }`}
                    >
                      {review.text}
                    </p>
                    {review.text.length > 150 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-1 h-6 text-xs"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedReviews[index] ? 'Show less' : 'Show more'}
                      </Button>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-gray-400">
                    {review.relative_time_description}
                  </p>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}
