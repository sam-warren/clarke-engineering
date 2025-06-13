import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'

// Helper function to get image number from filename
const getImageNumber = (filename: string) => {
  const num = parseInt(filename.match(/\d+/)?.[0] || '0')
  return num
}

// Move importImages function outside component
const importImages = async () => {
  const imageContext = import.meta.glob(
    '/public/images/site-assets/about-us/*.{jpg,JPG,jpeg,JPEG,png,PNG}',
  )
  const imageList: string[] = []

  for (const path in imageContext) {
    const imagePath = path.replace('/public', '')
    imageList.push(imagePath)
  }

  imageList.sort((a, b) => getImageNumber(a) - getImageNumber(b))
  return imageList
}

export function AboutPage() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    importImages().then(setImages)
  }, [])

  return (
    <div className="container mx-auto px-4 py-6 space-y-8 max-w-screen-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-xl text-center text-gray-600 mb-10">
        Learn more about our company and the people who make it great.
      </p>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Who are we?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              <strong>Clarke Engineering & Welding Ltd</strong> has been keeping
              Vancouver Island’s heavy equipment moving since 1960. Built on a
              legacy of craftsmanship, honesty, and hard work, we specialize in
              hydraulic, mechanical, and welding solutions for the industries
              that keep our region running — excavation, marine, municipal,
              construction, and beyond.
              region running — excavation, marine, municipal, construction, and
              beyond.
            </p>
            <p className="mb-4">
              Our mission is simple: Minimize downtime. Maximize reliability.
              Deliver repairs the right way — the first time. Whether it’s in
              the field or at our shop, our Red Seal certified technicians bring
              the know-how and hustle to solve complex problems fast.
            </p>
            <p className="mb-4">
              We’re not just a service provider — we’re a trusted partner to the
              crews who build, dig, pave, and haul across the Island. Clarke is
              where experience meets action.
            </p>
          </div>
        </CardContent>
      </Card>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((imagePath, index) => (
            <CarouselItem key={imagePath} className="md:basis-1/2 lg:basis-1/3">
              <Card className="shadow-lg overflow-hidden py-0 h-64">
                <img
                  src={imagePath}
                  alt={`Clarke Engineering - Image ${index + 1}`}
                  className="w-full h-64 object-cover object-top"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Media Mentions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-lg">
            Check out some of our recent media coverage:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <a
                href="https://issuu.com/page-one/docs/douglas_octnov22_issuue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Douglas Magazine Feature - October 2022
              </a>
            </li>
            <li>
              <a
                href="https://www.ctvnews.ca/vancouver/vancouver-island/article/hummingbird-builds-nest-on-hook-hanging-in-noisy-victoria-welding-shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                CTV News - "Hummingbird builds nest on hook hanging in noisy
                Victoria welding shop" - May 2022
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
