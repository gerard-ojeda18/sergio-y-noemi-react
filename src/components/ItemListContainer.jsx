import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";


function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        let productos = data.products.map(p => ({
          id: p.id,
          nombre: p.title,
          descripcion: p.description,
          precio: p.price * 100,
          stock: p.stock,
          imagen: p.thumbnail,
          categoria: "frutos-secos"
        }));

        if (categoryId) {
          productos = productos.filter(
            prod => prod.categoria === categoryId
          );
        }

        setItems(productos);
      });
  }, [categoryId]);

  return (
  <div className="min-h-screen bg-amber-50">
    
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {items.map(prod => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>

  </div>
);

}

export default ItemListContainer;
