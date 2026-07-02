const grupos = [
  {
    categoria: "Editoriales",
    logos: [
      { src: "/logos/logo-devir.jpg", alt: "Devir Argentina" },
      { src: "/logos/logo-supernoob.png", alt: "SuperNoob Games" },
    ],
  },
  {
    categoria: "Tiendas",
    logos: [
      { src: "/logos/logo-bambino.png", alt: "Bambino Juegos y Juguetes" },
      { src: "/logos/logo-argentino3d.png", alt: "Argentino 3D" },
      { src: "/logos/logo-michigames.jpg", alt: "Michi Games" },
      { src: "/logos/logo-dobleg.png", alt: "DobleG" },
      { src: "/logos/logo-invictvs.png", alt: "Invictvs" },
    ],
  },
  {
    categoria: "Organizaciones",
    logos: [
      { src: "/logos/logo-shopping.jpg", alt: "Posadas Plaza Shopping" },
      { src: "/logos/logo-evomanija.png", alt: "Evolución Manija" },
      { src: "/logos/logo-laplata.jpg", alt: "La Plata Lúdica" },
      { src: "/logos/logo-octaedro.jpg", alt: "Octaedro" },
      { src: "/logos/logo-ajedrez.jpg", alt: "Club del Ajedrez" },
    ],
  },
];

export default function Colaboraciones() {
  return (
    <section id="colaboraciones" className="py-20 sm:py-28" style={{ backgroundColor: '#F6F3ED' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            Colaboraciones
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#343434' }}>
            Editoriales y tiendas que confían en Polifónica
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
            Trabajamos con editoriales y tiendas de juegos de mesa ofreciendo unboxings, tutoriales
            y reseñas en redes a cambio de juegos que fortalecen nuestra ludoteca y enriquecen cada
            encuentro. Si querés que tu producto llegue a una comunidad que realmente juega, hablemos.
          </p>
        </div>

        {/* Grupos de logos */}
        <div className="space-y-12 mb-14">
          {grupos.map((grupo) => (
            <div key={grupo.categoria}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5 text-center" style={{ color: '#B5477A' }}>
                {grupo.categoria}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {grupo.logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="bg-white rounded-xl border transition-transform hover:scale-105 flex items-center justify-center"
                    style={{ borderColor: '#D2D5F4', width: '120px', height: '80px', padding: '10px' }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ maxHeight: '60px', maxWidth: '100px', objectFit: 'contain', display: 'block' }}
                    />
                  </div>
                ))}
              </div>
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
            Quiero colaborar
          </a>
        </div>
      </div>
    </section>
  );
}
