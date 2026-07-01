"use client";

import { useState } from "react";
import { PartyPopper } from "lucide-react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28" style={{ background: 'linear-gradient(135deg, #D2D5F4 0%, #F6F3ED 55%, #F0E6D3 100%)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B5477A' }}>
            Contacto
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#343434' }}>
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-lg" style={{ color: '#343434', opacity: 0.7 }}>
            Contanos sobre tu consulta y te respondemos a la brevedad.
          </p>
        </div>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border space-y-6" style={{ borderColor: '#D2D5F4' }}>
            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="nombre" style={{ color: '#343434' }}>
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                required
                placeholder="Tu nombre"
                className="w-full border rounded-xl px-4 py-3 placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 transition"
                style={{ borderColor: '#D2D5F4', color: '#343434' }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email" style={{ color: '#343434' }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="w-full border rounded-xl px-4 py-3 placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 transition"
                style={{ borderColor: '#D2D5F4', color: '#343434' }}
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="mensaje" style={{ color: '#343434' }}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                placeholder="Contanos tu consulta..."
                className="w-full border rounded-xl px-4 py-3 placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 transition resize-none"
                style={{ borderColor: '#D2D5F4', color: '#343434' }}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity text-base"
              style={{ backgroundColor: '#B5477A' }}
            >
              Enviar consulta
            </button>
          </form>
        ) : (
          <div className="bg-white rounded-2xl p-12 shadow-sm border text-center" style={{ borderColor: '#D2D5F4' }}>
            <PartyPopper size={48} className="mx-auto mb-4" style={{ color: '#B5477A' }} />
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2" style={{ color: '#343434' }}>
              ¡Gracias por escribirnos!
            </h3>
            <p style={{ color: '#343434', opacity: 0.7 }}>Te respondemos a la brevedad.</p>
          </div>
        )}

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href="https://instagram.com/polifonica_ok"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium hover:underline"
            style={{ color: '#B5477A' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @polifonica_ok
          </a>
          <a
            href="https://wa.me/5493764000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium hover:underline"
            style={{ color: '#B5477A' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
