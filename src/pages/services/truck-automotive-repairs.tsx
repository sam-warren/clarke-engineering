import { ServicePage } from '@/components/service-page'

export function TruckAutomotiveRepairsPage() {
  return (
    <ServicePage
      title="🚛 Truck & Automotive Repairs"
      description="Commercial Vehicle Welding • Custom Modifications • Fleet Repair"
      testimonial={{
        quote: "Clarke keeps our Trucks working",
        author: "CEO of Truck Co.",
      }}
      vendors={[
        "Bullfrog Automatics Ltd",
        "Glen Oak Ford",
        "Rand Automotive",
        "Scho's Line Painting",
        "Suburban Motors Ltd",
        "Townside Automotive",
        "Victoria Car Wash",
        "Allen Wright Enterprises Ltd",
        "Russel's Crane & Cartage",
        "Alex Trucking",
        "Argus Carriers Ltd",
        "DL Bins Ltd",
        "GFL Environmental Ltd",
        "HL Disposal and Lawn Services",
        "Jencam Transport",
        "Sooke Disposal",
      ]}
      capabilities={[
        {
          title: "Heavy Truck & Fleet Repairs",
          items: [
            "Hydraulic systems, truck decks (HIABs, dump beds), bins, and garbage trucks.",
          ],
        },
        {
          title: "Structural & Accident Repair",
          items: [
            "Frame straightening, fifth wheel plates, bulkheads, and crash restoration.",
          ],
        },
        {
          title: "Machining & Drive System Work",
          items: [
            "Driveshaft rebuilds, transmission casings, line boring, honing, and cylinder retubing.",
          ],
        },
        {
          title: "Trailer & Specialty Equipment Repairs",
          items: [
            "Aerial lifts, scissor lifts, paving and concrete industry equipment, and disposal systems.",
          ],
        },
        {
          title: "Custom Fabrication & Upfitting",
          items: [
            "Food truck builds, deck accessories, car wash systems, telecom lift repairs, and one-off prototypes.",
          ],
        },
        {
          title: "Fleet Welding Services",
          items: [
            "Mobile welding for ongoing fleet maintenance and urgent in-yard repairs.",
          ],
        },
      ]}
      tagline="Built to haul. Fixed to last."
    />
  )
} 