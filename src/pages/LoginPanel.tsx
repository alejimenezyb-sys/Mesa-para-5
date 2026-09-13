import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";



const USERS = [
  { email : "admin@gmail.com" ,
    contraseña: "admin4444",
    rol : "admin"

  },
  { email: "usuario123@gmail.com",
    contraseña : "megustalapizza",
    rol : "user"
  }
]


type DatosLogin = {
  correo: string 
  contraseña: string
} 
const Login = () => {

  const { register,
   handleSubmit,
    formState: { errors } 
  } = useForm<DatosLogin>();
  const navigate = useNavigate() 

    const iniciarSesion = (data: DatosLogin) => {
      console.log(data.correo)
      console.log(data.contraseña)

      navigate("/adminpanel")
     }

     

  return (
    <div className="min-h-screen bg-[#CAE9FF] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1B4965] rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-block p-3 bg-[#BEE9E8] rounded-full text-[#1B4965] text-2xl shadow-sm mb-2">
            🎲
          </div>
          <h2 className="text-3xl font-extrabold text-[#CAE9FF] tracking-wide">
            Mesa para 5
          </h2>
        </div>

        <form
        noValidate
        onSubmit={handleSubmit(iniciarSesion)} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-[#CAE9FF]">
              Correo
            </label>
            <input
              type="email"
              { ...register("correo", { 
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El correo no es valido"
                 } 
                } ) }
              
              placeholder="example@gmail.com"
              className={`w-full px-4 py-2.5 bg-white/90 border border-[#62B6CB] rounded-lg text-[#1B4965] placeholder-[#5FA8D3] focus:outline-none focus:ring-2 focus:ring-[#1B4965] focus:bg-white transition ${errors.contraseña ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.correo && (
          <p className="text-red-500">
            {errors.correo.message}
          </p>
        )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-[#CAE9FF]">
              Contraseña
            </label>
            <input
              type="password"
               { ...register("contraseña", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres"
                }
               })}
              placeholder="********"
              className={`w-full px-4 py-2.5 bg-white/90 border border-[#62B6CB] rounded-lg text-[#1B4965] placeholder-[#5FA8D3] focus:outline-none focus:ring-2 focus:ring-[#1B4965] focus:bg-white transition
                 ${errors.contraseña ? "border-red-500" : "border-gray-300"}`}
            />

               {errors.contraseña && (
          <p className="text-red-500">
            {errors.contraseña.message}
          </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#62B6CB] hover:bg-[#5FA8D3] text-[#1B4965] font-bold rounded-lg shadow-md transition duration-200"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;