import { ServicePage } from '@/components/service-page'

export function ConcreteEquipmentPage() {
  return (
    <ServicePage
      title="🏭 Concrete Equipment Repairs"
      description="Heavy-Duty Welding • Mobile Service • Custom Solutions"
      ctaTitle="Ready to get your equipment fixed?"
      testimonial={{
        quote: "Clarke keeps our Concrete Equipment working",
        author: "CEO of Concrete Co.",
      }}
      vendors={[
        "Lafarge Canada Inc",
        "Ocean Concrete Ltd",
        "Somas Concrete Products Ltd",
        "Victoria Ready Mix Ltd",
        "Island Ready Mix Ltd",
        "Burnco Rock Products Ltd",
        "Tri-Con Ready Mix Ltd",
        "Municipal Public Works",
        "Construction Companies",
        "Precast Concrete Manufacturers",
      ]}
      capabilities={[
        {
          title: "Concrete Plant & Batch Equipment",
          items: [
            "Mixer drum repairs, conveyor systems, and plant structural welding.",
          ],
        },
        {
          title: "Ready Mix Truck Repairs",
          items: [
            "Drum welding, hydraulic motor mounts, and chute modifications.",
          ],
        },
        {
          title: "Pump & Placing Equipment",
          items: [
            "Concrete pump boom repairs, hydraulic cylinder rebuilds, and line repairs.",
          ],
        },
        {
          title: "Precast & Form Work",
          items: [
            "Custom fabrication of concrete forms, lifting hardware, and embedments.",
          ],
        },
        {
          title: "Aggregate Handling Equipment",
          items: [
            "Conveyor repairs, screening equipment welding, and crusher modifications.",
          ],
        },
        {
          title: "Field Service & Emergency Repairs",
          items: [
            "Mobile welding for urgent concrete equipment breakdowns on job sites.",
          ],
        },
      ]}
      tagline="Concrete solutions. Built to last."
    />
  )
} 