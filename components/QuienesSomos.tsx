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
    <section id="quienes-somos" className="py-20 sm:py-28 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-[#C4B5FD]/40 to-[#EDE9FE] border-2 border-dashed border-[#C4B5FD] flex items-center justify-center text-[#9B7FD4]">
              <div className="text-center flex flex-col items-center gap-2">
                <Camera size={40} className="text-[#9B7FD4]" />
                <p className="text-sm font-medium">Foto de Luciana</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-3">
              Quiénes somos
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#1C1917] mb-6 leading-tight">
              Luciana Minadeo
            </h2>
            <p className="text-[#57534E] text-lg leading-relaxed mb-8">
              Soy Profesora y Licenciada en Letras, especialista en juegos de mesa
              como herramienta educativa y cultural. A lo largo de mi trayectoria
              trabajé en instituciones públicas y privadas en niveles primario,
              secundario y universitario, acompañando procesos de aprendizaje en
              Lengua y Literatura y diseñando propuestas pedagógicas con impacto real.
              Me especializo en producción y edición de textos, mediación cultural y
              diseño de experiencias educativas innovadoras, integrando juegos de mesa
              y tecnologías digitales como herramientas para el aprendizaje, la
              socialización y el pensamiento crítico. Creé Polifónica convencida de
              que jugar juntos es una de las formas más ricas de aprender, pensar
              y vincularse.
            </p>

            <ul className="space-y-4">
              {logros.map((l) => (
                <li key={l.texto} className="flex items-start gap-3">
                  <l.Icon size={20} className="text-[#7C3AED] shrink-0 mt-0.5" />
                  <p className="text-[#44403C] text-sm leading-relaxed">{l.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
