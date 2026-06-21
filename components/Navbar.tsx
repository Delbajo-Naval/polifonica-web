"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "El programa", href: "#programa" },
  { label: "Instituciones", href: "#instituciones" },
  { label: "Empresas", href: "#empresas" },
  { label: "Galería", href: "#galeria" },
  { label: "En los medios", href: "#en-los-medios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: '#F6F3ED' + 'F2' } : {}}
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: '#B5477A' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#B5477A' }}
          >
            Inscribirse
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
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-3" style={{ backgroundColor: '#F6F3ED', borderColor: '#D2D5F4' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm py-1 font-medium"
              style={{ color: '#B5477A' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 text-white text-sm font-semibold px-4 py-2 rounded-full text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#B5477A' }}
            onClick={() => setMenuOpen(false)}
          >
            Inscribirse
          </a>
        </div>
      )}
    </header>
  );
}
