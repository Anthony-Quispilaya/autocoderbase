"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav
      className="w-full flex justify-center py-4 sticky top-0 left-0 right-0 z-[100]"
      style={{ position: 'sticky', zIndex: 100 }}
    >
      <div
        className="flex items-center gap-6 rounded-full px-8 py-3 shadow-2xl backdrop-blur-xl border-2 border-white/40"
        style={{
          background: 'linear-gradient(0deg, rgba(117, 0, 0, 0.59) 0%, rgba(0, 0, 0, 0.64) 100%)',
          boxShadow: '0 8px 48px 0 rgba(0,0,0,0.10)',
        }}
      >
        {/* Desktop Navigation + Social Icons */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group relative text-2xl font-semibold text-white px-10 py-4 overflow-visible border-2 border-transparent rounded-full hover:border-white/40 transform-gpu transition-transform duration-150 hover:scale-125 origin-center"
              style={{ zIndex: 1 }}
            >
              <span className="relative z-10">{route.label}</span>
            </Link>
          ))}

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/anthony-quispilaya" // TODO: Replace with actual username
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative px-10 py-4 overflow-visible border-2 border-transparent rounded-full hover:border-white/40 transform-gpu transition-transform duration-150 hover:scale-125 origin-center"
            style={{ zIndex: 1 }}
          >
            <span className="relative z-10"><img src="/linkedin.svg" alt="LinkedIn" width={120} height={50} className="inline-block align-middle m-0 p-0" /></span>
            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:bg-black/35 group-hover:backdrop-blur-sm transition-all duration-200 z-0" style={{filter: 'blur(2px)', margin: 4}} />
          </a>
          {/* Email Icon */}
          <a
            href="mailto:anthonyquispilaya@gmail.com" // TODO: Replace with actual email
            aria-label="Email"
            className="group relative px-10 py-4 overflow-visible border-2 border-transparent rounded-full hover:border-white/40 transform-gpu transition-transform duration-150 hover:scale-125 origin-center"
            style={{ zIndex: 1 }}
          >
            <span className="relative z-10"><img src="/mail.svg" alt="Email" width={38} height={38} className="inline-block align-middle" /></span>
            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:bg-black/35 group-hover:backdrop-blur-sm transition-all duration-200 z-0" style={{filter: 'blur(2px)', margin: 4}} />
          </a>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div
            className="rounded-full px-8 py-5 shadow-2xl backdrop-blur-xl border-2 border-white/40"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.12) 0%, rgba(200, 200, 200, 0.08) 100%)',
              boxShadow: '0 8px 48px 0 rgba(0,0,0,0.10)',
            }}
          >
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <button aria-label="Open menu" className="p-4">
                  <span className="block w-8 h-8 bg-white rounded-full" />
                  <span className="block w-8 h-8 bg-white rounded-full" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1 text-xs text-gray-500">Navigation</div>
                {routes.map((route) => (
                  <DropdownMenuItem key={route.href} asChild>
                    <Link href={route.href}>{route.label}</Link>
                  </DropdownMenuItem>
                ))}
                <div className="px-2 py-1 text-xs text-gray-500">Projects</div>
                <DropdownMenuItem asChild>
                  <Link href="/projects/data-visualization">Data Visualization</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/ai-chatbot">AI Chatbot</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/static-website">Static Website</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}