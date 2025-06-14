import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { PageCTA } from '@/components/ui/page-cta'

interface ServicePageProps {
  title: string | React.ReactNode
  description: string
  ctaTitle?: string
  testimonial: {
    quote: string
    author: string
  }
  vendors: string[]
  capabilities: Array<{
    title: string
    items: string[]
  }>
  tagline: string
}

export function ServicePage({
  title,
  description,
  ctaTitle,
  testimonial,
  vendors,
  capabilities,
  tagline,
}: ServicePageProps) {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* CTA Section */}
      {ctaTitle && <PageCTA title={ctaTitle} />}

      {/* Testimonial */}
      <Card className="bg-accent/10">
        <CardContent className="p-6 text-center">
          <blockquote className="text-xl italic mb-4">
            "{testimonial.quote}"
          </blockquote>
          <cite className="text-muted-foreground">— {testimonial.author}</cite>
        </CardContent>
      </Card>

      {/* Vendors */}
      <Card>
        <CardHeader>
          <CardTitle>Proud Vendor For</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{vendors.join(' • ')}</p>
        </CardContent>
      </Card>

      {/* Core Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((capability, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{capability.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {capability.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white mt-12">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <CardTitle className="text-3xl">{tagline}</CardTitle>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <a href="tel:2504752400" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <a
                  href="mailto:clarke@islandnet.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" /> Email Us
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
