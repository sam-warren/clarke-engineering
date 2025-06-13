import { ServicePage } from '@/components/service-page'

export function ElevatorCraneRepairsPage() {
  return (
    <ServicePage
      title="🏗️ Cranes, Lifts, and The Elevator Repair Industry"
      description="Experts in Lifting Equipment Welding, Fabrication & Structural Repair"
      ctaTitle="Ready to get your equipment fixed?"
      testimonial={{
        quote: "Clarke keeps our Lifting Equipment working",
        author: "Safety Manager",
      }}
      vendors={[
        "Thyssen Krupp Elevator",
        "Otis Elevator Company",
        "Schindler Elevator Corp",
        "KONE Inc",
        "Local Elevator Service Companies",
        "Crane Rental Companies",
        "Construction Contractors",
        "Industrial Maintenance Providers",
        "Material Handling Equipment Dealers",
        "Safety Inspection Services",
      ]}
      capabilities={[
        {
          title: "Elevator Equipment Repairs",
          items: [
            "Elevator car frames, guide rail brackets, and safety system components.",
          ],
        },
        {
          title: "Mobile Crane Services",
          items: [
            "Boom repairs, outrigger welding, and structural crane modifications.",
          ],
        },
        {
          title: "Aerial Work Platform Repairs",
          items: [
            "Scissor lifts, boom lifts, and platform structural welding.",
          ],
        },
        {
          title: "Material Handling Equipment",
          items: [
            "Forklift repairs, conveyor systems, and lifting device modifications.",
          ],
        },
        {
          title: "Safety & Inspection Support",
          items: [
            "Structural reinforcement and safety system component fabrication.",
          ],
        },
        {
          title: "Custom Lifting Solutions",
          items: [
            "Specialized lifting hardware, custom brackets, and safety equipment.",
          ],
        },
      ]}
      tagline="Lifting solutions that work. Safety you can trust."
    />
  )
}
