import { Link } from '@tanstack/react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility, standard with Shadcn

export function Header() {
  const navLinks = [
    // { to: '/', label: 'Home' }, // Home is usually covered by the logo link
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/shop-capabilities', label: 'Shop Capabilities' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for a proper SVG logo later */}
          {/* <img src="/logo.svg" alt="Clarke Logo" className="h-6 w-6" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-red-600">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-bold text-xl sm:inline-block">
            Clarke Engineering
          </span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.to}>
                <Link to={link.to} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(navigationMenuTriggerStyle(), "text-lg")}
                    activeProps={{ className: 'bg-accent text-accent-foreground font-semibold' }}
                    inactiveProps={{ className: 'hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground' }}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button - Placeholder for Shadcn Sheet or DropdownMenu */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
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
  );
} 