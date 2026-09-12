<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetalleProducto from "../pages/DetalleProducto";
import SobreNosotros from "../pages/SobreNosotros";
import Error404 from "../pages/Error404";
=======
import { Routes , Route } from 'react-router'
import Home from '../pages/Home'
import DetalleProducto from '../pages/DetalleProducto'
import SobreNosotros from '../pages/SobreNosotros'
import Error404 from '../pages/Error404'
import LayoutApp from '../layout/Layout'
import AdminPanel from '../pages/AdminPanel'


>>>>>>> footer

const AppRouter = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route>
        <Route index element={<Home />} />
        <Route path="detalle" element={<DetalleProducto />} />
        <Route path="sobre" element={<SobreNosotros />} />
        <Route path="*" element={<Error404 />} />
      </Route>
=======
      <Route path="/" element = {<LayoutApp />}>
        


        <Route index element = {<Home />}/>
        <Route path= "detalle" element = {<DetalleProducto />}/>
        <Route path= "sobre" element = {<SobreNosotros />}/>  
        <Route path= "*" element = {<Error404 />}/>
        <Route path="adminpanel" element={<AdminPanel />} />

        </Route>
      
      

>>>>>>> footer
    </Routes>
  );
};

export default AppRouter;