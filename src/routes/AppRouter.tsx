import { Routes , Route } from 'react-router'
import Home from '../pages/Home'
import DetalleProducto from '../pages/DetalleProducto'
import SobreNosotros from '../pages/SobreNosotros'
import Error404 from '../pages/Error404'



const AppRouter = () => {
  return (
    <Routes>
      <Route >
        <Route index element = {<Home />}/>
        <Route path= "detalle" element = {<DetalleProducto />}/>
        <Route path= "sobre" element = {<SobreNosotros />}/>  
        <Route path= "*" element = {<Error404 />}/>
      </Route>

    </Routes>
  )
}

export default AppRouter