import { createFileRoute } from '@tanstack/react-router'
import { ElevatorCraneRepairsPage } from '@/pages/services/elevator-crane-repairs'

export const Route = createFileRoute('/services/elevator-crane-repairs')({
  component: ElevatorCraneRepairsPage,
}) 