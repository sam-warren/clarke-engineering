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

export function AboutPage() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Import all images from the about-us directory
    const importImages = async () => {
      const imageContext = import.meta.glob(
        '/public/images/site-assets/about-us/*.{jpg,JPG,jpeg,JPEG,png,PNG}',
      )
      const imageList: string[] = []

      for (const path in imageContext) {
        const imagePath = path.replace('/public', '')
        imageList.push(imagePath)
      }

      // Sort images by number in filename
      imageList.sort((a, b) => getImageNumber(a) - getImageNumber(b))
      setImages(imageList)
    }

    importImages()
  }, [])

  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
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
              "Hey there, I'm Graham Pink, General Manager here at Clarke
              Engineering and Welding Ltd."
            </p>
            <p className="mb-4">
              "And I'm Dave Clarke — thanks a ton for stopping by our website,"
              Dave added with a nod.
            </p>
            <p className="mb-4">
              "Yeah, seriously, we're real glad to have someone as fine as
              yourself poking around and seeing what we get up to down here at
              3364 Burns Avenue in Victoria," said Graham, wiping his hands on a
              rag that somehow made them dirtier.
            </p>
            <p className="mb-4">
              "You know, Graham," said Dave, leaning on the workbench, "when my
              dad, Bob Clarke, started this little welding and machine shop back
              in 1959, he had a pretty clear idea of what it should be — a place
              that puts people first, a shop that can fix just about anything,
              and isn't afraid to get a bit grimy doing it."
            </p>
            <p className="mb-4">
              Dave paused and looked around the place — at the sparks flying in
              the corner and the hum of the lathe working through another piece
              of steel.
            </p>
            <p className="mb-4">
              "I think he'd be proud of what we've built here," he said. "We
              still put our customers at the center of everything we do. That's
              what keeps me going. A lot of our customers have become friends —
              good ones, too."
            </p>
            <p className="mb-4">
              "It's a gritty business, though," he added with a wry smile.
            </p>
            <p className="mb-4">
              "Sure is," said Graham, glancing down at his oil-streaked
              overalls. "But that's part of the charm."
            </p>
            <p className="text-lg font-medium">
              So whether you've been coming to us for years or you're just
              thinking about giving us a try, we'd be glad to help sort out your
              mess before it turns into a disaster. That's what we do best — fix
              things, build trust, and keep the sparks flying.
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
        <CarouselPrevious />
        <CarouselNext />
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
