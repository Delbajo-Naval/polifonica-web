import { AtSign } from "lucide-react";

export default function EnLosMedios() {
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

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Columna 1 — Video YouTube */}
          <div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe
                src="https://www.youtube.com/embed/T0jP-vrxpiM"
                title="Entrevista a Polifónica"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm font-medium" style={{ color: '#343434', opacity: 0.7 }}>
              Entrevista a Luciana Minadeo
            </p>
          </div>

          {/* Columna 2 — Instagram */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', background: 'white', border: '1px solid #D2D5F4' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', gap: '16px', textAlign: 'center' }}>
              <AtSign size={40} style={{ color: '#B5477A' }} />
              <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold" style={{ color: '#343434' }}>
                @polifonica_ok
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#343434', opacity: 0.7 }}>
                Seguí el día a día del club, fotos de encuentros y novedades
              </p>
              <a
                href="https://www.instagram.com/polifonica_ok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#B5477A' }}
              >
                Seguir en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
