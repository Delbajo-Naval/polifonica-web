import { GraduationCap, BookOpen, Gamepad2, FileText, Brain, Video } from "lucide-react";

const logros = [
  {
    Icon: GraduationCap,
    texto: "Profesora y Licenciada en Letras · Docente en todos los niveles",
  },
  {
    Icon: BookOpen,
    texto: "Editora académica e investigadora en narrativa de juegos de mesa",
  },
  {
    Icon: Gamepad2,
    texto: "Creadora de contenido para Devir Argentina",
  },
  {
    Icon: FileText,
    texto:
      '"Abordaje semiótico hacia la narrativa de los juegos de mesa modernos" — Congreso Nacional de Literaturas, 2025',
  },
];

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 sm:py-28" style={{ backgroundColor: '#D2D5F4' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden">
              <img
                src="/perfil-luciana.jpg"
                alt="Luciana Minadeo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
              Quiénes somos
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#343434' }}>
              Luciana Minadeo
            </h2>
            <div className="text-lg leading-relaxed mb-8 text-justify space-y-4" style={{ color: '#343434', opacity: 0.75 }}>
              <p>
                Soy Profesora y Licenciada en Letras, especialista en juegos de mesa
                como herramienta educativa y cultural. A lo largo de mi trayectoria
                trabajé en instituciones públicas y privadas en niveles primario,
                secundario y universitario, acompañando procesos de aprendizaje en
                Lengua y Literatura y diseñando propuestas pedagógicas con impacto real.
              </p>
              <p>
                Me especializo en producción y edición de textos, mediación cultural y
                diseño de experiencias educativas innovadoras, integrando juegos de mesa
                y tecnologías digitales como herramientas para el aprendizaje, la
                socialización y el pensamiento crítico. Creé Polifónica convencida de
                que jugar juntos es una de las formas más ricas de aprender, pensar
                y vincularse.
              </p>
            </div>

            <ul className="space-y-4">
              {logros.map((l) => (
                <li key={l.texto} className="flex items-start gap-3">
                  <l.Icon size={20} className="shrink-0 mt-0.5" style={{ color: '#B5477A' }} />
                  <p className="text-sm leading-relaxed" style={{ color: '#343434', opacity: 0.8 }}>{l.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* El equipo */}
        <div className="mt-20">
          <p className="font-semibold text-sm uppercase tracking-widest mb-8 text-center" style={{ color: '#B5477A' }}>
            El equipo
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Florencia Daly */}
            <div className="bg-white rounded-2xl p-7 border" style={{ borderColor: '#D2D5F4' }}>
              <Brain size={28} className="mb-4" style={{ color: '#B5477A' }} />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-1" style={{ color: '#343434' }}>
                Florencia Daly
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color: '#B5477A' }}>
                Psicóloga · Co-diseño del programa
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
                Aporta la mirada psicológica y socioemocional al diseño de cada encuentro,
                garantizando un abordaje integral del grupo.
              </p>
            </div>

            {/* Federico Saint Girons */}
            <div className="bg-white rounded-2xl p-7 border" style={{ borderColor: '#D2D5F4' }}>
              <Video size={28} className="mb-4" style={{ color: '#B5477A' }} />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-1" style={{ color: '#343434' }}>
                Federico Saint Girons
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color: '#B5477A' }}>
                Realizador audiovisual · Difusión y contenido
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
                Co-fundador de Evolución Manija, productora de encuentros de juegos de mesa.
                A cargo de la documentación visual y difusión del programa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
