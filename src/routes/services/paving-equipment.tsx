import { createFileRoute } from '@tanstack/react-router'
import { PavingEquipmentPage } from '@/pages/services/paving-equipment'

export const Route = createFileRoute('/services/paving-equipment')({
  component: PavingEquipmentPage,
}) 