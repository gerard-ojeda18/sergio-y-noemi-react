import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {producto.nombre}
        </h3>

        <p className="text-xl font-bold text-amber-700">
          ${producto.precio}
        </p>

        <Link
          to={`/item/${producto.id}`}
          className="mt-2 inline-block text-center bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
