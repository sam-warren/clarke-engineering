import { createFileRoute } from '@tanstack/react-router'
import { TruckAutomotiveRepairsPage } from '@/pages/services/truck-automotive-repairs'

export const Route = createFileRoute('/services/truck-automotive-repairs')({
  component: TruckAutomotiveRepairsPage,
}) 