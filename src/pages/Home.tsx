
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
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_YrSm9jVhiDQdPTfKPoSVhYdbxpcJ7Q7gGHuXhNB7Q&s=10",
  },
  {
    id: 2,
    nombre: "Dixit",
    categoria: "Familiar",
    precio: 30000,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/054/973/products/unnamed-b684c69b1f04468f4a17730944948266-1024-1024.webp",
  },
  {
    id: 3,
    nombre: "Uno",
    categoria: "Cartas",
    precio: 12000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDrQPjhGUmPlpPiSjoH2nafTneI6kqW-rWRlRFGwWDw&s=10",
  },
  {
    id: 4,
    nombre: "Monopoly",
    categoria: "Familiar",
    precio: 40000,
    imagen: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000069639/8248e2edec2e8c106a26cb174fd4ae108207cf21ffd6012704f60ef5540cb79c",
  },
  {
    id: 5,
    nombre: "Virus!",
    categoria: "Cartas",
    precio: 15000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVbOJYK_r0oBJyJIsuR64Z-LqbwCQbgK_JBZ_sjbF5tlSwF7U2KJ1iAM&s=10",
  },
  {
    id: 6,
    nombre: "Exploding Kittens",
    categoria: "Party",
    precio: 18000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko6m4B7xAKkNA8EYpera7vRLK4T3C6XiciFK9XAd3nLXwk6fYTX-lvDQ&s=10",
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