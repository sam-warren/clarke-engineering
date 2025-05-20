import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ShopCapabilitiesPage() {
  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Shop Capabilities
      </h1>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Our 6,000 sq ft Facility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-lg text-gray-700">
            Detailed information about our welding and machining shop,
            equipment, capacity, and technologies used.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed diam eget risus varius blandit sit amet non magna. Nullam quis
            risus eget urna mollis ornare vel eu leo.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Equipment Highlights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Equipment Item 1 - Placeholder description</li>
            <li>Equipment Item 2 - Placeholder description</li>
            <li>
              Equipment Item 3 - Placeholder description
              <ul className="list-circle list-inside ml-6 text-md text-gray-600">
                <li>Sub-detail A for Equipment 3</li>
                <li>Sub-detail B for Equipment 3</li>
              </ul>
            </li>
            <li>Equipment Item 4 - Placeholder description</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Shop Photos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-lg text-gray-700">
            A glimpse into our extensive workshop and advanced machinery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton
                key={i}
                className="w-full h-56 rounded-md bg-gray-300 flex items-center justify-center text-gray-500"
              >
                [Shop/Equipment Photo Placeholder {i}]
              </Skeleton>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
