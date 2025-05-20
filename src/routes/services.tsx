import { ServicesPage } from '@/pages/services-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})
