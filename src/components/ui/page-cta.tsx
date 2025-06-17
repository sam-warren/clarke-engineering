import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Clock4,
  Mail,
  Phone,
  Wrench,
} from 'lucide-react'

interface PageCTAProps {
  title: string
  subtitle?: string
}

export function PageCTA({ title, subtitle = "From quick repairs to custom fabrication, we're here to help." }: PageCTAProps) {
  return (
    <section>
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {subtitle}
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
                  Get Your Quote <ArrowRight className="h-5 w-5" />
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
                    href="mailto:clarke@islandnet.com"
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
  )
} 