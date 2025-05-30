import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { GoogleMapComponent } from '@/components/google-integration/google-map'
import ContactForm from '@/components/contact-form'
import Alert from '@/components/ui/custom-alert'
import { useState } from 'react'

interface AlertState {
  type: 'success' | 'error'
  message: string
}

export function ContactPage() {
  const [alert, setAlert] = useState<AlertState | null>(null)

  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onDismiss={() => setAlert(null)}
        />
      )}

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Top Left: Descriptive Content */}
        <div className="flex flex-col justify-start lg:py-10 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Clarke Engineering & Welding Ltd., we're committed to
              delivering exceptional results for every project. Whether you need
              custom fabrication, structural welding, or engineering solutions,
              our experienced team is here to help.
            </p>
          </div>
        </div>

        {/* Top Right: Contact Form */}
        <div>
          <ContactForm onAlert={setAlert} />
        </div>

        {/* Bottom Left: Contact Information */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <Phone className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">(250) 475 2400</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <Mail className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">Clarke@islandnet.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">
                  3364 Burns Ave, Victoria, BC V8Z 3P2
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Business Hours</p>
                <p className="font-medium">Monday - Friday: 7am - 5:30pm</p>
                <p className="font-medium">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Right: Location */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <GoogleMapComponent
              height="300px"
              className="rounded-md"
              showMarker={true}
              address="Clarke Engineering & Welding Ltd."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
