import { Camera } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#F6F3ED' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: '#D2D5F4', opacity: 0.3 }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: '#FDF0F5', opacity: 0.6 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6" style={{ color: '#343434' }}>
          Jugamos.{" "}
          <span style={{ color: '#B5477A' }}>Pensamos.</span>
          <br />
          Nos encontramos.
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#343434', opacity: 0.7 }}>
          Una propuesta que involucra mediación pedagógica profesional
          con juegos de mesa modernos. Encuentros presenciales para adolescentes,
          instituciones y empresas que eligen el pensamiento estratégico
          como herramienta de transformación.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-base shadow-lg"
            style={{ backgroundColor: '#B5477A' }}
          >
            Quiero inscribirme
          </a>
          <a
            href="#contacto"
            className="bg-transparent font-semibold px-8 py-3.5 rounded-full border-2 hover:opacity-80 transition-opacity text-base"
            style={{ borderColor: '#B5477A', color: '#B5477A' }}
          >
            Contactar
          </a>
        </div>

        {/* Placeholder image area */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="aspect-[16/7] rounded-2xl border-2 border-dashed flex items-center justify-center" style={{ backgroundColor: '#D2D5F4', borderColor: '#B5477A', opacity: 0.7 }}>
            <div className="text-center flex flex-col items-center gap-2" style={{ color: '#B5477A' }}>
              <Camera size={40} />
              <p className="text-sm font-medium">Foto destacada del club</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ color: '#B5477A' }}>
        <span className="text-xs font-medium">Conocé más</span>
        <svg className="animate-bounce" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
