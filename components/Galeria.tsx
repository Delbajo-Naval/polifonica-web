"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const fotos = [
  { src: "club-juegos-adolescentes-posadas-2023.jpg", alt: "Club de juegos de mesa para adolescentes, 2023" },
  { src: "animacion-cumpleanos-2025.jpg", alt: "Animación de cumpleaños con juegos de mesa, 2025" },
  { src: "semana-estudiante-epja-2025.jpg", alt: "Semana del estudiante, secundario EPJA, 2025" },
  { src: "tardes-posadas-plaza-shopping-2025.jpg", alt: "Tardes de juegos de mesa en Posadas Plaza Shopping" },
  { src: "evento-bambino-juegos-2025.jpg", alt: "Evento con Bambino Juegos y Juguetes, 2025" },
  { src: "tardes-posadas-plaza-shopping-familias-2025.jpg", alt: "Tardes de juegos en familia, Posadas Plaza Shopping" },
  { src: "tardes-posadas-plaza-shopping-2025-b.jpg", alt: "Tardes de juegos de mesa en Posadas Plaza Shopping" },
  { src: "club-juegos-adolescentes-2024.jpg", alt: "Club de juegos de mesa para adolescentes, 2024" },
  { src: "desarrollo-competencias-secundario-2023.jpg", alt: "Desarrollo de competencias y educación emocional, Nivel Secundario" },
  { src: "congreso-nacional-literaturas-2024.jpg", alt: "Congreso Nacional de Literaturas, 2024" },
  { src: "tardes-club-ajedrez-2025.jpg", alt: "Tardes de juegos de mesa en el Club del Ajedrez" },
  { src: "juegos-mesa-aula-2022.jpg", alt: "Juegos de mesa en el aula, 2022" },
  { src: "proyecto-creacion-juegos-mesa-2023.jpg", alt: "Proyecto de creación de juegos de mesa, etapa inicial" },
  { src: "club-juegos-adolescentes-invierno-2025.jpg", alt: "Club de juegos de mesa, edición invierno 2025" },
  { src: "club-juegos-adolescentes-posadas-2023-b.jpg", alt: "Club de juegos de mesa para adolescentes, 2023" },
  { src: "torneo-tichu-manija-fest-2026-a.jpg", alt: "Entrega de premio, torneo de Tichu en Manija Fest, 2026" },
  { src: "torneo-tichu-manija-fest-2026-b.jpg", alt: "Torneo de Tichu en Manija Fest, 2026" },
  { src: "devir-pockets-posadas-plaza-2025.jpg", alt: "Presentación de Devir Pockets en Posadas Plaza Shopping" },
];

export default function Galeria() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prev = () => setSelectedIndex((i) => (i === null ? 0 : (i - 1 + fotos.length) % fotos.length));
  const next = () => setSelectedIndex((i) => (i === null ? 0 : (i + 1) % fotos.length));
  const close = () => setSelectedIndex(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const current = selectedIndex !== null ? fotos[selectedIndex] : null;

  return (
    <section id="galeria" className="py-20 sm:py-28" style={{ backgroundColor: '#D2D5F4' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            Galería
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold" style={{ color: '#343434' }}>
            El club en imágenes
          </h2>
        </div>

        {/* Grid uniforme */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {fotos.map((foto, i) => (
            <div
              key={foto.src}
              className="rounded-xl overflow-hidden"
              style={{ aspectRatio: '4/3', cursor: 'pointer' }}
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={`/images/galeria-polifonica/${foto.src}`}
                alt={foto.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current !== null && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={close}
        >
          {/* Botón cerrar */}
          <button
            className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
            onClick={close}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          {/* Flecha izquierda */}
          {fotos.length > 1 && (
            <button
              className="absolute left-3 sm:left-6 text-white hover:opacity-70 transition-opacity rounded-full p-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', top: '50%', transform: 'translateY(-50%)' }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Imagen ampliada */}
          <div
            className="flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/galeria-polifonica/${current.src}`}
              alt={current.alt}
              style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px' }}
            />
            <p className="text-white text-sm text-center opacity-80 max-w-lg">
              {current.alt}
            </p>
            <p className="text-white text-xs opacity-40">
              {selectedIndex + 1} / {fotos.length}
            </p>
          </div>

          {/* Flecha derecha */}
          {fotos.length > 1 && (
            <button
              className="absolute right-3 sm:right-6 text-white hover:opacity-70 transition-opacity rounded-full p-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', top: '50%', transform: 'translateY(-50%)' }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
