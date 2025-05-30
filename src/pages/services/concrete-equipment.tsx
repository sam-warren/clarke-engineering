import { ServicePage } from '@/components/service-page'

export function ConcreteEquipmentPage() {
  return (
    <ServicePage
      title="🏭 Concrete Equipment Repairs & Fabrication"
      description="Heavy-Duty Welding • Mobile Service • Custom Solutions"
      testimonial={{
        quote: "Clarke keeps our Concrete Company pouring",
        author: "CEO of Island Asphalt.",
      }}
      vendors={[
        "Butler Concrete & Aggregate",
        "Heidelberg Materials",
        "City Pumping",
        "Oceanside Concrete Pumping",
        "Radix Concrete Pumping",
        "Pacific Concrete Cutters",
        "LaFarge Canada",
      ]}
      capabilities={[
        {
          title: "Hydraulic & Truck Repairs",
          items: [
            "Cylinder mounts, dump box welding, hose bracket fixes, truck steps, and sub-frame reinforcement.",
          ],
        },
        {
          title: "Conveyor & Chute Repairs",
          items: [
            "Troughs, belt tensioners, guards, pulleys, and custom chute fabrication with AR/UHMW liners.",
          ],
        },
        {
          title: "Silo & Bin Welding",
          items: [
            "Cone patches, gate frames, ladder cages, and corrosion-resistant welds.",
          ],
        },
        {
          title: "Boom & Pump Truck Repairs",
          items: [
            "Crack welds on booms, outrigger reinforcement, pipe brackets, and custom guards.",
          ],
        },
        {
          title: "Loader & Skid-Steer Repairs",
          items: [
            "Bucket edge rebuilds, quick-attach welds, and hydraulic frame repairs.",
          ],
        },
        {
          title: "Batch Plant Maintenance",
          items: [
            "Catwalks, towers, access ladders, and structural bracing repairs.",
          ],
        },
        {
          title: "Safety & Compliance Fabrication",
          items: [
            "Custom handrails, fall protection anchors, safety cages, and guard retrofits.",
          ],
        },
      ]}
      tagline="Local. Fast. Reliable. We keep your plant and fleet moving."
    />
  )
} 