import { GoogleReviews } from '@/components/google-integration/google-reviews'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useIsMobile } from '@/hooks/use-mobile'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  CheckCircle2,
  Clock4,
  Dot,
  Mail,
  Phone,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { useEffect } from 'react'
import { toast } from 'sonner'

// const VIDEOS = [
//   '/videos/4941363-hd_1920_1080_25fps.mp4',
//   '/videos/4941457-hd_1920_1080_25fps.mp4',
//   '/videos/4315553-uhd_3840_2160_30fps.mp4',
//   '/videos/13053713_3840_2160_50fps.mp4',
// ]

export function HomePage() {
  const isMobile = useIsMobile()

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
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Service Divisions Section */}
        <section>
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Explore Our Specialized Divisions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored services for every industry, backed by decades of
              expertise and a commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Equipment Repairs Section */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-6">Equipment Repairs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Excavator Repairs',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Excavators',
                          'Backhoes',
                          'Bulldozers',
                          'Skid-Steers',
                          'Dump Trucks',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🚜',
                    to: '/services/excavator-repairs',
                    image:
                      '/images/site-assets/hero-cards/excavators-earthworks.png',
                  },
                  {
                    title: 'Elevator & Crane Repairs',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Professional elevator repair',
                          'Crane maintenance & repair',
                          'Lift system services',
                          'Boom equipment repair',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🏗️',
                    to: '/services/elevator-crane-repairs',
                    image:
                      '/images/site-assets/hero-cards/elevator-crane-repairs.png',
                  },
                  {
                    title: 'Truck & Automotive Repairs',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Commercial Vehicle Welding',
                          'Custom Modifications',
                          'Fleet Repair Services',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🚛',
                    to: '/services/truck-automotive-repairs',
                    image:
                      '/images/site-assets/hero-cards/truck-automotive-repairs.png',
                  },
                  {
                    title: 'Waste Management Equipment',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Waste disposal bin repairs',
                          'Roll-off fleet maintenance',
                          'Container modifications',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🗑️',
                    to: '/services/waste-disposal',
                    image:
                      '/images/site-assets/hero-cards/waste-management-equipment.png',
                  },
                  {
                    title: 'Paving Equipment Repairs',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Asphalt Plant Equipment',
                          'Fleet Maintenance',
                          'Heavy-Duty Welding',
                          'Field Repairs',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🚧',
                    to: '/services/paving-equipment',
                    image:
                      '/images/site-assets/hero-cards/paving-equipment.png',
                  },
                  {
                    title: 'Concrete Equipment Repairs',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Concrete Plant Equipment',
                          'Fleet Maintenance',
                          'Heavy-Duty Welding',
                          'Mobile Service',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🏭',
                    to: '/services/concrete-equipment',
                    image:
                      '/images/site-assets/hero-cards/concrete-equipment.png',
                  },
                ].map((service) => (
                  <Card
                    key={service.title}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-t-red-500 h-full flex flex-col relative"
                  >
                    {service.image && (
                      <div className="absolute -top-5 -right-5 w-40 h-40">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute top-0 right-0 w-40 h-40 object-cover rounded-full"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-3 relative z-10">
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col flex-1">
                      <div className="flex-1">{service.description}</div>
                      <div className="mt-6">
                        <Button
                          asChild
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 w-full py-6 text-lg font-medium"
                        >
                          <Link
                            to={service.to}
                            className="flex items-center justify-center gap-2"
                          >
                            Learn More <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Engineering Section */}
            <div className="lg:col-span-3 mt-12">
              <h3 className="text-2xl font-bold mb-6">Engineering</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Municipal & Government Projects',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Public Infrastructure Projects',
                          'Government Facility Maintenance',
                          'Municipal Equipment Repair',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🏛️',
                    to: '/services/municipal-government',
                    image:
                      '/images/site-assets/hero-cards/municipal-government.png',
                  },
                  {
                    title: 'Marine Engineering & Welding',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Aluminum & Marine-Grade Welding',
                          'Vessel Repairs',
                          'Custom Marine Fabrication',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '⚓',
                    to: '/services/marine-engineering',
                    image:
                      '/images/site-assets/hero-cards/marine-engineering.png',
                  },
                  {
                    title: 'Construction Industry Repairs',
                    description: (
                      <div className="flex flex-col gap-1.5">
                        {[
                          'Mobile & In-Shop Welding',
                          'Structural Steel Services',
                          'Heavy Equipment Repair',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    icon: '🏗️',
                    to: '/services/construction',
                    image:
                      '/images/site-assets/hero-cards/construction-industry.png',
                  },
                ].map((service) => (
                  <Card
                    key={service.title}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-t-red-500 h-full flex flex-col relative"
                  >
                    {service.image && (
                      <div className="absolute -top-5 -right-5 w-40 h-40">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute top-0 right-0 w-40 h-40 object-cover rounded-full"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-3">
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col flex-1">
                      <div className="flex-1">{service.description}</div>
                      <div className="mt-6">
                        <Button
                          asChild
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 w-full py-6 text-lg font-medium"
                        >
                          <Link
                            to={service.to}
                            className="flex items-center justify-center gap-2"
                          >
                            Learn More <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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
          <GoogleReviews />
        </section>

        {/* Final CTA Section */}
        <section>
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    From quick repairs to custom fabrication, we're here to help
                    24/7.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock4 className="h-5 w-5 text-red-400" />
                      <span>Fast Response Times</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Wrench className="h-5 w-5 text-red-400" />
                      <span>Expert Solutions</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white py-6 text-lg w-full md:w-auto"
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Start Your Project <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-transparent border-gray-600 text-white hover:bg-white/10"
                    >
                      <a
                        href="tel:2504752400"
                        className="flex items-center gap-2 justify-center"
                      >
                        <Phone className="h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-transparent border-gray-600 text-white hover:bg-white/10"
                    >
                      <a
                        href="mailto:Clarke@islandnet.com"
                        className="flex items-center gap-2 justify-center"
                      >
                        <Mail className="h-5 w-5" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
