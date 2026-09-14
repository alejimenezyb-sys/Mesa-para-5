import { Routes , Route } from 'react-router'
import Home from '../pages/Home'
import DetalleProducto from '../pages/DetalleProducto'
import SobreNosotros from '../pages/SobreNosotros'
import Login from '../pages/LoginPanel'
import Error404 from '../pages/Error404'
import LayoutApp from '../layout/Layout'
import AdminPanel from '../pages/AdminPanel'
import AdminRoute from '../components/AdminRoute'



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element = {<LayoutApp />}>
        


        <Route index element = {<Home />}/>
        <Route path= "detalle" element = {<DetalleProducto />}/>
        <Route path= "sobre" element = {<SobreNosotros />}/>  

        <Route element={<AdminRoute/>}>
        <Route path="login" element={<Login />} />
        <Route path="adminpanel" element={<AdminPanel />} />

        </Route>


        <Route path= "*" element = {<Error404 />}/>

        </Route>
      
      

    </Routes>
  );
};

export default AppRouter;