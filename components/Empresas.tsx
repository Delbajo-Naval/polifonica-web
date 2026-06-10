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
    <section id="empresas" className="py-20 sm:py-28 bg-gradient-to-b from-[#EDE9FE] to-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-3">
            Para empresas
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#1C1917] mb-4">
            Integración de equipos con propósito
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Stat highlight */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#EDE9FE] text-center">
            <p className="text-7xl font-bold font-[family-name:var(--font-playfair)] text-[#7C3AED] mb-3">30%</p>
            <p className="text-[#44403C] text-lg font-medium mb-4">de los equipos colabora bien entre áreas</p>
            <p className="text-[#78716C] text-sm">Fuente: Asana State of Work 2025</p>

            <div className="my-8 border-t border-[#EDE9FE]" />

            <p className="text-[#44403C] leading-relaxed mb-6">
              Los juegos de mesa modernos crean situaciones reales de colaboración,
              negociación y toma de decisiones bajo presión —
              en un entorno donde equivocarse no tiene costo.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#7C3AED] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#6D28D9] transition-colors"
            >
              Diseñar una jornada
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Differentials */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-6">
              Por qué Polifónica es diferente
            </h3>
            <p className="text-[#57534E] mb-8 leading-relaxed">
              No es un escape room ni una tarde de juegos.
              Cada jornada tiene objetivo, estructura y diseño pedagógico
              orientado a resultados concretos: comunicación, trabajo en equipo
              y toma de decisiones entre áreas.
            </p>
            <ul className="space-y-4">
              {diferenciales.map(({ Icon, texto }) => (
                <li key={texto} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-[#EDE9FE]">
                  <Icon size={20} className="text-[#7C3AED] shrink-0" />
                  <p className="text-[#44403C] font-medium">{texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
