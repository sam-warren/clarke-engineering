import { createFileRoute } from '@tanstack/react-router'
import { ConcreteEquipmentPage } from '@/pages/services/concrete-equipment'

export const Route = createFileRoute('/services/concrete-equipment')({
  component: ConcreteEquipmentPage,
})
