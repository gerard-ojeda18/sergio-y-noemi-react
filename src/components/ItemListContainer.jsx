import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    nombre: "Almendras naturales",
    precio: 4500,
    categoria: "Frutos secos",
    stock: 20,
    descripcion: "Almendras crudas, sin sal ni conservantes."
  },
  {
    id: 2,
    nombre: "Nueces peladas",
    precio: 5200,
    categoria: "Frutos secos",
    stock: 15,
    descripcion: "Nueces seleccionadas, ricas en omega 3."
  },
  {
    id: 3,
    nombre: "Avellanas",
    precio: 6100,
    categoria: "Frutos secos",
    stock: 10,
    descripcion: "Avellanas naturales de alta calidad."
  },
  {
    id: 4,
    nombre: "Castañas de cajú",
    precio: 5800,
    categoria: "Frutos secos",
    stock: 18,
    descripcion: "Castañas de cajú sin sal, ideales para snacks."
  },
  {
    id: 5,
    nombre: "Maní tostado",
    precio: 3200,
    categoria: "Frutos secos",
    stock: 30,
    descripcion: "Maní tostado naturalmente, sin aditivos."
  }
];


function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  
  const getProducts = () => new Promise((res, rej) => {
  res(products)
  rej({ error: "No se encontraron los productos"})
  })

  useEffect(() => {
   getProducts()
     .then(res => setItems(res))
  }, [])


  return (
    <div className="p-10">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        {greeting}
      </h3>

      <div className="grid gap-4 max-w-xl mx-auto">
        {items.map((producto) => (
          <div
            key={producto.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h4 className="text-lg font-bold">{producto.nombre}</h4>
            <p className="text-gray-600">{producto.descripcion}</p>
            <p className="mt-2 font-semibold">
              Precio: ${producto.precio}
            </p>
            <p className="text-sm text-gray-500">
              Stock: {producto.stock}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
