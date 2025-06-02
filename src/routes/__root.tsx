import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
