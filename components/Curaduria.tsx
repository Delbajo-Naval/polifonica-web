import { Cake, Users, PartyPopper } from "lucide-react";

const cards = [
  {
    Icon: Cake,
    titulo: "Cumpleaños",
    descripcion: "Una alternativa original que sorprende a chicos y grandes.",
  },
  {
    Icon: Users,
    titulo: "Noches de amigos o familia",
    descripcion: "Juegos seleccionados para el grupo, sin necesidad de conocer las reglas de antemano.",
  },
  {
    Icon: PartyPopper,
    titulo: "Eventos privados",
    descripcion: "Empresas, equipos, grupos escolares. Adaptamos la propuesta a tu contexto.",
  },
];

export default function Curaduria() {
  return (
    <section id="curaduria" className="py-20 sm:py-28" style={{ backgroundColor: '#FDF0F5' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            Curaduría y animación para eventos
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#343434' }}>
            Una propuesta diferente para tu próximo evento
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
            ¿Querés que tu cumpleaños, reunión de amigos o encuentro familiar sea algo que se recuerde?
            Polifónica lleva los juegos de mesa a tu evento con una propuesta diseñada especialmente
            para tu grupo: selección de juegos según la cantidad de personas, edades e intereses,
            y animación activa durante toda la actividad.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {cards.map(({ Icon, titulo, descripcion }) => (
            <div
              key={titulo}
              className="bg-white rounded-2xl p-7 border flex flex-col gap-4"
              style={{ borderColor: '#D2D5F4' }}
            >
              <Icon size={32} style={{ color: '#B5477A' }} />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold" style={{ color: '#343434' }}>
                {titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
                {descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-base"
            style={{ backgroundColor: '#B5477A' }}
          >
            Consultá tu evento
          </a>
        </div>
      </div>
    </section>
  );
}
