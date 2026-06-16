"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "El programa", href: "#programa" },
  { label: "Instituciones", href: "#instituciones" },
  { label: "Empresas", href: "#empresas" },
  { label: "Galería", href: "#galeria" },
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
        scrolled ? "bg-[#FDF8F0]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img src="/logo-poli.png" alt="Polifónica" width={40} height={40} />
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold" style={{ color: '#D2D5F4', textShadow: '0px 1px 3px rgba(60, 40, 120, 0.4)' }}>
            Polifónica
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#57534E] hover:text-[#7C3AED] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 bg-[#7C3AED] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#6D28D9] transition-colors" style={{ color: '#D2D5F4', textShadow: '0px 1px 3px rgba(60, 40, 120, 0.4)' }}
          >
            Inscribirse
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#7C3AED]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FDF8F0] border-t border-[#EDE9FE] px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#57534E] hover:text-[#7C3AED] py-1 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 bg-[#7C3AED] text-sm font-semibold px-4 py-2 rounded-full text-center hover:bg-[#6D28D9] transition-colors" style={{ color: '#D2D5F4', textShadow: '0px 1px 3px rgba(60, 40, 120, 0.4)' }}
            onClick={() => setMenuOpen(false)}
          >
            Inscribirse
          </a>
        </div>
      )}
    </header>
  );
}
