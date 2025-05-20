import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-gray-700 border-gray-600 text-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-white">Contact Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p>Phone: (250) 475 2400</p>
            <p>Email: Clarke@islandnet.com</p>
            <p>Address: [Your Business Address Here]</p>
            <p>Hours: [Your Store Hours Here]</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-700 border-gray-600 text-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-white">Association Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Red Seal Badge - Placeholder</li>
              <li>BBB Better Business Bureau Badge - Placeholder</li>
              <li>CWB Badge - Placeholder</li>
              <li>Island Equipment Operators Association Member Badge - Placeholder</li>
              <li>CFIB Member Badge - Placeholder</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-700 border-gray-600 text-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-white">Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-600 h-40 flex items-center justify-center rounded-md">
              <p className="text-gray-400">Map Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Separator className="my-8 bg-gray-600" />
      <div className="text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Clarke Engineering & Welding Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
} 