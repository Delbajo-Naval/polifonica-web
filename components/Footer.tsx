export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#A8A29E] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/meeple.png" alt="Polifónica" width={28} height={28} />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
              Polifónica
            </span>
            <span className="text-[#57534E] ml-1">— Club de Juegos de Mesa</span>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="https://instagram.com/polifonica_ok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4B5FD] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5493764000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4B5FD] transition-colors"
            >
              WhatsApp
            </a>
            <a href="#contacto" className="hover:text-[#C4B5FD] transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="border-t border-[#292524] mt-6 pt-6 text-xs text-center sm:text-left text-[#57534E]">
          © {new Date().getFullYear()} Polifónica — Luciana Minadeo · Posadas, Misiones
        </div>
      </div>
    </footer>
  );
}
