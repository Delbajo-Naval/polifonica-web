import { ClipboardList, Landmark, MapPin, GraduationCap } from "lucide-react";

const beneficios = [
  {
    Icon: ClipboardList,
    titulo: "Fundamentación pedagógica sólida",
    texto: "Programa con base académica que justifica presupuesto público como dispositivo cultural educativo.",
  },
  {
    Icon: Landmark,
    titulo: "Política cultural e inclusión",
    texto: "Aborda la brecha en alfabetización estratégica: muchas instituciones ya tienen ajedrez, robótica y arte. Polifónica completa la oferta.",
  },
  {
    Icon: MapPin,
    titulo: "Flexible en sedes",
    texto: "Implementable en una o múltiples sedes simultáneamente, adaptado a la escala del programa institucional.",
  },
  {
    Icon: GraduationCap,
    titulo: "Dirección especializada",
    texto: "Con investigación académica publicada en congreso nacional y trayectoria docente en todos los niveles.",
  },
];

export default function Instituciones() {
  return (
    <section id="instituciones" className="py-20 sm:py-28 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#2E3A59' }}>
              Para instituciones y municipios
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#1C1917] mb-6 leading-tight">
              Una política cultural que falta
            </h2>

            <blockquote className="border-l-4 border-[#7C3AED] pl-5 mb-8 bg-[#EDE9FE] rounded-r-xl py-4 pr-4">
              <p className="text-[#44403C] italic leading-relaxed">
                "Muchos municipios ya tienen ajedrez, robótica, cine y arte.
                No tienen alfabetización en juegos de mesa contemporáneos."
              </p>
            </blockquote>

            <p className="text-[#57534E] leading-relaxed mb-8">
              Polifónica ofrece un programa con fundamentación pedagógica y académica
              que permite a las instituciones justificar el presupuesto como inversión
              en cultura, educación y cohesión social — no como entretenimiento.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#E07A7A', color: 'white' }}
            >
              Quiero conocer más
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4">
            {beneficios.map(({ Icon, titulo, texto }) => (
              <div key={titulo} className="bg-white rounded-xl p-5 border border-[#EDE9FE] hover:border-[#C4B5FD] transition-colors">
                <Icon size={20} className="text-[#7C3AED] mb-3" />
                <h3 className="font-semibold text-[#1C1917] text-sm mb-2">{titulo}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
