import { createFileRoute } from '@tanstack/react-router'
import { WasteDisposalPage } from '@/pages/services/waste-disposal'

export const Route = createFileRoute('/services/waste-disposal')({
  component: WasteDisposalPage,
})
