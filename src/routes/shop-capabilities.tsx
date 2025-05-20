import { createFileRoute } from '@tanstack/react-router';
import { ShopCapabilitiesPage } from '../pages/shop-capabilities-page';

export const Route = createFileRoute('/shop-capabilities')({
  component: ShopCapabilitiesPage,
}); 