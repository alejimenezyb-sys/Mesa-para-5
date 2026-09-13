import catanImg from "../assets/juegos/catan.jpg";
import dixitImg from "../assets/juegos/dixit.jpg";
import monopolyImg from "../assets/juegos/monopoly.jpg";
import unoImg from "../assets/juegos/uno.jpg";
import virusImg from "../assets/juegos/virus.jpg";
import explodingKittensImg from "../assets/juegos/exploding.jpg";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
};

const productosIniciales: Producto[] = [
  {
    id: 1,
    nombre: "Catan",
    categoria: "Estrategia",
    precio: 35000,
    imagen: catanImg,
  },
  {
    id: 2,
    nombre: "Dixit",
    categoria: "Familiar",
    precio: 30000,
    imagen: dixitImg,
  },
  {
    id: 3,
    nombre: "Uno",
    categoria: "Cartas",
    precio: 12000,
    imagen: unoImg,
  },
  {
    id: 4,
    nombre: "Monopoly",
    categoria: "Familiar",
    precio: 40000,
    imagen: monopolyImg,
  },
  {
    id: 5,
    nombre: "Virus!",
    categoria: "Cartas",
    precio: 15000,
    imagen: virusImg,
  },
  {
    id: 6,
    nombre: "Exploding Kittens",
    categoria: "Party",
    precio: 18000,
    imagen: explodingKittensImg,
  },
];

const Home = () => {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  const productosFiltrados = productosIniciales.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(texto.toLowerCase());

    const coincideCategoria =
      categoria === "" || producto.categoria === categoria;

    return coincideNombre && coincideCategoria;
  });

  return (
    <main className="min-h-screen bg-[#E3F2FD] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-4xl font-bold text-[#1B4965]">
          Juegos de mesa
        </h1>

        <p className="mb-8 text-[#1B4965]">
          Encontrá el juego perfecto para compartir.
        </p>

        <SearchBar
          texto={texto}
          setTexto={setTexto}
          categoria={categoria}
          setCategoria={setCategoria}
        />

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              categoria={producto.categoria}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </section>

        {productosFiltrados.length === 0 && (
          <p className="py-10 text-center text-lg text-[#1B4965]">
            No encontramos juegos con esos filtros.
          </p>
        )}
      </div>
    </main>
  );
};

export default Home;