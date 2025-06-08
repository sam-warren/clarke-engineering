import { ServicePage } from '@/components/service-page'

export function MarineEngineeringPage() {
  return (
    <ServicePage
      title="⚓ Marine Engineering & Welding"
      description="Aluminum & Marine-Grade Welding • Vessel Repairs • Custom Fabrication"
      testimonial={{
        quote: "Clarke keeps our Marine Company Sailing",
        author: "CEO of Ship Co.",
      }}
      vendors={[
        "Canadian Coast Guard",
        "Royal Canadian Navy",
        "Esquimalt Graving Dock",
        "Intercon Marine",
        "Municipal Marine Fleets & Equipment",
      ]}
      capabilities={[
        {
          title: "Aluminum & Steel Fabrication",
          items: [
            "Custom docks, handrails, walkways, and bulkheads",
          ],
        },
        {
          title: "Vessel & Barge Repairs",
          items: [
            "Hull damage welding, corrosion patching, barge structural fixes, and crack gouging.",
          ],
        },
        {
          title: "Hydraulic System Repairs",
          items: [
            "Marine crane and lift hydraulics, hose brackets, custom lugs and pins.",
          ],
        },
        {
          title: "Boat & Small Craft Services",
          items: [
            "Expert aluminum boat repairs by dedicated marine welding staff.",
          ],
        },
        {
          title: "Machining & Custom Part Fabrication",
          items: [
            "Precision machining of pins, lugs, brackets, and attachment hardware.",
          ],
        },
        {
          title: "Interior Marine Metalwork",
          items: [
            "Stainless steel welding for marine interiors, fixtures, and cabinetry components.",
          ],
        },
      ]}
      tagline="Specialists in marine-grade metalwork. Built strong for life at sea."
    />
  )
} 