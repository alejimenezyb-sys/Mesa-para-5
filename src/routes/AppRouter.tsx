import { Routes , Route } from 'react-router'
import Home from '../pages/Home'
import DetalleProducto from '../pages/DetalleProducto'
import SobreNosotros from '../pages/SobreNosotros'
import Error404 from '../pages/Error404'
import LayoutApp from '../layout/Layout'
import AdminPanel from '../pages/AdminPanel'



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element = {<LayoutApp />}>
        


        <Route index element = {<Home />}/>
        <Route path= "detalle" element = {<DetalleProducto />}/>
        <Route path= "sobre" element = {<SobreNosotros />}/>  
        <Route path= "*" element = {<Error404 />}/>
        <Route path="adminpanel" element={<AdminPanel />} />

        </Route>
      
      

    </Routes>
  );
};

export default AppRouter;