import { createFileRoute } from '@tanstack/react-router'
import { MunicipalGovernmentPage } from '@/pages/services/municipal-government'

export const Route = createFileRoute('/services/municipal-government')({
  component: MunicipalGovernmentPage,
}) 