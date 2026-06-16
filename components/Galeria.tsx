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
    <section id="galeria" className="py-20 sm:py-28" style={{ backgroundColor: '#D2D5F4' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            Galería
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold" style={{ color: '#343434' }}>
            El club en imágenes
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className={`${p.aspect} break-inside-avoid rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden`}
              style={{ backgroundColor: '#D2D5F4', borderColor: '#B5477A', opacity: 0.8 }}
            >
              <div className="text-center p-4 flex flex-col items-center gap-2" style={{ color: '#B5477A' }}>
                <Camera size={28} />
                <p className="text-xs font-medium leading-tight">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: '#343434', opacity: 0.5 }}>
          Las fotos reales se cargarán próximamente
        </p>
      </div>
    </section>
  );
}
