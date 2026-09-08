import { NavLink } from "react-router"

const NavBarApp = () => {
  return (
    <nav className="bg-[#CAE9FF] flex justify-around items-center">
        <div className="text-[#1B4965] font-semibold">
            <ul className="flex gap-4">
                <li><NavLink>Inicio</NavLink></li>
                <li>Sobre Nosotros</li>
            </ul>
        </div>


    </nav>
  )
}

export default NavBarApp