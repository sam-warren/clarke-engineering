import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools' // Optional: for development

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
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  )
}
