import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useIsMobile } from '@/hooks/use-mobile'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const VIDEOS = [
  '/videos/4941363-hd_1920_1080_25fps.mp4',
  '/videos/4941457-hd_1920_1080_25fps.mp4',
  '/videos/4315553-uhd_3840_2160_30fps.mp4',
  '/videos/13053713_3840_2160_50fps.mp4',
]

export function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useIsMobile()
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % VIDEOS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      toast(
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 font-bold">
            <Sparkles className="h-5 w-5" />
            {new Date().getFullYear() - 1960} Years of Excellence in Victoria
          </div>
          <p className="text-sm">
            Providing industry-leading welding, fabrication, and engineering
            solutions since 1960.
          </p>
        </div>,
        {
          duration: 10000,
        },
      )
    }
  }, [isMobile])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Video Background */}
        <div className="absolute inset-0">
          {VIDEOS.map((video, index) => (
            <video
              key={video}
              src={video}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
              style={{ opacity: index === activeIndex ? 1 : 0 }}
              autoPlay
              muted
              loop
              playsInline
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Trusted Since 1960.</span>
              <span className="mt-2 block text-2xl font-medium text-white/90 sm:text-3xl md:text-4xl">
                Victoria's most experienced welding and machining shop
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl md:text-2xl">
              Serving industries across Vancouver Island with precision
              engineering, quality craftsmanship, and unmatched expertise.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="min-w-[200px] px-8 py-7 text-xl font-semibold text-white bg-red-600 hover:bg-red-700"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Quote <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-[200px] px-8 py-7 text-xl font-semibold border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href="tel:2504752400" className="flex items-center gap-2">
                  <Phone className="h-6 w-6" /> Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Learn More Indicator */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white flex flex-col items-center animate-bounce">
            <span className="text-lg font-medium mb-2">Learn More</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Service Divisions Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Explore Our Specialized Divisions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored services for every industry, backed by decades of
              expertise and a commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Heavy-Duty Equipment Repairs',
                description:
                  'Mobile and shop-based repairs for construction machinery and industrial equipment.',
                icon: '🚜',
              },
              {
                title: 'Elevators & Cranes',
                description:
                  'Welding, modification, and inspection support for lifting equipment components.',
                icon: '🏗️',
              },
              {
                title: 'Restaurants',
                description:
                  'Fast-response commercial kitchen repairs through Victoria Restaurant Repairs & Welding.',
                icon: '🍽️',
              },
              {
                title: 'Commercial',
                description:
                  'Custom welding and fabrication for businesses, storefronts, and institutions.',
                icon: '🏢',
              },
              {
                title: 'Residential',
                description:
                  'Handrails, gates, custom furniture, staircases, and in-home modifications.',
                icon: '🏠',
              },
              {
                title: 'Marine',
                description:
                  'Vessel, dock, and marine infrastructure repairs and custom fabrication.',
                icon: '⚓',
              },
              {
                title: 'Automotive & Trucking',
                description:
                  'Frame repairs, modifications, trailers, and custom aluminum welding.',
                icon: '🚚',
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-t-red-500 h-full"
              >
                <CardHeader className="pb-3">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4">
                    <Button
                      variant="ghost"
                      className="text-red-600 hover:text-red-700 p-0 flex items-center gap-1"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Clarke Section */}
        <section className="bg-slate-50 rounded-xl p-8 shadow-sm">
          <CardTitle className="text-3xl font-bold text-center mb-8">
            Why Choose Clarke
          </CardTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Red Seal Welders & Machinists',
              'Trusted by generations of Victoria businesses since 1960',
              'Fast turnaround and transparent job tracking',
              'Full-service machine shop (6,000 sq ft facility)',
              'A fleet of 6 fully equipped work trucks and welding rigs for mobile jobs',
              'Onsite welding, custom fabrication, and project management',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Clients Say (Placeholder for Google Reviews)
          </h2>
          <Card className="shadow-lg border-none bg-gradient-to-br from-gray-100 to-gray-200">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-6">"</div>
                <p className="italic text-xl mb-6">
                  Clarke Engineering completed our challenging fabrication
                  project on time and under budget. Their team's attention to
                  detail and expertise made all the difference.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-lg">Notta Realperson</p>
                  <p className="text-gray-600">Victoria Harbor Authority</p>
                </div>
                <div className="flex mt-4 justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-4 text-sm text-gray-500">
            <p>Rotating 5-star Google reviews will appear here.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
