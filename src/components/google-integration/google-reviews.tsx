import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star, StarHalf } from 'lucide-react'
import { useState } from 'react'

// Hardcoded reviews from reviews.md
const hardcodedReviews = [
  {
    author_name: 'Paul Orgnero',
    rating: 5,
    text: 'Great guy! We called in a panic on Saturday to fix a blown hose reel. Even though they were busy he squeezed us in and got us back to work to finish. Thank you so much!',
  },
  {
    author_name: 'Brian Cloosterman',
    rating: 5,
    text: 'Clarke Engineering was recommended by another local business… I brought my backhoe cylinder to have the seals replaced. They took good care to replace the seals and clean up the cylinder a bit. I was happy with the workmanship. Thank you, Brian',
  },
  {
    author_name: 'Sylvia Hallmark',
    rating: 5,
    text: 'We had a small bracket that needed welding. My husband works all business hours so I had to bring the little piece down with my helpful 10yr old daughter and two young boys. It is not a place to unload my boys so I sent my daughter in to ask about fixing it. They were AMAZING!! They were so great with her, the sweetest people, fixed up our little bracket for a minimal fee and even let my daughter pick out a little toy each for her brothers waiting in the car with me. This is how every business should be run. So kind, friendly, helpful. I was very impressed!!',
  },
  {
    author_name: 'Rebel Rentals and Repair',
    rating: 5,
    text: 'Have been dealing with Dave for many years and he never disappoints. I had a small custom job that was time sensitive and they knocked it out of the park in time, cost and function.',
  },
  {
    author_name: 'tuf-turf',
    rating: 5,
    text: 'This is a company that does quality work and they are great!',
  },
]

// Calculate overall rating and total reviews
const totalReviews = 35
const averageRating = 4.5

interface GoogleReviewsProps {
  className?: string
}

export function GoogleReviews({ className = '' }: GoogleReviewsProps) {
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

  return (
    <div className={`py-8 ${className}`}>
      {/* Overall Rating Section */}
      <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Customer Reviews</h2>
          <div className="mt-4 text-lg text-gray-600">
            See what our clients have to say about their experience with us.
          </div>
        </div>

        <Card className="flex-1 bg-white/30 backdrop-blur max-w-sm">
          <CardContent>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="mb-1 text-6xl font-bold text-gray-900">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(averageRating)}
                </div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="flex flex-col items-start">
                <div className="text-sm font-medium text-gray-600">
                  Total Reviews
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {totalReviews}
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
          {hardcodedReviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex h-full flex-col p-4">
                  <div className="mb-4 flex items-center gap-4">
                    {/* <img
                      src={review.profile_photo_url}
                      alt={`${review.author_name}'s profile`}
                      className="h-12 w-12 rounded-full"
                    /> */}
                    <div>
                      <h3 className="font-semibold mb-2">
                        {review.author_name}
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
                  {/* <p className="mt-2 text-xs text-gray-400">
                    {review.relative_time_description}
                  </p> */}
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
