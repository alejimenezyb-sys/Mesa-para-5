import fondoError from '../assets/fondoError.jfif'

const Error404 = () => {
  return (
    <div className='min-h-screen w-full bg-[#1B4965] flex flex-col items-center justify-center p-4'>
      <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col items-center text-center p-6 space-y-6">
      <div className="imagen w-full overflow-hidden rounded-xl bg-slate-950">
        <img src={fondoError} alt="" className='w-full h-auto max-h-[45vh] object-cover mx-auto'/>
      
       <div id="divTexto" className='space-y-2'>
        <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold text-[#62B6CB]">Error 404: ¡Página No Encontrada! </h1>
        <p className='text-slate-300 text-sm sm:text-2xl md:text-3xl'>Parece que esta ficha se ha salido del tablero</p>
       </div>
       <div className="divBotones w-full sm:w-auto">
         <a className='inline-block w-full sm:w-auto bg-[#1B4965] hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl transition-all shadow-md active:scale-95 text-center mt-2 mb-2'>Volver al Inicio</a>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Error404