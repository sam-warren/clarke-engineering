import { ServicePage } from '@/components/service-page'

export function ExcavatorRepairsPage() {
  return (
    <ServicePage
      title={
        <span className="flex items-center justify-center gap-2">
          <img
            src="/images/site-assets/emojis/excavator.png"
            alt="Excavator"
            className="w-16 h-16 inline-block"
          />
          Excavator Repairs
        </span>
      }
      description="Reliable hydraulic, mechanical, and welding services for excavation contractors — in the shop or in the field."
      testimonial={{
        quote: 'Clarke keeps our Excavators working',
        author: 'CEO of Excavation Co.',
      }}
      vendors={[
        'RG Excavating Ltd',
        'Don Mann Excavating Ltd',
        'Hydroforce Excavating',
        'Ken Tara Excavating',
        'Michell Excavating Ltd',
        'Northcott Excavating',
        'South Island Excavating',
        'C-1 Contractors Ltd',
        'Dracor Construction Ltd',
      ]}
      capabilities={[
        {
          title: 'Excavator & Earthmoving Equipment Specialists',
          items: [
            'Repairs for excavators, backhoes, bulldozers, and dump trucks',
            'Bucket rebuilds with new cutting edges and wear strips',
            'Hardfacing, crack gouging, and structural welding',
            'Free pickup and delivery on major attachment overhauls',
          ],
        },
        {
          title: 'Hydraulic System Experts',
          items: [
            'Full hydraulic cylinder rebuilds',
            'System diagnostics and troubleshooting',
            'Microhoning, retubing, and seal/O-ring replacement',
            'Cylinder mount and hose bracket repairs',
          ],
        },
        {
          title: 'Precision Line Boring — In-Field & In-Shop',
          items: [
            'Bore and pin repair for worn pivot points',
            'Weld buildup and precision boring',
            'Removal of seized pins and custom sleeve fabrication',
          ],
        },
        {
          title: 'Compact Equipment Repairs',
          items: [
            'Skid steer and mini-excavator repairs (including rubber track replacement)',
            'Loader arm and quick-attach reinforcement',
            'Forklift and utility vehicle welding',
          ],
        },
        {
          title: 'Welding & Custom Fabrication',
          items: [
            'Jobsite welding for buckets, rippers, and custom mods',
            'Reinforcement of guards, steps, and handholds',
            'Concrete and demolition equipment repairs',
          ],
        },
      ]}
      tagline="Done right. Done fast. Done to last."
    />
  )
}
