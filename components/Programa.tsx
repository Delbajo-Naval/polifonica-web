import { Shield, Puzzle, Lightbulb, Users, Target, MessageCircle, CalendarDays, UsersRound, Dices, GraduationCap, Building2 } from "lucide-react";

const habilidades = [
  { Icon: Shield, label: "Pensamiento estratégico" },
  { Icon: Puzzle, label: "Toma de decisiones" },
  { Icon: Lightbulb, label: "Resolución de problemas" },
  { Icon: Users, label: "Socialización real" },
  { Icon: Target, label: "Tolerancia a la frustración" },
  { Icon: MessageCircle, label: "Comunicación y escucha" },
];

const comoFunciona = [
  { Icon: CalendarDays, texto: "Encuentros semanales presenciales de 2 horas" },
  { Icon: UsersRound, texto: "Grupos de jóvenes de 13 a 17 años" },
  { Icon: Dices, texto: "Curaduría especializada de juegos de mesa modernos" },
  { Icon: GraduationCap, texto: "Mediación pedagógica activa — no juego libre" },
  { Icon: Building2, texto: "Implementable en una o múltiples sedes" },
];

export default function Programa() {
  return (
    <section id="programa" className="py-20 sm:py-28" style={{ background: 'linear-gradient(135deg, #D2D5F4 0%, #F6F3ED 55%, #F0E6D3 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            El programa
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#343434' }}>
            Para adolescentes
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.7 }}>
            Encuentros presenciales semanales de 2 horas para jóvenes de 13 a 17 años,
            con curaduría especializada de juegos modernos y mediación pedagógica activa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Details card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border" style={{ borderColor: '#D2D5F4' }}>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6" style={{ color: '#343434' }}>
              Cómo funciona
            </h3>
            <ul className="space-y-4">
              {comoFunciona.map(({ Icon, texto }) => (
                <li key={texto} className="flex items-start gap-3">
                  <Icon size={20} className="shrink-0 mt-0.5" style={{ color: '#B5477A' }} />
                  <p className="leading-relaxed" style={{ color: '#343434', opacity: 0.8 }}>{texto}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills grid */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6" style={{ color: '#343434' }}>
              Qué desarrolla
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {habilidades.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl p-4 border flex items-center gap-3 hover:opacity-80 transition-opacity"
                  style={{ borderColor: '#D2D5F4' }}
                >
                  <Icon size={20} className="shrink-0" style={{ color: '#B5477A' }} />
                  <span className="text-sm font-medium leading-tight" style={{ color: '#343434' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
