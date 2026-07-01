export default function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: '#343434' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-polifonicafooter.png" alt="Polifónica" width={48} height={48} style={{ objectFit: 'contain' }} />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold" style={{ color: '#D2D5F4' }}>
              Polifónica
            </span>
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
              href="https://wa.me/543764367898"
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
          © {new Date().getFullYear()} Polifónica — Luciana Minadeo
        </div>
      </div>
    </footer>
  );
}
