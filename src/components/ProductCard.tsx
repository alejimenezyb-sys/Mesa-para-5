type ProductCardProps = {
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
};

const ProductCard = ({
  nombre,
  categoria,
  precio,
  imagen,
}: ProductCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md">
      <img
        src={imagen}
        alt={nombre}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-[#1B4965]">
          {nombre}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {categoria}
        </p>

        <p className="mt-3 text-lg font-bold text-[#1565C0]">
          ${precio}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;