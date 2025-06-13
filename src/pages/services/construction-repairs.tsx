import { ServicePage } from '@/components/service-page'

export function ConstructionRepairsPage() {
  return (
    <ServicePage
      title="🏗️ Construction Industry Repairs"
      description="Mobile & In-Shop Welding • Structural Steel • Heavy Equipment"
      ctaTitle="Ready to start your project?"
      testimonial={{
        quote: "Clarke keeps our Construction projects moving",
        author: "Project Manager",
      }}
      vendors={[
        "PCL Construction",
        "Farmer Construction Ltd",
        "Marco Group",
        "Bird Construction",
        "Clark Builders",
        "Local General Contractors",
        "Steel Fabrication Companies",
        "Heavy Civil Contractors",
        "Industrial Construction",
        "Structural Steel Erectors",
      ]}
      capabilities={[
        {
          title: "Structural Steel Fabrication & Repair",
          items: [
            "Beam welding, column repairs, and structural modifications for construction projects.",
          ],
        },
        {
          title: "Construction Equipment Repairs",
          items: [
            "Crane welding, hoist repairs, and heavy machinery restoration.",
          ],
        },
        {
          title: "Site Welding Services",
          items: [
            "Mobile welding rigs for on-site repairs and emergency construction support.",
          ],
        },
        {
          title: "Safety & Access Fabrication",
          items: [
            "Custom handrails, staircases, platforms, and fall protection systems.",
          ],
        },
        {
          title: "Specialty Construction Support",
          items: [
            "Boiler and pipe welding, pressure vessel repairs, and industrial equipment services.",
          ],
        },
        {
          title: "Custom Fabrication",
          items: [
            "Gates, architectural metalwork, and specialized construction components.",
          ],
        },
      ]}
      tagline="Building stronger. Building better. Built to last."
    />
  )
}
