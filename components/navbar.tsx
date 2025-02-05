"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            CNCG Dehradun
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/team" className="hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Join Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="block hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/events" className="block hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/team" className="block hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/contact" className="block hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90">Join Us</Button>
          </div>
        )}
      </div>
    </nav>
  )
}

