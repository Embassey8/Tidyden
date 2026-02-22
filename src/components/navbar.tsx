"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NotificationDropdown } from "./notification-dropdown";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-20">
        <nav className="max-w-[102rem] mx-auto h-full flex items-center justify-between px-4 lg:px-6 2xl:px-8 ">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            aria-label="Tidyden Home"
          >
            <Image
              src="/tidyden_logo.png"
              alt="Tidyden Logo"
              className="h-8 w-auto"
              width={160}
              height={32}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <ul className="flex space-x-8">
              {["Home", "FAQ'S", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="group relative px-2 py-1 text-sm lg:text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {item}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Notifications & Auth */}
          <div className="flex items-center space-x-6">
            <NotificationDropdown />

            <div className="hidden md:flex md:items-center md:space-x-4">
              <Button
                variant="ghost"
                asChild
                className="hover:scale-105 transition-transform duration-200"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="hover:scale-105 transition-transform duration-200 "
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  {["Home", "FAQ'S", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-2">
                    <Button variant="ghost" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
      <div className="pt-16">{/* Your main content goes here */}</div>
    </>
  );
}
