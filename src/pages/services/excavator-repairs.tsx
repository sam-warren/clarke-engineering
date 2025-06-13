import { ServicePage } from '@/components/service-page'

export function ExcavatorRepairsPage() {
  return (
    <ServicePage
      title={
        <span className="flex items-center justify-center gap-2">
          <img
            src="/images/site-assets/emojis/excavator.webp"
            alt="Excavator"
            className="w-12 h-12 inline-block"
          />
          Excavator Repairs
        </span>
      }
      description="Reliable hydraulic, mechanical, and welding services for excavation contractors."
      ctaTitle="Ready to get your equipment fixed?"
      testimonial={{
        quote: "Clarke has been fixing our excavators for decades. Their quality is unmatched.",
        author: "Site Manager, Local Excavation Company",
      }}
      vendors={[
        "Deeley Excavating",
        "Earth Tech Enterprises",
        "Cameron Contracting Ltd",
        "Waiward Steel",
        "Hartland Landfill",
        "Coastline Erosion Control",
        "Tristar Excavating",
        "Site Preparation Companies",
        "Municipal Public Works Departments",
        "Highway Maintenance Contractors",
      ]}
      capabilities={[
        {
          title: "Hydraulic Systems",
          items: [
            "Complete hydraulic rebuilds for excavators, loaders, and compactors.",
          ],
        },
        {
          title: "Undercarriage & Track Work",
          items: [
            "Track chain repair, sprocket rebuilding, and hydraulic drive motor overhauls.",
          ],
        },
        {
          title: "Boom & Arm Repairs",
          items: [
            "Welding and reinforcement of structural components, pivot bushings, and hydraulic mounts.",
          ],
        },
        {
          title: "Bucket & Attachment Services",
          items: [
            "Cutting edge replacement, structural welding, and custom bucket fabrication.",
          ],
        },
        {
          title: "Engine & Power Train",
          items: [
            "Diesel engine rebuilds, transmission work, and differential overhauls.",
          ],
        },
        {
          title: "Field Service & Emergency Repairs",
          items: [
            "Mobile welding rigs dispatched to job sites for urgent breakdowns.",
          ],
        },
      ]}
      tagline="Keep digging. We'll keep you running."
    />
  )
}
