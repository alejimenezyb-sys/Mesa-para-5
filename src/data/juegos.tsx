import type { Juego} from "../interfaces/Producto";
import catan from "../assets/juegos/catan.webp";
import dixit from "../assets/juegos/dixit.png";
import carcassonne from "../assets/juegos/carcassonne.jpg";

export const juegos: Juego[] = [ 
    {
     id: "1",
     nombre: "Catan",
     precio: 45000,
     imagen: catan,
     categoria: "Estrategia",
     descripcion: "Juego de estrategia en el que los jugadores deben recolectar recursos, construir y comerciar para desarrollar su territorio.",
     stock: "15"
    },
    {
    id: "11",
    nombre: "Dixit",
    precio: 35000,
    imagen: dixit,
    categoria: "Creatividad",
    descripcion:
      "Juego de cartas creativo en el que los jugadores utilizan imágenes y pistas para descubrir diferentes interpretaciones.",
    stock: "12",
  },
  {
    id: "12",
    nombre: "Carcassonne",
    precio: 40000,
    imagen: carcassonne,
    categoria: "Estrategia",
    descripcion:
      "Juego de estrategia en el que los jugadores construyen un paisaje medieval colocando losetas y ocupando territorios.",
    stock: "10",

  },
]