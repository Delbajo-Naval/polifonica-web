"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const programasItems = [
  { label: "Club para adolescentes", href: "#programa" },
  { label: "Instituciones privadas y gubernamentales", href: "#instituciones" },
  { label: "Integración para empresas", href: "#empresas" },
  { label: "Curaduría y animación para eventos", href: "#curaduria" },
];

const links = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Colaboraciones", href: "#colaboraciones" },
  { label: "Portfolio", href: "#galeria" },
  { label: "En los medios", href: "#en-los-medios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: 'rgba(246,243,237,0.95)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img src="/logo-polifonicafooter.png" alt="Polifónica" width={48} height={48} style={{ objectFit: 'contain' }} />
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold" style={{ color: '#343434' }}>
            Polifónica
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Quiénes somos */}
          <a
            href="#quienes-somos"
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: '#B5477A' }}
          >
            Quiénes somos
          </a>

          {/* Programas dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: '#B5477A' }}
            >
              Programas
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border py-2 z-50"
                style={{ borderColor: '#D2D5F4' }}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                {programasItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#FDF0F5]"
                    style={{ color: '#343434' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#B5477A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#343434')}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Resto de links */}
          {links.slice(1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: '#B5477A' }}
            >
              {l.label}
            </a>
          ))}

          {/* Redes sociales */}
          <a
            href="https://www.instagram.com/polifonica_ok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: '#B5477A' }}
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/luciana-minadeo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: '#B5477A' }}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Botón Contacto */}
          <a
            href="#contacto"
            className="text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#B5477A' }}
          >
            Contacto
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: '#B5477A' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-1"
          style={{ backgroundColor: '#F6F3ED', borderColor: '#D2D5F4' }}
        >
          <a href="#quienes-somos" className="text-sm py-2 font-medium" style={{ color: '#B5477A' }} onClick={() => setMenuOpen(false)}>
            Quiénes somos
          </a>

          {/* Programas expandido en mobile */}
          <p className="text-xs font-semibold uppercase tracking-widest mt-2 mb-1" style={{ color: '#343434', opacity: 0.4 }}>
            Programas
          </p>
          {programasItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm py-2 font-medium pl-3"
              style={{ color: '#B5477A' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {links.slice(1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm py-2 font-medium"
              style={{ color: '#B5477A' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="mt-3 text-white text-sm font-semibold px-4 py-2 rounded-full text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#B5477A' }}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
