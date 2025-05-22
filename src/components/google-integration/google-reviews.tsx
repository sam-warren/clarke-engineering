import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star, StarHalf } from 'lucide-react'
import { useGoogleReviews } from '@/lib/hooks/useGoogleReviews'
import type { GoogleReview } from '@/lib/hooks/useGoogleReviews'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function GoogleReviews() {
  const { data, isLoading, error } = useGoogleReviews()
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
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />,
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
    return <div className="text-center py-8">Loading reviews...</div>
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Failed to load reviews
      </div>
    )
  }

  if (!data?.reviews?.length) {
    return <div className="text-center py-8">No reviews available</div>
  }

  return (
    <div className="py-8">
      {/* Overall Rating Section */}
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            Highly Rated by Our Satisfied Customers
          </h2>
          <div className="text-lg text-gray-600 mt-4">
            Don't just take our word for it, see what our clients have to say
            about us.
          </div>
        </div>

        <Card className="flex-1 bg-white/30 backdrop-blur max-w-sm">
          <CardContent>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="text-6xl font-bold text-gray-900 mb-1">
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
                <div className="text-xs text-gray-500 mt-1">
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
          {data.reviews.map((review: GoogleReview, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="p-4 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.profile_photo_url}
                      alt={`${review.author_name}'s profile`}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.author_name}</h3>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <p
                      className={`text-sm text-gray-600 mb-2 ${
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
                  <p className="text-xs text-gray-400 mt-2">
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
