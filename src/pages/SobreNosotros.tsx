import monzonbrandon from "../assets/integrantes/monzonbrandon.jpeg";
import alejimenez from "../assets/integrantes/alejimenez.jpeg";
import lautaropazzelli from "../assets/integrantes/lautaropazzelli.jpeg";
import maximoisaias from "../assets/integrantes/maximoisaias.jpeg";
import guillejimenez from "../assets/integrantes/guillejimenez.jpeg";

const SobreNosotros = () => {
  const integrantes = [
    {
      nombre: "Monzon Brandon", 
      imagen: monzonbrandon,
      posicion: "object-right-top",
    },
    {
      nombre: "Ale Jimenez",
      imagen: alejimenez,
    },
    {
      nombre: "Guille Jimenez",
      imagen: guillejimenez,
    },
    {
      nombre: "Lautaro Pazzelli",
      imagen: lautaropazzelli,
      posicion: "object-bottom",
    },
    {
      nombre: "Maximo Isaias",
      imagen: maximoisaias,
      posicion: "object-[50%_40%]",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <section className="mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1B4965] mb-10">
            Sobre el proyecto
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4965] mb-4">
            ¿Qué hicimos?
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            Desarrollamos una tienda online de juegos de mesa que permite
            explorar y conocer diferentes juegos, consultar sus características
            y descubrir nuevas opciones para jugar.
          </p>
        </section>

        {/* Quiénes somos */}

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4965] mb-4">
            ¿Quiénes somos?
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            Somos un equipo de cinco estudiantes que trabajamos en conjunto para
            llevar adelante este proyecto, combinando nuestras ideas y
            conocimientos de desarrollo web.
          </p>
        </section>

        <section className="mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-[#1B4965] mb-4">
    ¿Qué tecnologías usamos?
  </h2>

  <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-6">
    Para desarrollar este proyecto utilizamos diferentes tecnologías y
    herramientas que nos permitieron construir la tienda online y trabajar
    de manera colaborativa.
  </p>

  <div className="flex flex-wrap gap-3">
    <span className="bg-[#CAE9FF] text-[#1B4965] font-semibold px-4 py-2 rounded-full">
      React
    </span>

    <span className="bg-[#CAE9FF] text-[#1B4965] font-semibold px-4 py-2 rounded-full">
      TypeScript
    </span>

    <span className="bg-[#CAE9FF] text-[#1B4965] font-semibold px-4 py-2 rounded-full">
      Vite
    </span>

    <span className="bg-[#CAE9FF] text-[#1B4965] font-semibold px-4 py-2 rounded-full">
      Tailwind CSS
    </span>

    <span className="bg-[#CAE9FF] text-[#1B4965] font-semibold px-4 py-2 rounded-full">
      React Router
    </span>

    <span className="bg-[#CAE9FF] text-[#1B4965] font-semibold px-4 py-2 rounded-full">
      Git
    </span>

    <span className="bg-[#CAE9FF] text-[#1B4965] font-semibold px-4 py-2 rounded-full">
      GitHub
    </span>
  </div>
</section>

        {/* Frase */}
        <section className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4965] mb-5">
            Frase del equipo
          </h2>

          <p className="text-2xl md:text-3xl font-bold italic text-blue-900">
            “Después lo hacemos”
          </p>
        </section>

        {/* Equipo */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4965] mb-8">
            Nuestro equipo
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {integrantes.map((integrante) => (
              <article
                key={integrante.imagen}
                className="w-44 bg-[#CAE9FF] rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition"
              >
                <img
                  src={integrante.imagen}
                  alt={integrante.nombre}
                  className={`w-32 h-32 mx-auto rounded-full object-cover ${integrante.posicion}`}
                />
                <h3 className="font-bold text-lg text-[#1B4965]">
                  {integrante.nombre}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
export default SobreNosotros;
