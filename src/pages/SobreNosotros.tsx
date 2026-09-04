import monzonbrandon from "../assets/integrantes/monzonbrandon.jpeg"
import alejimenez from "../assets/integrantes/alejimenez.jpeg"
import lautaropazzelli from "../assets/integrantes/lautaropazzelli.jpeg"
import maximoisaias from "../assets/integrantes/maximoisaias.jpeg"
import guillejimenez from "../assets/integrantes/guillejimenez.jpeg"

const SobreNosotros = () => {

  const integrantes = [
  {
    nombre: "Monzon Brandon",
    imagen: monzonbrandon,
    posicion: "object-right-top"
  },
  {
    nombre: "Ale Jimenez",
    imagen: alejimenez
  },
  {
    nombre: "Guille Jimenez",
    imagen: guillejimenez 
  },
  {
    nombre: "Lautaro Pazzelli",
    imagen: lautaropazzelli ,
    posicion: "object-bottom"
  },
  {
    nombre: "Maximo Isaias",
    imagen: maximoisaias ,
    posicion: "object-[50%_40%]"
  }
];

  return (
    <main>
      <h1>Acerca de Nosotros</h1>

      <p>
        Somos un equipo de estudiantes apasionados por la tecnología y el
        desarrollo web. En este proyecto unimos nuestras ideas y habilidades
        para crear una tienda online de juegos de mesa.
      </p>

      <p>“Después lo hacemos”</p>

      <h2>Nuestro equipo</h2>

      <div className="flex gap-5 flex-wrap justify-center">
        {integrantes.map((integrante) => (
        <article className="bg-[#62B6CB] gap-5 rounded-xl p-4 flex items-center flex-col w-52" key={integrante.imagen}>
        <img className={`w-40 h-40 rounded-full object-cover ${integrante.posicion}`} src={integrante.imagen} />
       <h3 className="mt-4 text-center font-seminold">{integrante.nombre}</h3>
  </article>
        ))}
      </div>
    </main>
  )
}

export default SobreNosotros