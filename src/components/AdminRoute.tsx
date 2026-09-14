import { Navigate, Outlet } from "react-router";



const AdminRoute = () => {

    const rol = localStorage.getItem("rol")

    if (rol!== "admin")
    {
        return (
          <Navigate to ="/login" replace/>
        )

    }
    return <Outlet />
}

export default AdminRoute