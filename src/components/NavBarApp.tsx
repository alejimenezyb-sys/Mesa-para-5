import { NavLink } from "react-router"
import { IoMdPerson } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";

const NavBarApp = () => {
    const isAdmin = localStorage.getItem("rol") === "admin"
    const ListMenu= [
        {
            text: "Inicio",
            path: "/"
        },
        {
            text: "Sobre Nosotros",
            path: "sobre"
        },
        {
            text : <IoMdPerson />,
            path: "login"
        },
        ... (isAdmin ? [
            {
                text : <RiAdminFill />,
                path: "adminpanel"
            }]  : []   ) 
        
    ]

    
  return (
    <nav className="bg-[#CAE9FF] flex justify-around items-center py-4">
        <div className="text-[#1B4965] font-semibold">
            <ul className="flex gap-4 items-center">
                {
                    ListMenu.map((item , index)=>
                    
                        <li key={index}>
                            <NavLink 
                                  
                                 to={item.path} 
                                 className={({isActive})=>`inline-block transition-transform duration-200 ${isActive ? " scale-110 text-[#003459] font-bold" : "text-[#1B4965]"}`  }>{item.text}</NavLink></li>

                                 
                    )
                }
            </ul>
        </div>


    </nav>
  )
}

export default NavBarApp