import React from 'react';
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
  return (
    <nav className="absolute w-full bg-transparent z-50 px-6 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-green-500">Memory Lane</span>
        </Link>

        <NavigationMenu className="md:mx-auto">
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
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-500 hover:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavBar;
