import { ServicePage } from '@/components/service-page'

export function MunicipalGovernmentPage() {
  return (
    <ServicePage
      title="🏛️ Municipal & Government Projects"
      description="Trusted Welding & Fabrication for Public Infrastructure"
      ctaTitle="Ready to start your project?"
      testimonial={{
        quote: "Clarke keeps our Municipal projects moving",
        author: "Municipal Manager",
      }}
      vendors={[
        "City of Victoria",
        "District of Saanich",
        "Township of Esquimalt",
        "District of Oak Bay",
        "City of Colwood",
        "District of Langford",
        "Town of Sidney",
        "Capital Regional District",
        "Provincial Government Agencies",
        "Crown Corporations",
      ]}
      capabilities={[
        {
          title: "Public Infrastructure Fabrication",
          items: [
            "Custom railings, barriers, and safety equipment for public facilities.",
          ],
        },
        {
          title: "Fleet & Equipment Services",
          items: [
            "Municipal vehicle modifications, snow plow mounts, and equipment repairs.",
          ],
        },
        {
          title: "Parks & Recreation Facilities",
          items: [
            "Playground equipment repairs, park furniture, and recreational facility metalwork.",
          ],
        },
        {
          title: "Emergency Services Support",
          items: [
            "Fire truck modifications, emergency vehicle repairs, and safety equipment fabrication.",
          ],
        },
        {
          title: "Water & Sewer Infrastructure",
          items: [
            "Utility access structures, pipe supports, and treatment facility metalwork.",
          ],
        },
        {
          title: "Transportation Infrastructure",
          items: [
            "Traffic signal supports, street furniture, and transit facility improvements.",
          ],
        },
      ]}
      tagline="Serving our community with reliable public infrastructure solutions."
    />
  )
}
