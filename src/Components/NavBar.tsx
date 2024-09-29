import React, { useState } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full bg-black z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-green-500">Memory Lane</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex md:mx-auto border-none">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), navItemStyle)}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navItemStyle}>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black">
                  <ListItem href="/ourmission" title="Mission">
                    Learn about our goals and values
                  </ListItem>
                  <ListItem href="/team" title="Team">
                    Meet the people behind Memory Lane
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navItemStyle}>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black">
                  <ListItem href="/reminiscence" title="Reminiscence">
                    Explore our memory enhancement tools
                  </ListItem>
                  <ListItem href="/medtrackerpage" title="Med Tracker">
                    Keep track of your medications easily
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? 'fixed inset-0 bg-black z-40 flex flex-col justify-start pt-24' : 'hidden'} md:hidden`}>
        <button 
          className="absolute top-8 right-8 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="space-y-4 px-8">
          <Link href="/" className="block text-xl text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <div className="space-y-2">
            <h3 className="text-green-500 font-semibold">About Us</h3>
            <Link href="/ourmission" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Mission
            </Link>
            <Link href="/team" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Team
            </Link>
          </div>
          <div className="space-y-2">
            <h3 className="text-green-500 font-semibold">Solutions</h3>
            <Link href="/reminiscence" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Reminiscence
            </Link>
            <Link href="/medtrackerpage" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Med Tracker
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const navItemStyle = "text-white hover:text-green-500 transition-colors";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-500 hover:text-white text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavBar;
