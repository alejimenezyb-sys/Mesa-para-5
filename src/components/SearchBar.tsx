type SearchBarProps = {
  texto: string;
  setTexto: (texto: string) => void;
  categoria: string;
  setCategoria: (categoria: string) => void;
};

const SearchBar = ({
  texto,
  setTexto,
  categoria,
  setCategoria,
}: SearchBarProps) => {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="Buscar juegos por nombre..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="w-full rounded-lg border border-[#90CAF9] px-4 py-3 outline-none focus:border-[#1976D2]"
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="rounded-lg border border-[#90CAF9] px-4 py-3 outline-none focus:border-[#1976D2]"
      >
        <option value="">Todas las categorías</option>
        <option value="Estrategia">Estrategia</option>
        <option value="Familiar">Familiar</option>
        <option value="Cartas">Cartas</option>
        <option value="Party">Party</option>
      </select>
    </div>
  );
};

export default SearchBar;