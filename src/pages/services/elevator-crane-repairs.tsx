import { ServicePage } from '@/components/service-page'

export function ElevatorCraneRepairsPage() {
  return (
    <ServicePage
      title="🏗️ Cranes,  Lifts, and The Elevator Industry Repairs"
      description="Experts in Lifting Equipment Welding, Fabrication & Structural Repair"
      testimonial={{
        quote: 'Clarke keeps our Cranes working',
        author: 'CEO of Crane Co.',
      }}
      vendors={[
        'TK Elevator',
        'Westcoast Elevator',
        'Richmond Elevator',
        'Kone Elevators & Escalators',
        'LB Crane Rentals',
        "Bert's Enterprises",
        'Esquimalt Graving Dock',
        'MR Crane Services Ltd',
        "Russel's Crane & Cartage",
        'Vic City Crane',
        'Advantage Crane',
      ]}
      capabilities={[
        {
          title: 'Hydraulic & Mechanical Repair',
          items: [
            'Troubleshooting and repairs for cylinders, pumps, and control systems.',
          ],
        },
        {
          title: 'Precision Welding & Fabrication',
          items: [
            'Baseplates, rope plates, car-to-cable assemblies, and custom brackets.',
          ],
        },
        {
          title: 'Crane Overhaul & Modification',
          items: [
            'Tower cranes, AWP lifts, level-luffing cranes (Krupp 150T, Ebco 30T, Konecranes), boom repair, and pin removal.',
          ],
        },
        {
          title: 'Bearing & Pulley Work',
          items: [
            'Pressure-fit pulley replacement, bearing inspection and servicing.',
          ],
        },
        {
          title: 'Forklift & Lift Equipment Repair',
          items: [
            'Boom lifts, cherry pickers, scissor lifts—serving the telecommunications and logistics industries.',
          ],
        },
      ]}
      tagline="Built for those who lift BC."
    />
  )
}
