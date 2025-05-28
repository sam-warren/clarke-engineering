import { createFileRoute } from '@tanstack/react-router'
import { MarineEngineeringPage } from '@/pages/services/marine-engineering'

export const Route = createFileRoute('/services/marine-engineering')({
  component: MarineEngineeringPage,
}) 