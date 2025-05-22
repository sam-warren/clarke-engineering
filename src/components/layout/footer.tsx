import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { GoogleMapComponent } from '@/components/google-integration/google-map'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-gray-700 border-gray-600 text-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-white">Contact Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p>
              <strong>Phone:</strong> (250) 475 2400
            </p>
            <p>
              <strong>Email:</strong> Clarke@islandnet.com
            </p>
            <p>
              <strong>Address:</strong> 3364 Burns Ave, Victoria, BC V8Z 3P2
            </p>
            <p>
              <strong>Hours:</strong> Monday - Friday: 7am - 5:30pm
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-700 border-gray-600 text-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              Association Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Red Seal Badge - Placeholder</li>
              <li>BBB Better Business Bureau Badge - Placeholder</li>
              <li>CWB Badge - Placeholder</li>
              <li>
                Island Equipment Operators Association Member Badge -
                Placeholder
              </li>
              <li>CFIB Member Badge - Placeholder</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-700 border-gray-600 text-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-white">Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <GoogleMapComponent
              height="250px"
              className="rounded-md overflow-hidden"
              address="Clarke Engineering & Welding Ltd."
            />
          </CardContent>
        </Card>
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
