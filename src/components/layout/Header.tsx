'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Who We Are',
    href: '/who-we-are',
    children: [
      { label: 'Officers', href: '/who-we-are/officers' },
      { label: 'Insurance', href: '/who-we-are/insurance' },
    ]
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Calendars', href: '/what-we-do/calendars' },
      {
        label: 'Charitable Operations',
        href: '',
        children: [
          { label: 'Programs', href: '/what-we-do/charitable-operations/programs' },
        ]
      },
    ]
  },
  { label: 'Membership', href: '/membership' },
  { label: '4th Degree', href: '/4th-degree' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50">
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-kofc-blue p-2"
                  aria-label="Open Menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect width="20" height="2" y="3" />
                    <rect width="20" height="2" y="9" />
                    <rect width="20" height="2" y="15" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] p-0">
                <div className="p-6 flex flex-col h-full">
                  <div className="space-y-4 flex-1">
                    <MobileNav items={navItems} onSelect={() => setIsOpen(false)} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="kofc-logo-mobile-container flex items-center justify-center">
              <Image
                src="/images/council-blue-logo-swords-mobile.png"
                alt="Council 12392"
                width={143}
                height={58}
                priority
                crossOrigin=""
              />
            </Link>

            <div className="w-10" />
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="bg-white border-b">
          <div className="container mx-auto py-4 flex justify-center">
            <Link href="/" className="kofc-logo-desktop-container flex items-center justify-center">
              <Image
                src="/images/council-blue-h105.png"
                alt="Council 12392"
                width={390}
                height={42}
                priority
                crossOrigin=""
              />
            </Link>
          </div>
        </div>
        <div className="bg-white shadow-sm sticky top-0 z-40">
          <div className="container mx-auto">
            <nav className="flex justify-center">
              <ul className="flex">
                {navItems.map((item) => (
                  <NavItem key={item.href} item={item} />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ item }: { item: NavItem }) {
  if (item.children) {
    return (
      <li className="relative group">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              href={item.href}
              className="flex items-center px-4 py-3 text-kofc-blue hover:text-kofc-gold transition-colors"
            >
              {item.label}
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {item.children.map((child) => {
              if (child.children) {
                return (
                  <DropdownMenuGroup key={child.href || child.label}>
                    <DropdownMenuLabel>{child.label}</DropdownMenuLabel>
                    {child.children.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                );
              }

              return (
                <DropdownMenuItem key={child.href} asChild>
                  <Link href={child.href}>{child.label}</Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        className="flex items-center px-4 py-3 text-kofc-blue hover:text-kofc-gold transition-colors"
      >
        {item.label}
      </Link>
    </li>
  );
}

function MobileNav({ items, onSelect }: { items: NavItem[], onSelect: () => void }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <MobileNavItem key={item.href || item.label} item={item} onSelect={onSelect} />
      ))}
    </ul>
  );
}

function MobileNavItem({ item, onSelect, depth = 0 }: { item: NavItem, onSelect: () => void, depth?: number }) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <li className={cn("relative", depth > 0 && "ml-4")}>
        {item.href ? (
          <Link
            href={item.href}
            className="flex items-center py-2 text-kofc-blue hover:text-kofc-gold transition-colors"
            onClick={onSelect}
          >
            {item.label}
          </Link>
        ) : (
          <button
            className="flex items-center justify-between w-full py-2 text-kofc-blue hover:text-kofc-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {item.label}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className={cn("transform transition-transform", isOpen && "rotate-180")}
            >
              <path d="M2 4L6 8L10 4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        )}

        {isOpen && (
          <ul className="mt-2 ml-4 space-y-2">
            {item.children.map((child) => (
              <MobileNavItem key={child.href || child.label} item={child} onSelect={onSelect} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className={cn(depth > 0 && "ml-4")}>
      <Link
        href={item.href}
        className="block py-2 text-kofc-blue hover:text-kofc-gold transition-colors"
        onClick={onSelect}
      >
        {item.label}
      </Link>
    </li>
  );
}
