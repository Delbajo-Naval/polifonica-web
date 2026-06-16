import { Camera } from "lucide-react";

const placeholders = [
  { id: 1, label: "Club de Juegos · Posadas Plaza", aspect: "aspect-[4/3]" },
  { id: 2, label: "Taller UNaM · Adultos mayores", aspect: "aspect-[3/4]" },
  { id: 3, label: "Club del Ajedrez · Posadas", aspect: "aspect-[4/3]" },
  { id: 4, label: "Selección de juegos", aspect: "aspect-[4/3]" },
  { id: 5, label: "Encuentro · 4ta edición", aspect: "aspect-[3/4]" },
  { id: 6, label: "Juego en equipo", aspect: "aspect-[4/3]" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#D2D5F4', textShadow: '0px 1px 3px rgba(60, 40, 120, 0.4)' }}>
            Galería
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#1C1917]">
            El club en imágenes
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className={`${p.aspect} break-inside-avoid rounded-xl bg-gradient-to-br from-[#C4B5FD]/30 to-[#EDE9FE] border-2 border-dashed border-[#C4B5FD] flex items-center justify-center text-[#9B7FD4] overflow-hidden`}
            >
              <div className="text-center p-4 flex flex-col items-center gap-2">
                <Camera size={28} className="text-[#9B7FD4]" />
                <p className="text-xs font-medium leading-tight">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#A8A29E] mt-8">
          Las fotos reales se cargarán próximamente
        </p>
      </div>
    </section>
  );
}
