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
          <img src="/logo-poli.png" alt="Polifónica" width={40} height={40} />
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
