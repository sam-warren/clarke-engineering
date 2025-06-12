import { GoogleMapComponent } from '@/components/google-integration/google-map'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <Card className="bg-gray-700 border-gray-600 text-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-white">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-100/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">(250) 475 2400</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-red-100/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">Clarke@islandnet.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-red-100/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="font-medium">
                    3364 Burns Ave, Victoria, BC V8Z 3P2
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-red-100/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Business Hours</p>
                  <p className="font-medium">Monday - Friday: 7am - 5:30pm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600 text-gray-200">
            <CardContent>
              <div className="grid grid-cols-2 gap-8 place-items-center">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="/images/certification-badges/RedSeal.webp"
                    alt="Red Seal Certification"
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="/images/certification-badges/BBB.webp"
                    alt="Better Business Bureau"
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="/images/certification-badges/CWB.webp"
                    alt="CWB Certification"
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="/images/certification-badges/IslandEquipmentOwnersAssn.webp"
                    alt="Island Equipment Owners Association"
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full col-span-2">
                  <img
                    src="/images/certification-badges/CFIB.webp"
                    alt="CFIB Member"
                    className="h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600 text-gray-200 md:col-span-2 xl:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl text-white">Location Map</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-300">
                Visit our facility in Victoria, BC. We're conveniently located
                in the industrial area, with easy access for both commercial and
                personal vehicles.
              </p>
              <GoogleMapComponent
                height="300px"
                className="rounded-md overflow-hidden"
                address="Clarke Engineering & Welding Ltd."
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator className="my-8 bg-gray-600" />
      <div className="text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Clarke Engineering & Welding Ltd.
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
