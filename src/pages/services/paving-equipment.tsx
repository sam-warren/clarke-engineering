import { ServicePage } from '@/components/service-page'

export function PavingEquipmentPage() {
  return (
    <ServicePage
      title="🚧 Paving Equipment Repairs"
      description="Heavy-Duty Welding, Field Repairs & Mobile Service"
      testimonial={{
        quote: "Clarke keeps our Paving Company paving",
        author: "CEO of Pave Co.",
      }}
      vendors={[
        "Capital City Paving",
        "Island Asphalt",
        "Arrowhead Paving",
        "Five Star Paving",
        "BlackJacket Paving & Sealcoating",
      ]}
      capabilities={[
        {
          title: "Paver Repairs",
          items: [
            "Screed welding, hopper rebuilds, auger and slat conveyor fixes.",
          ],
        },
        {
          title: "Heated Tank & Manifold Repairs",
          items: [
            "Jacketed pipe welds, burner bracket repairs, valve leak patching.",
          ],
        },
        {
          title: "Roller & Compactor Fixes",
          items: [
            "Drum mount welds, scraper bar brackets, ROPS and fender repairs.",
          ],
        },
        {
          title: "Hydraulic System Repairs",
          items: [
            "Cylinder mounts, pump brackets, guard fabrication.",
          ],
        },
        {
          title: "Dump Truck & Trailer Repairs",
          items: [
            "Box liner installs, tailgate hinge rebuilds, tarp arm repairs.",
          ],
        },
        {
          title: "Sealcoating Rig Repairs",
          items: [
            "Tank crack patching, hose reel mounts, agitator shaft welds.",
          ],
        },
        {
          title: "Plant & Bin Welding",
          items: [
            "Hot bin patching, catwalks, guardrails, and drag slat repairs.",
          ],
        },
        {
          title: "Custom Fabrication",
          items: [
            "Tool racks, shovel holders, tie-downs, crew steps.",
          ],
        },
      ]}
      tagline="Local. Fast. Reliable. We keep your equipment working."
    />
  )
} 