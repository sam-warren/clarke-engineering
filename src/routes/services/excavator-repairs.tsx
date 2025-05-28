import { createFileRoute } from '@tanstack/react-router'
import { ExcavatorRepairsPage } from '@/pages/services/excavator-repairs'

export const Route = createFileRoute('/services/excavator-repairs')({
  component: ExcavatorRepairsPage,
}) 