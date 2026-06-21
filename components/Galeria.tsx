const fotos = [
  { src: "club-juegos-adolescentes-posadas-2023.jpg", alt: "Club de juegos de mesa para adolescentes, 2023", aspect: "aspect-[4/3]" },
  { src: "animacion-cumpleanos-2025.jpg", alt: "Animación de cumpleaños con juegos de mesa, 2025", aspect: "aspect-[3/4]" },
  { src: "semana-estudiante-epja-2025.jpg", alt: "Semana del estudiante, secundario EPJA, 2025", aspect: "aspect-[4/3]" },
  { src: "animacion-cumpleanos-2025-b.jpg", alt: "Animación de cumpleaños con juegos de mesa, 2025", aspect: "aspect-[4/3]" },
  { src: "tardes-posadas-plaza-shopping-2025.jpg", alt: "Tardes de juegos de mesa en Posadas Plaza Shopping", aspect: "aspect-[3/4]" },
  { src: "evento-bambino-juegos-2025.jpg", alt: "Evento con Bambino Juegos y Juguetes, 2025", aspect: "aspect-[4/3]" },
  { src: "tardes-posadas-plaza-shopping-familias-2025.jpg", alt: "Tardes de juegos en familia, Posadas Plaza Shopping", aspect: "aspect-[4/3]" },
  { src: "tardes-posadas-plaza-shopping-2025-b.jpg", alt: "Tardes de juegos de mesa en Posadas Plaza Shopping", aspect: "aspect-[3/4]" },
  { src: "club-juegos-adolescentes-2024.jpg", alt: "Club de juegos de mesa para adolescentes, 2024", aspect: "aspect-[4/3]" },
  { src: "desarrollo-competencias-secundario-2023.jpg", alt: "Desarrollo de competencias y educación emocional, Nivel Secundario", aspect: "aspect-[4/3]" },
  { src: "congreso-nacional-literaturas-2024.jpg", alt: "Congreso Nacional de Literaturas, 2024", aspect: "aspect-[3/4]" },
  { src: "tardes-club-ajedrez-2025.jpg", alt: "Tardes de juegos de mesa en el Club del Ajedrez", aspect: "aspect-[4/3]" },
  { src: "juegos-mesa-aula-2022.jpg", alt: "Juegos de mesa en el aula, 2022", aspect: "aspect-[4/3]" },
  { src: "proyecto-creacion-juegos-mesa-2023.jpg", alt: "Proyecto de creación de juegos de mesa, etapa inicial", aspect: "aspect-[3/4]" },
  { src: "club-juegos-adolescentes-invierno-2025.jpg", alt: "Club de juegos de mesa, edición invierno 2025", aspect: "aspect-[4/3]" },
  { src: "club-juegos-adolescentes-posadas-2023-b.jpg", alt: "Club de juegos de mesa para adolescentes, 2023", aspect: "aspect-[4/3]" },
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
          {fotos.map((foto) => (
            <div
              key={foto.src}
              className={`${foto.aspect} break-inside-avoid rounded-xl overflow-hidden`}
            >
              <img
                src={`/images/galeria-polifonica/${foto.src}`}
                alt={foto.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
