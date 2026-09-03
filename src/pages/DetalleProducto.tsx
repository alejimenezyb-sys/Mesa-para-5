import { useEffect, useState } from "react"
import { useParams , Link } from "react-router"
import type { Juego } from "../interfaces/Producto"


const DetalleProducto = () => {

  const { id } = useParams<{ id : string}>()
  const [juego , setJuego] = useState<Juego | null | undefined>(undefined)

  useEffect (()=> {
     const juegos: Juego[] = JSON.parse(localStorage.getItem("Juegos") || "[]")

     const encontrado = juegos.find((j)=> j.id === id
    )

    setJuego(encontrado ?? null)}, [id])

  

  if (juego === undefined){
    return (<p>
      Cargando juego de mesa...
    </p>)

  }
  if (juego === null){
    return (
      <div>
          Juego no encontrado
      </div>
    )

  }
  return (
    <div>
        <img src={juego.imagen} alt={juego.nombre} />
        <h1>{juego.nombre}</h1>
        <p>{juego.categoria}</p>
        <p>{juego.precio}</p>
        <p>{juego.descripcion}</p>
        <p>Stock disponible : {juego.stock}</p>



    </div>
  )
}

export default DetalleProducto



