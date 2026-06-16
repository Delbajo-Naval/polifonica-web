import { GraduationCap, BookOpen, Gamepad2, FileText, Camera } from "lucide-react";

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
    <section id="quienes-somos" className="py-20 sm:py-28" style={{ backgroundColor: '#F6F3ED' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl border-2 border-dashed flex items-center justify-center" style={{ backgroundColor: '#D2D5F4', borderColor: '#B5477A', opacity: 0.8 }}>
              <div className="text-center flex flex-col items-center gap-2" style={{ color: '#B5477A' }}>
                <Camera size={40} />
                <p className="text-sm font-medium">Foto de Luciana</p>
              </div>
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
      </div>
    </section>
  );
}
