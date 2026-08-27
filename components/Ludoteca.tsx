"use client";

import { useState } from "react";
import { Zap, Brain, Users, BookOpen, X } from "lucide-react";

const categorias = [
  {
    Icon: Zap,
    titulo: "Para romper el hielo",
    descripcion: "Juegos ágiles, accesibles y llenos de conversación.",
  },
  {
    Icon: Brain,
    titulo: "Para pensar estrategias",
    descripcion: "Decisiones, planificación y resolución de problemas.",
  },
  {
    Icon: Users,
    titulo: "Para jugar en equipo",
    descripcion: "Cooperación, comunicación y objetivos compartidos.",
  },
  {
    Icon: BookOpen,
    titulo: "Para descubrir historias",
    descripcion: "Narrativa, imaginación y mundos por explorar.",
  },
];

export default function Ludoteca() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <section id="ludoteca" className="py-20 sm:py-28" style={{ backgroundColor: '#F6F3ED' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            Ludoteca
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#343434' }}>
            La ludoteca de Polifónica
          </h2>
        </div>

        {/* Imagen hero */}
        <div className="rounded-2xl overflow-hidden mb-6" style={{ cursor: 'pointer' }} onClick={() => setLightbox(true)}>
          <img
            src="/images/ludoteca/ludoteca-estante-2026.jpg"
            alt="Estante de la ludoteca de Polifónica"
            style={{ width: '100%', height: '720px', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
            onClick={() => setLightbox(false)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
              onClick={() => setLightbox(false)}
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>
            <img
              src="/images/ludoteca/ludoteca-estante-2026.jpg"
              alt="Estante de la ludoteca de Polifónica"
              style={{ maxWidth: '95vw', maxHeight: '92vh', objectFit: 'contain', borderRadius: '12px' }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Texto + badge */}
        <div className="text-center mb-14">
          <p className="text-lg leading-relaxed mb-5 max-w-2xl mx-auto" style={{ color: '#343434', opacity: 0.75 }}>
            Una colección en permanente crecimiento, con juegos seleccionados para crear experiencias de encuentro, aprendizaje y diversión.
          </p>
          <a
            href="https://boardgamegeek.com/collection/user/Polifonica?1&sort=title&sortdir=asc&pageID=1&columns%5B%5D=rank&columns%5B%5D=title&columns%5B%5D=version&columns%5B%5D=status&columns%5B%5D=lastmodified&columns%5B%5D=rating&columns%5B%5D=avgrating&columns%5B%5D=numvoters&columns%5B%5D=thumbnail&columns%5B%5D=comment&columns%5B%5D=plays&columns%5B%5D=postdate&columns%5B%5D=avgweight&columns%5B%5D=acquisitiondate&subtype=boardgame&excludesubtype=&rankobjecttype=subtype&rankobjectid=1&own=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full transition-opacity hover:opacity-75"
            style={{ backgroundColor: '#D2D5F4', color: '#5A3E6B' }}
          >
            Más de 150 juegos disponibles →
          </a>
        </div>

        {/* Tarjetas categorías */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {categorias.map(({ Icon, titulo, descripcion }) => (
            <div
              key={titulo}
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: '#fff', borderColor: '#D2D5F4' }}
            >
              <Icon size={28} className="mb-4" style={{ color: '#B5477A' }} />
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold mb-2" style={{ color: '#343434' }}>
                {titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#343434', opacity: 0.72 }}>
                {descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Cita destacada */}
        <blockquote
          className="mb-12 pl-5 py-1"
          style={{ borderLeft: '4px solid #B5477A' }}
        >
          <p className="text-lg leading-relaxed italic" style={{ color: '#343434', opacity: 0.8 }}>
            "Cada juego se selecciona según las edades, características y objetivos del grupo. No llevamos siempre los mismos títulos: diseñamos una experiencia diferente para cada encuentro."
          </p>
        </blockquote>

        {/* Párrafo + botones */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">
          <p className="text-base leading-relaxed flex-1" style={{ color: '#343434', opacity: 0.75 }}>
            Nuestra ludoteca crece gracias a adquisiciones propias y a la confianza de editoriales y tiendas que acompañan a Polifónica.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#colaboraciones"
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-center border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: '#B5477A', color: '#B5477A' }}
            >
              Quiero sumar un juego
            </a>
            <a
              href="https://boardgamegeek.com/collection/user/Polifonica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#D2D5F4', color: '#5A3E6B' }}
            >
              Ver catálogo en BGG
            </a>
          </div>
        </div>

        {/* Cierre CTA */}
        <div
          className="rounded-2xl px-8 py-12 text-center"
          style={{ backgroundColor: '#5A3E6B' }}
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-3">
            ¿Querés que llevemos la ludoteca a tu espacio?
          </h3>
          <p className="text-white mb-8 max-w-xl mx-auto" style={{ opacity: 0.82 }}>
            Seleccionamos los juegos adecuados y diseñamos la experiencia para tu grupo.
          </p>
          <a
            href="#programa"
            className="inline-block text-sm font-semibold px-7 py-3 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#B5477A', color: '#fff' }}
          >
            Conocé nuestras propuestas
          </a>
        </div>

      </div>
    </section>
  );
}
