"use client";

import { useEffect } from "react";
import { AtSign, Linkedin } from "lucide-react";

export default function EnLosMedios() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="en-los-medios"
      className="py-20 sm:py-28"
      style={{ background: 'linear-gradient(135deg, #D2D5F4 0%, #F6F3ED 55%, #F0E6D3 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            En los medios
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold" style={{ color: '#343434' }}>
            Conocé más sobre Polifónica
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col gap-4">
            {/* Video YouTube */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe
                src="https://www.youtube.com/embed/T0jP-vrxpiM"
                title="Entrevista a Polifónica"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-sm font-medium" style={{ color: '#343434', opacity: 0.7 }}>
              Entrevista a Luciana Minadeo
            </p>

            {/* Cards de redes sociales */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/polifonica_ok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border bg-white text-center hover:opacity-80 transition-opacity"
                style={{ borderColor: '#D2D5F4' }}
              >
                <AtSign size={28} style={{ color: '#B5477A' }} />
                <span className="text-sm font-semibold" style={{ color: '#343434' }}>@polifonica_ok</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/luciana-minadeo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border bg-white text-center hover:opacity-80 transition-opacity"
                style={{ borderColor: '#D2D5F4' }}
              >
                <Linkedin size={28} style={{ color: '#B5477A' }} />
                <span className="text-sm font-semibold" style={{ color: '#343434' }}>Luciana Minadeo</span>
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA — Instagram embed */}
          <div className="flex flex-col">
            <div className="flex-1 rounded-xl overflow-hidden flex justify-center" style={{ background: '#fff', border: '1px solid #D2D5F4' }}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DIM8Jbxui_y/"
                data-instgrm-version="14"
                style={{ margin: 0, width: '100%', maxWidth: '540px' }}
              />
            </div>
            <p className="mt-3 text-sm text-center">
              <a
                href="https://www.instagram.com/polifonica_ok"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
                style={{ color: '#B5477A' }}
              >
                Ver más en @polifonica_ok
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
