import { createFileRoute } from '@tanstack/react-router'
import { ConstructionRepairsPage } from '@/pages/services/construction-repairs'

export const Route = createFileRoute('/services/construction-repairs')({
  component: ConstructionRepairsPage,
}) 