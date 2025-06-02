import { GoogleReviews } from '@/components/google-integration/google-reviews'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  CheckCircle2,
  Clock4,
  Dot,
  Mail,
  Phone,
  Wrench,
} from 'lucide-react'

export function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-6 space-y-20">
        {/* Service Divisions Section */}
        <section>
          <div className="space-y-20">
            {/* Equipment Repairs Section */}
            <div>
              {/* Equipment Repairs Hero Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 mb-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/site-assets/hero-cards/excavators-earthworks.png')] bg-cover bg-center opacity-10"></div>
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Wrench className="h-8 w-8 text-red-400" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Heavy Duty Equipment Repairs
                    </h2>
                    <Wrench className="h-8 w-8 text-red-400" />
                  </div>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Clarke Engineering specializes in comprehensive heavy
                    equipment repair services. From excavators to concrete
                    equipment, our Red Seal certified technicians deliver expert
                    solutions with fast turnaround times.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Excavator Repairs',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Backhoes',
                          'Bulldozers',
                          'Skid-Steers',
                          'Dump trucks',
                          'Hydraulics',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/excavator-repairs',
                    image:
                      '/images/site-assets/hero-cards/excavators-earthworks.png',
                  },
                  {
                    title: 'Elevator & Crane Repairs',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Elevators',
                          'Scissor Lifts',
                          'Cranes',
                          'Aerial work platforms (AWPs)',
                          'Booms',
                          'Forklifts',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/elevator-crane-repairs',
                    image:
                      '/images/site-assets/hero-cards/elevator-crane-repairs.png',
                  },
                  {
                    title: 'Truck & Automotive Repairs',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Trucks',
                          'HIABs',
                          'Beds',
                          'Boxes',
                          'Drive shafts',
                          'Rims',
                          'Bins',
                          'Hydraulics',
                          'Tankers',
                          'Trailers',
                          'Food trucks',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/truck-automotive-repairs',
                    image:
                      '/images/site-assets/hero-cards/truck-automotive-repairs.png',
                  },
                  {
                    title: 'Waste Management Equipment',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Waste disposal bin repairs',
                          'Roll-off fleet maintenance',
                          'Container modifications',
                          'Hydraulics',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/waste-disposal',
                    image:
                      '/images/site-assets/hero-cards/waste-management-equipment.png',
                  },
                  {
                    title: 'Paving Equipment Repairs',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Paving fleet maintenance',
                          'Asphalt plant repairs and fabrication',
                          'Field repairs',
                          'Heavy-duty welding',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/paving-equipment',
                    image:
                      '/images/site-assets/hero-cards/paving-equipment.png',
                  },
                  {
                    title: 'Concrete Equipment Repairs',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Concrete plant repairs and fabrication',
                          'Fleet maintenance',
                          'Railings',
                          'Mobile service',
                          'Heavy-duty welding',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/concrete-equipment',
                    image:
                      '/images/site-assets/hero-cards/concrete-equipment.png',
                  },
                ].map((service) => (
                  <Link key={service.title} to={service.to} className="block">
                    <Card className="overflow-hidden hover:shadow-xl hover:shadow-red-100 transition-all duration-300 border-t-4 border-t-red-500 h-full flex flex-col relative md:min-h-[200px] cursor-pointer hover:scale-[1.02] transform">
                      {service.image && (
                        <div className="absolute top-1 right-1 w-37 h-37 sm:w-25 sm:h-25">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="absolute top-0 right-0 w-37 h-37 sm:w-25 sm:h-25 object-cover rounded-xl"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-2 relative z-10 md:pb-2">
                        <CardTitle className="text-xl pr-32 leading-tight">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 flex-col flex-1 hidden md:flex">
                        <div className="flex-1 pr-20">
                          {service.description}
                        </div>
                        <Button
                          variant="secondary"
                          className="gap-1 text-red-500 mt-4 font-bold hover:text-red-600 hover:bg-red-50 py-3 h-12 cursor-pointer"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                      <CardContent className="pt-0 md:hidden">
                        <Button
                          variant="secondary"
                          className="gap-1 text-red-500 font-bold hover:text-red-600 hover:bg-red-50 py-3 h-12 cursor-pointer"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Engineering Section */}
            <div>
              {/* Engineering Hero Banner */}
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-xl p-8 mb-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/site-assets/hero-cards/construction-industry.png')] bg-cover bg-center opacity-15"></div>
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Custom Engineering Solutions
                    </h2>
                  </div>
                  <p className="text-lg text-red-100 max-w-3xl mx-auto">
                    With over 60 years of engineering expertise, Clarke
                    Engineering delivers innovative solutions for municipal,
                    marine, and construction projects across Victoria and
                    beyond.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Municipal & Government Projects',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Civic infrastructure',
                          'Public amenities and installation',
                          'Fleet and equipment installation',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/municipal-government',
                    image:
                      '/images/site-assets/hero-cards/municipal-government.png',
                  },
                  {
                    title: 'Marine Engineering & Welding',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Aluminum & marine-grade welding',
                          'Vessel repairs',
                          'Ramps and docks',
                          'Barges',
                          'Railings',
                          'Hydraulics',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/marine-engineering',
                    image:
                      '/images/site-assets/hero-cards/marine-engineering.png',
                  },
                  {
                    title: 'Construction Industry Repairs',
                    description: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          'Structural steel',
                          'Hand railings',
                          'Staircases',
                          'Gates',
                          'Mobile field welding',
                          'Boiler and pipe welding',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Dot className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                    to: '/services/construction-repairs',
                    image:
                      '/images/site-assets/hero-cards/construction-industry.png',
                  },
                ].map((service) => (
                  <Link key={service.title} to={service.to} className="block">
                    <Card className="overflow-hidden hover:shadow-xl hover:shadow-red-100 transition-all duration-300 border-t-4 border-t-red-500 h-full flex flex-col relative md:min-h-[200px] cursor-pointer hover:scale-[1.02] transform">
                      {service.image && (
                        <div className="absolute top-1 right-1 w-37 h-37 sm:w-25 sm:h-25">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="absolute top-0 right-0 w-37 h-37 sm:w-25 sm:h-25 object-cover rounded-xl"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-2 relative z-10 md:pb-2">
                        <CardTitle className="text-xl pr-32 leading-tight">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 flex-col flex-1 hidden md:flex">
                        <div className="flex-1 pr-20">
                          {service.description}
                        </div>
                        <Button
                          variant="secondary"
                          className="gap-1 text-red-500 mt-4 font-bold hover:text-red-600 hover:bg-red-50 py-3 h-12 cursor-pointer"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                      <CardContent className="pt-0 md:hidden">
                        <Button
                          variant="secondary"
                          className="gap-1 text-red-500 font-bold hover:text-red-600 hover:bg-red-50 py-3 h-12 cursor-pointer"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
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
