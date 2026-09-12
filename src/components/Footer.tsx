const Footer = () => {
  return (
    <footer className="bg-[#364553] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* BLOQUE MESA PARA 5 */}
          <div>
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
          <div>
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
          <div>
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
                  d="M12 3l7 4v10l-7 4-7-4V7l7-4zM5 7l7 4 7-4M12 11v10"
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
          <div>
            {/* BLOQUE DE CONTACTO */}
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#f5c979]">
              Contacto
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:hola@mesapara5.com"
                  className="transition hover:text-white"
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
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
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

              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-[#f5c979] px-4 py-3 text-sm font-semibold text-[#364553] transition hover:brightness-105"
              >
                Suscribirme
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              No te enviamos spam. Solo cosas que valen la pena.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              © 2026 Mesa para 5. Todos los derechos reservados.
            </p>

            <p className="text-sm font-medium text-gray-300">
              Jugá. Compartí. Repetí.
            </p>

            <div className="flex items-center gap-3 text-xs font-semibold text-gray-300">
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
