import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ServicesPage() {
  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            General Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700">
            Placeholder for details of general services offered. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
            bibendum metus.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Specialized Divisions
          </CardTitle>
          <CardDescription className="text-lg">
            Detailed pages for each division will be linked here. Click to learn
            more about our expertise in specific areas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>
              Heavy-Duty Equipment Repairs -{' '}
              <span className="text-red-500 hover:underline cursor-pointer">
                More Info
              </span>{' '}
              (Link placeholder)
            </li>
            <li>
              Elevators & Cranes -{' '}
              <span className="text-red-500 hover:underline cursor-pointer">
                More Info
              </span>{' '}
              (Link placeholder)
            </li>
            <li>
              Restaurant Repairs & Welding -{' '}
              <span className="text-red-500 hover:underline cursor-pointer">
                More Info
              </span>{' '}
              (Link placeholder)
            </li>
            {/* ... and so on for other divisions ... */}
            <li>
              Commercial Projects -{' '}
              <span className="text-red-500 hover:underline cursor-pointer">
                More Info
              </span>{' '}
              (Link placeholder)
            </li>
            <li>
              Residential Solutions -{' '}
              <span className="text-red-500 hover:underline cursor-pointer">
                More Info
              </span>{' '}
              (Link placeholder)
            </li>
            <li>
              Marine Services -{' '}
              <span className="text-red-500 hover:underline cursor-pointer">
                More Info
              </span>{' '}
              (Link placeholder)
            </li>
            <li>
              Automotive & Trucking -{' '}
              <span className="text-red-500 hover:underline cursor-pointer">
                More Info
              </span>{' '}
              (Link placeholder)
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Service Packages (Placeholder, can remove, open to suggestions)
          </CardTitle>
          <CardDescription className="text-lg">
            Pricing and specific services to be finalized based on market needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-700">
                  Bronze Package
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Booked annual grease trap cleaning.</p>
                <p className="font-semibold text-xl">
                  $500.00{' '}
                  <span className="text-sm text-gray-500">(Placeholder)</span>
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-600">
                  Silver Package
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Quality grease trap cleaning.</p>
                <p className="font-semibold text-xl">
                  $1,000.00{' '}
                  <span className="text-sm text-gray-500">(Placeholder)</span>
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-500">
                  Gold Package
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>On-call 24/7 (10 customers max).</p>
                <p>Quarterly grease trap cleaning.</p>
                <p>Stainless steel polish.</p>
                <p className="font-semibold text-xl">
                  $1,500.00{' '}
                  <span className="text-sm text-gray-500">(Placeholder)</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
