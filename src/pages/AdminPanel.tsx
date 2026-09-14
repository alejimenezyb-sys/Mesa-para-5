
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [juegoEditando, setJuegoEditando] = useState<number | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [formulario, setFormulario] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    imagen: "",
    descripcion: "",
    stock: "",
  });

  const [juegos, setJuegos] = useState<(typeof formulario)[]>(() => {
    const juegosGuardados = localStorage.getItem("juegos");

    if (juegosGuardados) {
      return JSON.parse(juegosGuardados);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const juegosFiltrados = juegos.filter((juego) => {
    const coincideNombre = juego.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaFiltro === "" || juego.categoria === categoriaFiltro;

    return coincideNombre && coincideCategoria;
  });

  const agregarJuego = () => {
    if (
      !formulario.nombre ||
      !formulario.precio ||
      !formulario.categoria ||
      !formulario.imagen ||
      !formulario.descripcion ||
      !formulario.stock
    ) {
      alert("Completá todos los campos");
      return;
    }

    if (Number(formulario.precio) < 0 || Number(formulario.stock) < 0) {
      alert("El precio y el stock no pueden ser negativos");
      return;
    }

    if (juegoEditando !== null) {
      const juegosActualizados = [...juegos];

      juegosActualizados[juegoEditando] = formulario;

      setJuegos(juegosActualizados);
      setJuegoEditando(null);
    } else {
      setJuegos([...juegos, formulario]);
    }

    setFormulario({
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
      descripcion: "",
      stock: "",
    });

    setMostrarModal(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Administración de juegos de mesa
            </h1>

            <p className="mt-1 text-gray-600">
              Gestioná el catálogo de juegos de mesa
            </p>
          </div>

          <button
            onClick={() => {
              setFormulario({
                nombre: "",
                precio: "",
                categoria: "",
                imagen: "",
                descripcion: "",
                stock: "",
              });

              setJuegoEditando(null);
              setMostrarModal(true);
            }}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 md:w-auto"
          >
            + Agregar juego de mesa
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Buscar juego de mesa..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
          />

          <select
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500 md:w-64"
          >
            <option value="">Todas las categorías</option>
            <option value="estrategia">Estrategia</option>
            <option value="familiar">Familiar</option>
            <option value="cartas">Cartas</option>
          </select>
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Imagen
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Nombre
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Categoría
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Precio
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Stock
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              {juegosFiltrados.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-10 text-center text-gray-500"
                  >
                    {busqueda || categoriaFiltro
                      ? "No se encontraron juegos con esos filtros"
                      : "Todavía no hay juegos de mesa cargados"}
                  </td>
                </tr>
              ) : (
                juegosFiltrados.map((juego) => {
                  const index = juegos.findIndex((j) => j === juego);

                  return (
                    <tr
                      key={index}
                      className="border-t border-gray-200 transition hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">
                        <img
                          src={juego.imagen}
                          alt={juego.nombre}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                      </td>

                      <td className="px-4 py-3 font-medium text-gray-900">
                        {juego.nombre}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600">
                        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                          {juego.categoria}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-sm font-medium text-gray-800">
                        ${juego.precio}
                      </td>

                      <td className="px-4 py-3 text-sm font-medium text-gray-700">
                        {juego.stock === "0" ? (
                          <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                            Sin stock
                          </span>
                        ) : (
                          `${juego.stock} ${juego.stock === "1" ? "unidad" : "unidades"}`
                        )}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => {
                              setJuegoEditando(index);
                              setFormulario(juego);
                              setMostrarModal(true);
                            }}
                            className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100 hover:shadow-sm"
                          >
                            Editar
                          </button>

                          <button
                            onClick={() => {
                              const confirmar = window.confirm(
                                "¿Estás seguro de que querés eliminar este juego?",
                              );

                              if (confirmar) {
                                setJuegos(juegos.filter((_, i) => i !== index));
                              }
                            }}
                            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100 hover:shadow-sm"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center overflow-y-auto bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900">
              {juegoEditando !== null
                ? "Editar juego de mesa"
                : "Agregar juego de mesa"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {juegoEditando !== null
                ? "Modificá los datos del juego seleccionado."
                : "Completá los datos para agregar un nuevo juego."}
            </p>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nombre
              </label>

              <input
                type="text"
                placeholder="Nombre del juego de mesa"
                value={formulario.nombre}
                onChange={(e) =>
                  setFormulario({
                    ...formulario,
                    nombre: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Precio
              </label>

              <input
                type="number"
                placeholder="Precio del juego de mesa"
                value={formulario.precio}
                onChange={(e) =>
                  setFormulario({
                    ...formulario,
                    precio: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Categoría
              </label>

              <select
                value={formulario.categoria}
                onChange={(e) =>
                  setFormulario({
                    ...formulario,
                    categoria: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Seleccionar categoría</option>
                <option value="estrategia">Estrategia</option>
                <option value="familiar">Familiar</option>
                <option value="cartas">Cartas</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Imagen
              </label>

              <input
                type="text"
                placeholder="URL de la imagen"
                value={formulario.imagen}
                onChange={(e) =>
                  setFormulario({
                    ...formulario,
                    imagen: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Descripción
              </label>

              <textarea
                placeholder="Descripción del juego de mesa"
                value={formulario.descripcion}
                onChange={(e) =>
                  setFormulario({
                    ...formulario,
                    descripcion: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Stock
              </label>

              <input
                type="number"
                placeholder="Cantidad disponible"
                value={formulario.stock}
                onChange={(e) =>
                  setFormulario({
                    ...formulario,
                    stock: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              onClick={agregarJuego}
              className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 hover:shadow-sm"
            >
              {juegoEditando !== null
                ? "Guardar cambios"
                : "Guardar juego de mesa"}
            </button>

            <button
              onClick={() => setMostrarModal(false)}
              className="mt-6 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:shadow-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminPanel;
