const Footer = () => {
  return (
    <footer className="bg-[#364553] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid w-full min-w-0 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* BLOQUE MESA PARA 5 */}
          <div className="min-w-0">
            <h2 className="text-3xl font-bold tracking-wide">MESA PARA 5</h2>

            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#f5c979]">
              Juegos de mesa
            </p>

            <div className="mt-4 h-1 w-10 bg-[#f5c979]" />

            <p className="mt-4 text-lg font-medium">
              Tu próxima partida empieza acá.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-300">
              Una tienda para quienes creen que las mejores historias también se
              juegan en la mesa.
            </p>
          </div>

          {/* BLOQUE NAVEGACIÓN */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-[#f5c979]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 11.5L12 4l9 7.5M5.5 10v9h13v-9M9.5 19v-5h5v5"
                />
              </svg>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#f5c979]">
                Navegación
              </h3>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="transition hover:text-white">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Juegos
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Sobre nosotros
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* BLOQUE CATEGORÍAS */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-[#f5c979]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v10l-7 4V7l7-4zM5 7l7 4 7-4M12 11v10"
                />
              </svg>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#f5c979]">
                Categorías
              </h3>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="transition hover:text-white">
                  Estrategia
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Familiar
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Cartas
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Cooperativos
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Fiesta
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Todos los juegos
                </a>
              </li>
            </ul>
          </div>

          {/* BLOQUE DE CONTACTO */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-[#f5c979]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10c0 7-9 11-9 11S3 17 3 10a9 9 0 1 1 18 0z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#f5c979]">
                Contacto
              </h3>
            </div>

            <ul className="mt-5 space-y-4 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:hola@mesapara5.com"
                  className="break-words transition hover:text-white"
                >
                  hola@mesapara5.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+5493811234567"
                  className="transition hover:text-white"
                >
                  +54 9 381 123-4567
                </a>
              </li>

              <li>Tucumán, Argentina</li>

              <li className="border-t border-gray-500/50 pt-4">
                Lunes a Sábados
                <br />
                9:00 a 20:00 hs
              </li>
            </ul>

            {/* REDES SOCIALES */}
            <div className="mt-6">
              <p className="mb-3 text-sm text-gray-300">
                Seguinos en nuestras redes
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 transition hover:text-[#f5c979]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 transition hover:text-[#f5c979]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.63-.14-2.6 0-4.37 1.59-4.37 4.51V10H7v3h2.8v8h3.7z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-gray-400 transition hover:text-[#f5c979]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 4c.5 2.5 2 4 4.5 4v3c-1.7 0-3.2-.5-4.5-1.4V15a5 5 0 1 1-3-4.58"
                    />
                    <circle cx="10" cy="16" r="3" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-gray-400 transition hover:text-[#f5c979]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23 12s0-4.5-.6-6.5c-.3-1.1-1.2-2-2.3-2.3C18.1 2.5 12 2.5 12 2.5s-6.1 0-8.1.7c-1.1.3-2 1.2-2.3 2.3C1 7.5 1 12 1 12s0 4.5.6 6.5c.3 1.1 1.2 2 2.3 2.3 2 .7 8.1.7 8.1.7s6.1 0 8.1-.7c1.1-.3 2-1.2 2.3-2.3C23 16.5 23 12 23 12zM9.5 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-gray-400 transition hover:text-[#f5c979]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.2 2H21l-6.1 7 7.2 13h-5.6l-4.4-7.9L5.2 22H2.4l6.5-7.4L2 2h5.7l4 7.2L18.2 2zm-1 17.7h1.5L6.1 4.2H4.5l12.7 15.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-10 min-w-0 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-[#f5c979]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 11l18-8-8 18-2.5-7.5L3 11zM10.5 13.5L21 3"
                />
              </svg>

              <h3 className="text-lg font-semibold">Recibí novedades</h3>
            </div>

            <p className="mt-2 text-sm leading-6 text-gray-300">
              Promociones, lanzamientos y mucho más.
            </p>

            <div className="mt-5">
              <input
                type="email"
                placeholder="Tu email..."
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#f5c979]"
              />

              <a
                href="#"
                className="mt-3 block w-full rounded-lg bg-[#f5c979] px-4 py-3 text-center text-sm font-semibold text-[#364553] transition hover:brightness-105"
              >
                Suscribirme
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              No te enviamos spam. Solo cosas que valen la pena.
            </p>
          </div>
        </div>

        {/* PARTE INFERIOR */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              © 2026 Mesa para 5. Todos los derechos reservados.
            </p>

            <p className="text-sm font-medium text-gray-300">
              Jugá. Compartí. Repetí.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-300">
              <span className="rounded border border-white/10 px-3 py-2">
                VISA
              </span>

              <span className="rounded border border-white/10 px-3 py-2">
                Mastercard
              </span>

              <span className="rounded border border-white/10 px-3 py-2">
                AMEX
              </span>

              <span className="rounded border border-white/10 px-3 py-2">
                Mercado Pago
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
