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
    texto: "Aborda una brecha estratégica: un programa cultural que se complementa con robótica, artes y cine y completa la oferta.",
  },
  {
    Icon: MapPin,
    titulo: "Flexible en sedes",
    texto: "Implementable en una o múltiples sedes simultáneamente, adaptado a la escala del programa institucional.",
  },
  {
    Icon: GraduationCap,
    titulo: "Dirección especializada",
    texto: "Con un equipo que conjuga psicología, respaldo académico y trayectoria en docencia en todos los niveles.",
  },
];

export default function Instituciones() {
  return (
    <section id="instituciones" className="py-20 sm:py-28" style={{ backgroundColor: '#D2D5F4' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
              Instituciones privadas y gubernamentales
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-1 leading-tight" style={{ color: '#343434' }}>
              Una propuesta cultural que falta
            </h2>
            <p className="text-base mb-6" style={{ color: '#343434', opacity: 0.5 }}>
              para institutos y municipios
            </p>

            <blockquote className="border-l-4 pl-5 mb-8 rounded-r-xl py-4 pr-4" style={{ borderColor: '#B5477A', backgroundColor: 'rgba(210,213,244,0.35)' }}>
              <p className="italic leading-relaxed" style={{ color: '#343434' }}>
                "Muchos municipios y espacios ya cuentan con propuestas de ajedrez, robótica, cine y artes para niños o adultos.
                Sin embargo, la oferta para adolescentes que permita la socialización directa, aún es un vacío por llenar."
              </p>
            </blockquote>

            <p className="leading-relaxed mb-8" style={{ color: '#343434', opacity: 0.75 }}>
              Polifónica ofrece un programa con fundamentación pedagógica y académica
              que permite a las instituciones justificar el presupuesto como inversión
              en cultura, educación y cohesión social — no solo como entretenimiento.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#B5477A' }}
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
              <div key={titulo} className="bg-white rounded-xl p-5 border hover:opacity-90 transition-opacity" style={{ borderColor: '#D2D5F4' }}>
                <Icon size={20} className="mb-3" style={{ color: '#B5477A' }} />
                <h3 className="font-semibold text-sm mb-2" style={{ color: '#343434' }}>{titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#343434', opacity: 0.7 }}>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
