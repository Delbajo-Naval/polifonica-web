export default function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: '#343434' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-poli.png" alt="Polifónica" width={36} height={36} />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold" style={{ color: '#D2D5F4' }}>
              Polifónica
            </span>
            <span className="ml-1 text-sm" style={{ color: '#D2D5F4', opacity: 0.5 }}>— Club de Juegos de Mesa</span>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="https://instagram.com/polifonica_ok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-opacity"
              style={{ color: '#D2D5F4' }}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5493764000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-opacity"
              style={{ color: '#D2D5F4' }}
            >
              WhatsApp
            </a>
            <a href="#contacto" className="hover:underline transition-opacity" style={{ color: '#D2D5F4' }}>
              Contacto
            </a>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-xs text-center sm:text-left" style={{ borderColor: 'rgba(210,213,244,0.2)', color: '#D2D5F4', opacity: 0.4 }}>
          © {new Date().getFullYear()} Polifónica — Luciana Minadeo · Posadas, Misiones
        </div>
      </div>
    </footer>
  );
}
