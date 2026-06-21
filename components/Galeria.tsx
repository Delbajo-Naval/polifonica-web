"use client";

import { useState } from "react";
import { X } from "lucide-react";

const fotos = [
  { src: "club-juegos-adolescentes-posadas-2023.jpg", alt: "Club de juegos de mesa para adolescentes, 2023" },
  { src: "animacion-cumpleanos-2025.jpg", alt: "Animación de cumpleaños con juegos de mesa, 2025" },
  { src: "semana-estudiante-epja-2025.jpg", alt: "Semana del estudiante, secundario EPJA, 2025" },
  { src: "animacion-cumpleanos-2025-b.jpg", alt: "Animación de cumpleaños con juegos de mesa, 2025" },
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
];

type Foto = typeof fotos[number];

export default function Galeria() {
  const [selected, setSelected] = useState<Foto | null>(null);

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
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}
        >
          <div
            className="grid gap-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {fotos.map((foto) => (
              <div
                key={foto.src}
                className="rounded-xl overflow-hidden"
                style={{ aspectRatio: '4/3', cursor: 'pointer' }}
                onClick={() => setSelected(foto)}
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
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelected(null)}
        >
          {/* Botón cerrar */}
          <button
            className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          {/* Imagen ampliada */}
          <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center gap-4">
            <img
              src={`/images/galeria-polifonica/${selected.src}`}
              alt={selected.alt}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
            />
            <p className="text-white text-sm text-center opacity-80 max-w-lg">
              {selected.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
