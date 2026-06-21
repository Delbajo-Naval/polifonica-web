import { Target, BookOpenCheck, MessageSquare, BarChart2 } from "lucide-react";

const diferenciales = [
  {
    Icon: Target,
    texto: "Selección de juegos según el objetivo de equipo",
  },
  {
    Icon: BookOpenCheck,
    texto: "Diseño pedagógico, no animación recreativa",
  },
  {
    Icon: MessageSquare,
    texto: "Dinámicas que revelan patrones de comunicación reales",
  },
  {
    Icon: BarChart2,
    texto: "Cierre reflexivo con aprendizajes transferibles al trabajo",
  },
];

export default function Empresas() {
  return (
    <section id="empresas" className="py-20 sm:py-28" style={{ background: 'linear-gradient(135deg, #D2D5F4 0%, #F6F3ED 55%, #F0E6D3 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            Para empresas
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#343434' }}>
            Integración de equipos con propósito
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Stats + descripción */}
          <div className="flex flex-col gap-6">
            {/* Dos stats lado a lado */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-6 shadow-sm border text-center" style={{ backgroundColor: '#D2D5F4', borderColor: '#D2D5F4' }}>
                <p className="text-6xl font-bold font-[family-name:var(--font-playfair)] mb-3" style={{ color: '#B5477A' }}>80%</p>
                <p className="text-sm font-medium mb-3" style={{ color: '#343434' }}>del tiempo laboral se consume en colaboración mal gestionada</p>
                <p className="text-xs leading-snug" style={{ color: '#343434', opacity: 0.6 }}>Harvard Business Review, Cross, Rebele & Grant (2016)</p>
              </div>
              <div className="rounded-2xl p-6 shadow-sm border text-center" style={{ backgroundColor: '#D2D5F4', borderColor: '#D2D5F4' }}>
                <p className="text-6xl font-bold font-[family-name:var(--font-playfair)] mb-3" style={{ color: '#B5477A' }}>30%</p>
                <p className="text-sm font-medium mb-3" style={{ color: '#343434' }}>de los equipos colabora bien entre áreas</p>
                <p className="text-xs leading-snug" style={{ color: '#343434', opacity: 0.6 }}>Asana, State of Work 2025</p>
              </div>
            </div>

            {/* Descripción y botón */}
            <div className="rounded-2xl p-7 shadow-sm border" style={{ backgroundColor: '#D2D5F4', borderColor: '#D2D5F4' }}>
              <p className="leading-relaxed mb-6" style={{ color: '#343434', opacity: 0.8 }}>
                Los juegos de mesa modernos crean situaciones reales de colaboración,
                negociación y toma de decisiones bajo presión —
                en un entorno donde equivocarse no tiene costo.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#B5477A' }}
              >
                Diseñar una jornada
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Differentials */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6" style={{ color: '#343434' }}>
              Por qué Polifónica es diferente
            </h3>
            <p className="mb-8 leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
              No es un escape room ni una tarde de juegos.
              Cada jornada tiene objetivo, estructura y diseño pedagógico
              orientado a resultados concretos: comunicación, trabajo en equipo
              y toma de decisiones entre áreas.
            </p>
            <ul className="space-y-4">
              {diferenciales.map(({ Icon, texto }) => (
                <li key={texto} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border" style={{ borderColor: '#D2D5F4' }}>
                  <Icon size={20} className="shrink-0" style={{ color: '#B5477A' }} />
                  <p className="font-medium" style={{ color: '#343434' }}>{texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
