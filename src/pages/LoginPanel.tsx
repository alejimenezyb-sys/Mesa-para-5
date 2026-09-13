import React, { useState } from 'react';

const emailRegexp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const Login = () => {
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

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-[#CAE9FF]">
              Correo
            </label>
            <input
              type="email"
              name="correo"
              placeholder="ejemplo@gmail.com"
              className="w-full px-4 py-2.5 bg-white/90 border border-[#62B6CB] rounded-lg text-[#1B4965] placeholder-[#5FA8D3] focus:outline-none focus:ring-2 focus:ring-[#1B4965] focus:bg-white transition"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-[#CAE9FF]">
              Contraseña
            </label>
            <input
              type="password"
              name="contraseña"
              maxLength={8}
              placeholder="********"
              className="w-full px-4 py-2.5 bg-white/90 border border-[#62B6CB] rounded-lg text-[#1B4965] placeholder-[#5FA8D3] focus:outline-none focus:ring-2 focus:ring-[#1B4965] focus:bg-white transition"
            />
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