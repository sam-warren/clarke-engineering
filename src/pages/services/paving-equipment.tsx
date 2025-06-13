import { ServicePage } from '@/components/service-page'

export function PavingEquipmentPage() {
  return (
    <ServicePage
      title="🚧 Paving Equipment Repairs"
      description="Heavy-Duty Welding, Field Repairs & Mobile Service"
      ctaTitle="Ready to get your equipment fixed?"
      testimonial={{
        quote: "Clarke keeps our Paving Equipment working",
        author: "CEO of Paving Co.",
      }}
      vendors={[
        "Lafarge Canada Inc",
        "Burnco Rock Products Ltd",
        "Central Paving Services",
        "Victoria Line Painting Ltd",
        "Island Paving Ltd",
        "Hart Paving",
        "CanTech Contracting Ltd",
        "Asphalt Plants & Road Construction",
        "Mainland Sand & Gravel",
        "Port of Victoria / Nanaimo",
      ]}
      capabilities={[
        {
          title: "Asphalt Plant & Mobile Equipment",
          items: [
            "Plant maintenance for continuous production during paving season.",
          ],
        },
        {
          title: "Paver & Compactor Repairs",
          items: [
            "Screed welding, hydraulic repairs, and roller drum restoration.",
          ],
        },
        {
          title: "Hot Mix & Transfer Equipment",
          items: [
            "Heated truck bed liners, conveyor systems, and batch plant repairs.",
          ],
        },
        {
          title: "Field Service & Emergency Repairs",
          items: [
            "Mobile welding rigs for urgent paving equipment breakdowns.",
          ],
        },
        {
          title: "Crushing & Screening Equipment",
          items: [
            "Aggregate plant welding, conveyor repairs, and structural modifications.",
          ],
        },
        {
          title: "Custom Fabrication",
          items: [
            "Guards, steps, walkways, and safety equipment for paving operations.",
          ],
        },
      ]}
      tagline="Keep the roads smooth. We'll keep you rolling."
    />
  )
} 