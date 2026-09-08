import { NavLink } from "react-router"

const NavBarApp = () => {

    const ListMenu= [
        {
            text: "Inicio",
            path: "/"
        },
        {
            text: "Sobre Nosotros",
            path: "sobre"
        }
    ]

    
  return (
    <nav className="bg-[#CAE9FF] flex justify-around items-center">
        <div className="text-[#1B4965] font-semibold">
            <ul className="flex gap-4">
                {
                    ListMenu.map((item , index)=>
                    
                        <li key={index}>
                            <NavLink 
                                  
                                 to={item.path} 
                                 className={({isActive})=> isActive ? " text-blue-900" : "text-[#1B4965]"}>{item.text}</NavLink></li>
                    )
                }
            </ul>
        </div>


    </nav>
  )
}

export default NavBarApp