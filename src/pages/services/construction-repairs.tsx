import { ServicePage } from '@/components/service-page'

export function ConstructionRepairsPage() {
  return (
    <ServicePage
      title="🏗️ Construction Industry Repairs"
      description="Mobile & In-Shop Welding • Structural Steel • Heavy Equipment"
      testimonial={{
        quote: 'Clarke keeps our construction company working',
        author: 'CEO of Construction Co.',
      }}
      vendors={[
        'Terrazza Builders Ltd',
        'Campbell Construction Ltd',
        'Emery Electric',
        'Farmer Construction Ltd',
        'Foster Air Conditioning Ltd',
        'HHS Drilling and Blasting',
        'Home Lumber Ltd',
        'Independent Heating Services Co',
        'Island Temperature Controls',
        'Jawl Properties Ltd',
        'Knappett Projects Inc',
        "Mac's Heating Ltd",
        'Namdor Reinforcing Steel (1987) Ltd',
        'Orca Masonry',
        'Silver Fern Stainless Ltd',
        'Victoria Drains Services',
      ]}
      capabilities={[
        {
          title: 'Heavy Equipment & Attachment Repairs',
          items: [
            'Excavators, Bobcats, skid steers, drilling rigs',
            'Bins and waste containers',
            'Repair Specialists for the construction waste disposal industry.',
          ],
        },
        {
          title: 'Mobile Field Welding (3 Rigs)',
          items: [
            'On-site repairs for urgent breakdowns and construction downtime prevention.',
          ],
        },
        {
          title: 'Structural & Architectural Steelwork',
          items: [
            'Staircases, platforms, handrails, retaining wall anchors, and custom signage.',
          ],
        },
        {
          title: 'Boiler & Pipe Welding',
          items: [
            'Pressure pipe welds, boiler fixes, HVAC steel sleepers (C5/C6 channels).',
          ],
        },
        {
          title: 'Crane & Elevator Frame Repairs',
          items: ['Mounts, guards, and structural reinforcements.'],
        },
        {
          title: 'Specialty Welding & Fabrication',
          items: ['Dywidag bar cutting/fab, gouging/crack welding'],
        },
      ]}
      tagline="On the tools. On your site. On time."
    />
  )
}
