import { Camera } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#EDE9FE] via-[#FDF8F0] to-[#F0E6D3]"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C4B5FD]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FDE68A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl font-bold text-[#1C1917] leading-tight mb-6">
          Jugamos.{" "}
          <span style={{ color: '#D2D5F4', textShadow: '0px 1px 3px rgba(60, 40, 120, 0.4)' }}>Pensamos.</span>
          <br />
          Nos encontramos.
        </h1>

        <p className="text-lg sm:text-xl text-[#57534E] max-w-2xl mx-auto mb-10 leading-relaxed">
          Una propuesta que involucra mediación pedagógica profesional
          con juegos de mesa modernos. Encuentros presenciales para adolescentes,
          instituciones y empresas que eligen el pensamiento estratégico
          como herramienta de transformación.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="bg-[#7C3AED] font-semibold px-8 py-3.5 rounded-full hover:bg-[#6D28D9] transition-colors text-base shadow-lg shadow-[#7C3AED]/25" style={{ color: '#D2D5F4', textShadow: '0px 1px 3px rgba(60, 40, 120, 0.4)' }}
          >
            Quiero inscribirme
          </a>
          <a
            href="#contacto"
            className="bg-white/80 text-[#7C3AED] font-semibold px-8 py-3.5 rounded-full border border-[#C4B5FD] hover:bg-[#EDE9FE] transition-colors text-base backdrop-blur-sm"
          >
            Contactar
          </a>
        </div>

        {/* Placeholder image area */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="aspect-[16/7] rounded-2xl bg-gradient-to-br from-[#C4B5FD]/50 to-[#EDE9FE] border-2 border-dashed border-[#C4B5FD] flex items-center justify-center text-[#9B7FD4]">
            <div className="text-center flex flex-col items-center gap-2">
              <Camera size={40} className="text-[#9B7FD4]" />
              <p className="text-sm font-medium">Foto destacada del club</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#9B7FD4]">
        <span className="text-xs font-medium">Conocé más</span>
        <svg className="animate-bounce" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
