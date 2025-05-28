import { ServicePage } from '@/components/service-page'

export function MunicipalGovernmentPage() {
  return (
    <ServicePage
      title="🏛️ Municipal & Government Projects"
      description="Trusted Welding & Fabrication for Public Infrastructure"
      testimonial={{
        quote: "Clarke keeps our City Trucks working",
        author: "CEO of City.",
      }}
      vendors={[
        "Canadian Coast Guard",
        "Royal Canadian Navy",
        "Capital Regional District",
        "Esquimalt Graving Dock",
        "Intercon Marine",
        "BC Transit",
        "District of Oak Bay",
        "District of Saanich",
        "BC Hydro",
        "School District #61",
        "Vancouver Island Health Authority",
        "Saanich Fire Dept",
      ]}
      capabilities={[
        {
          title: "Civic Infrastructure Repairs",
          items: [
            "Road barriers, aluminum handrails, guardrails, and bollard welding.",
          ],
        },
        {
          title: "Public Amenities & Installations",
          items: [
            "Bleacher frames, bike racks, seating supports, signage posts, and custom fixtures.",
          ],
        },
        {
          title: "Public Art & Structural Steelwork",
          items: [
            "Archways, display frames, decorative metalwork",
            "(e.g., Bastion Square Archway – City of Victoria)",
          ],
        },
        {
          title: "Fleet & Equipment Welding",
          items: [
            "Snowplows, salt spreaders, trailers, and municipal service vehicles.",
          ],
        },
        {
          title: "Custom Prototyping & One-Off Builds",
          items: [
            "Site-specific steel solutions, brackets, mounts, and safety structures.",
          ],
        },
      ]}
      tagline="Local. Dependable. Experienced in public works and civic infrastructure."
    />
  )
} 