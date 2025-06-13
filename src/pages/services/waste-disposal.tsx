import { ServicePage } from '@/components/service-page'

export function WasteDisposalPage() {
  return (
    <ServicePage
      title="🗑️ Waste Management Equipment"
      description="Trusted experts in heavy-duty bin, truck, and equipment repairs"
      ctaTitle="Ready to get your equipment fixed?"
      testimonial={{
        quote: "Clarke keeps our Waste Management Equipment working",
        author: "CEO of Waste Co.",
      }}
      vendors={[
        "Capital Regional District (CRD)",
        "GFL Environmental Inc",
        "Emterra Environmental",
        "Waste Management Inc",
        "Provincial Waste Management",
        "Municipal Collection Services",
        "Private Hauling Companies",
        "Industrial Waste Contractors",
        "Construction & Demolition Haulers",
        "Recycling Processing Facilities",
      ]}
      capabilities={[
        {
          title: "Roll-Off Container & Bin Repairs",
          items: [
            "Structural welding, floor patching, and door hinge rebuilds for waste containers.",
          ],
        },
        {
          title: "Collection Truck Modifications",
          items: [
            "Packer body repairs, hydraulic cylinder mounts, and tailgate restoration.",
          ],
        },
        {
          title: "Compactor & Baler Equipment",
          items: [
            "Ram cylinder rebuilds, chamber welding, and safety system modifications.",
          ],
        },
        {
          title: "Transfer Station Equipment",
          items: [
            "Conveyors, sorting equipment, and structural platform welding.",
          ],
        },
        {
          title: "Fleet Maintenance Services",
          items: [
            "Mobile welding for waste collection vehicles and container delivery trucks.",
          ],
        },
        {
          title: "Custom Fabrication",
          items: [
            "Specialized bins, containment systems, and waste handling equipment.",
          ],
        },
      ]}
      tagline="Waste solutions that work. Built to handle the toughest jobs."
    />
  )
} 