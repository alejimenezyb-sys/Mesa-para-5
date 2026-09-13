import { Link } from "react-router";

const BotonDetalle = () => {
  return (
    <Link
      to="/detalle"
      className="block w-full rounded-lg bg-[#1B4965] px-4 py-3 text-center font-semibold text-white shadow-md transition duration-200 hover:bg-[#163D54] hover:shadow-lg"
    >
      Ver Detalle / Comprar
    </Link>
  );
};

export default BotonDetalle;