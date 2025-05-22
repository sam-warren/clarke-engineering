import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { GoogleMapComponent } from '@/components/google-integration/google-map'

export function AboutPage() {
  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-xl text-center text-gray-600 mb-10">
        Learn more about our company and the people who make it great.
      </p>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Our History / Our Stories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-lg">
            Placeholder for long-form interview with Graham & Logan explaining
            who they are and what they do.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Nullam ac erat ante. Vivamus consecrated.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Our Facility & Team
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="mb-2 text-lg">
              Placeholder for drone shot of the front of the building with
              trucks, forklifts, crane lined up.
            </p>
            <Skeleton className="w-full h-72 rounded-md bg-gray-300 flex items-center justify-center text-gray-500">
              [Drone Shot Placeholder]
            </Skeleton>
          </div>
          <div>
            <p className="mb-3 text-lg">Our Location</p>
            <GoogleMapComponent
              height="400px"
              className="w-full rounded-md mb-6"
              showMarker={true}
              address="Clarke Engineering & Welding Ltd."
            />
          </div>
          <div>
            <p className="mb-3 text-lg">
              Placeholder for photos of technicians working (Clarke logos
              prominent), possibly B&W with red logo pop.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  className="w-full h-56 rounded-md bg-gray-300 flex items-center justify-center text-gray-500"
                >
                  [Team/Work Photo Placeholder {i}]
                </Skeleton>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Media Mentions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-lg">
            Placeholder for press releases from Times Colonist / CTV.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Times Colonist Article - [Date] - Placeholder</li>
            <li>CTV News Segment - [Date] - Placeholder</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
