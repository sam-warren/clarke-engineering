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
import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  ChevronRight,
  ChevronDown,
  Wrench,
  Info,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const serviceLinks = [
  {
    title: (
      <span className="flex items-center gap-2">
        <img
          src="/images/site-assets/emojis/excavator.png"
          alt="Excavator"
          className="w-5 h-5 inline-block"
        />
        Excavator Repairs
      </span>
    ),
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

function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navLinks = [
    { to: '/about', label: 'About', icon: Info },
    { to: '/contact', label: 'Contact', icon: Phone },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden mr-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] sm:w-[350px] flex flex-col overflow-y-auto"
      >
        <SheetHeader className="pb-6">
          <div className="flex items-center justify-center">
            <img
              src="/images/brand-identity/clarke-logo.png"
              alt="Clarke Engineering & Welding"
              className="h-16 w-auto"
            />
          </div>
        </SheetHeader>

        <nav className="flex flex-col space-y-1 flex-1 overflow-y-auto">
          {/* Services with collapsible submenu */}
          <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start text-lg font-medium px-4 py-3 h-auto"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>Services</span>
                  </div>
                  {servicesOpen ? (
                    <ChevronDown className="h-4 w-4 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-red-500 flex-shrink-0" />
                  )}
                </div>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pl-4">
              {serviceLinks.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="font-medium mb-1">{service.title}</div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {service.description}
                  </div>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Regular navigation links */}
          {navLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                activeProps={{
                  className: 'bg-accent text-accent-foreground',
                }}
              >
                <IconComponent className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <SheetFooter className="mt-6 pt-6 border-t flex-shrink-0">
          <div className="w-full space-y-3">
            <div className="text-center text-sm text-muted-foreground">
              Ready to get your equipment back in action?
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Get In Touch
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <div className="text-center text-xs text-muted-foreground">
              Call us: (250) 475 2400
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function Header() {
  const [position, setPosition] = useState<string>(
    '[&_div.absolute]:right-auto [&_div.absolute]:left-0',
  )
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect()
      const spaceOnLeft = menuRect.left
      const spaceOnRight = window.innerWidth - menuRect.right

      // Set position based on available space
      if (spaceOnLeft > spaceOnRight) {
        setPosition('[&_div.absolute]:left-auto [&_div.absolute]:right-0')
      } else {
        setPosition('[&_div.absolute]:right-auto [&_div.absolute]:left-0')
      }
    }
  }, [menuRef.current])

  const navLinks = [
    // { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-4 md:px-6 lg:px-8">
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

        {/* Desktop Navigation */}
        <NavigationMenu
          ref={menuRef}
          className={cn('hidden md:flex', position)}
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(navigationMenuTriggerStyle(), 'text-lg')}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="relative grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  )
}
