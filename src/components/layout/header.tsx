import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

const serviceLinks = [
  {
    title: '🚜 Excavator Repairs',
    description:
      'Reliable hydraulic, mechanical, and welding services for excavation contractors.',
    to: '/services/excavator-repairs',
  },
  {
    title: '🏗️ Elevator & Crane Repairs',
    description:
      'Experts in Lifting Equipment Welding, Fabrication & Structural Repair',
    to: '/services/elevator-crane-repairs',
  },
  {
    title: '🚛 Truck & Automotive Repairs',
    description:
      'Commercial Vehicle Welding • Custom Modifications • Fleet Repair',
    to: '/services/truck-automotive-repairs',
  },
  {
    title: '🏗️ Construction Industry Repairs',
    description:
      'Mobile & In-Shop Welding • Structural Steel • Heavy Equipment',
    to: '/services/construction-repairs',
  },
  {
    title: '🏛️ Municipal & Government Projects',
    description: 'Trusted Welding & Fabrication for Public Infrastructure',
    to: '/services/municipal-government',
  },
  {
    title: '⚓ Marine Engineering & Welding',
    description:
      'Aluminum & Marine-Grade Welding • Vessel Repairs • Custom Fabrication',
    to: '/services/marine-engineering',
  },
  {
    title: '🚧 Paving Equipment Repairs',
    description: 'Heavy-Duty Welding, Field Repairs & Mobile Service',
    to: '/services/paving-equipment',
  },
  {
    title: '🏭 Concrete Equipment Repairs',
    description: 'Heavy-Duty Welding • Mobile Service • Custom Solutions',
    to: '/services/concrete-equipment',
  },
  {
    title: '🗑️ Waste Management Equipment',
    description:
      'Trusted experts in heavy-duty bin, truck, and equipment repairs',
    to: '/services/waste-disposal',
  },
]

export function Header() {
  const navLinks = [
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto flex h-24 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="mr-6 flex items-center space-x-4">
          <img
            src="/images/brand-identity/clarke-logo.png"
            alt="Clarke Logo"
            width={450}
            height={450}
            className="h-20 w-auto"
          />
          <div className="flex flex-col py-2">
            <span className="bg-gradient-to-r from-red-600/90 to-red-500/90 bg-clip-text text-xl font-extrabold leading-relaxed tracking-tight text-transparent sm:text-2xl font-family-michroma">
              ENGINEERING & WELDING
            </span>
          </div>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(navigationMenuTriggerStyle(), 'text-lg')}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-3 p-4 md:grid-cols-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.to}
                      to={service.to}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {service.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.to}>
                <Link
                  to={link.to}
                  className={cn(navigationMenuTriggerStyle(), 'text-lg')}
                  activeProps={{
                    className: 'bg-accent text-accent-foreground font-semibold',
                  }}
                  inactiveProps={{
                    className: cn(
                      navigationMenuTriggerStyle(),
                      'text-lg',
                      'hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground',
                    ),
                  }}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button - Placeholder for Shadcn Sheet or DropdownMenu */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {/* 
        Future enhancements for Header:
        - Mobile navigation: Implement using Shadcn Sheet component for a drawer.
        - Dropdown menus for services/divisions (if needed): Shadcn NavigationMenu submenus or DropdownMenu.
        - Sticky Call to Action: Implement using Shadcn Button and manage visibility on scroll.
      */}
    </header>
  )
}
