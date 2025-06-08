import { ServicePage } from '@/components/service-page'

export function WasteDisposalPage() {
  return (
    <ServicePage
      title="🗑️ Waste Management Equipment"
      description="Trusted experts in heavy-duty bin, truck, and equipment repairs — in the shop or on-site, fast and reliable."
      testimonial={{
        quote: "Clarke keeps our Disposal Company hauling",
        author: "CEO of Waste Co.",
      }}
      vendors={[
        "Waste Connections of Canada Inc",
        "GFL Environmental Inc",
        "DL Bins Ltd",
        "Sooke Disposal",
        "HL Disposal and Lawn Services",
        "Allen Wright Enterprises",
        "1-800 Got Junk",
      ]}
      capabilities={[
        {
          title: "Disposal Bin Repair Specialists",
          items: [
            "Rebuilds and patching for front-load, roll-off, and lugger bins",
            "Lid and hinge repair or replacement",
            "Liner installation and hard surfacing",
            "Corrosion and impact damage restoration",
          ],
        },
        {
          title: "Truck Body & Hydraulic Repairs",
          items: [
            "HIAB and hooklift repair",
            "Compactor, roll-off, and side-load truck welding",
            "Hydraulic cylinder rebuilds and troubleshooting",
            "Line boring for worn pivots and hinge points",
          ],
        },
        {
          title: "Chassis & Frame Reinforcement",
          items: [
            "Subframe repairs",
            "Custom fabrication of bumper guards, light brackets, and steps",
            "Weld repairs on hoist mounts, outriggers, and bin rails",
          ],
        },
        {
          title: "Fleet Maintenance Welding",
          items: [
            "Scheduled servicing and fast-response field repairs",
            "Emergency welding support for trucks and trailers",
            "Mobile rig service available 7 days a week",
          ],
        },
        {
          title: "Refinishing & Protection",
          items: [
            "Touch-up painting after repair",
            "Rust prevention coating for bins and decks",
            "Steel guard installation for high-wear points",
          ],
        },
        {
          title: "Custom Fabrication",
          items: [
            "Brackets, gussets, guards, and hard-to-source parts",
            "Retrofit solutions to extend service life of aging equipment",
            "Bin system modifications to meet new truck specs",
          ],
        },
      ]}
      tagline="Waste industry welding and repair that keeps your fleet moving."
    />
  )
} 