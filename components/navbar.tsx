"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-playfair font-bold text-[#2D3E50]">
            Arte a Medida
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/" className="font-medium hover:text-[#D4AF37] transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/semana-a-semana" className="font-medium hover:text-[#D4AF37] transition-colors">
                Semana a Semana
              </Link>
            </li>
            <li>
              <Link href="/noticias-tips" className="font-medium hover:text-[#D4AF37] transition-colors">
                Noticias/Tips
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="font-medium hover:text-[#D4AF37] transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block font-medium hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/semana-a-semana"
                  className="block font-medium hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Semana a Semana
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias-tips"
                  className="block font-medium hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Noticias/Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="block font-medium hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

