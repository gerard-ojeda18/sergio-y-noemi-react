import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then(res => res.json())
      .then(data => {
        setItem({
          id: data.id,
          nombre: data.title,
          descripcion: data.description,
          precio: data.price * 100,
          stock: data.stock,
          imagen: data.thumbnail
        });
      });
  }, [itemId]);

  return item && <ItemDetail item={item} />;
}

export default ItemDetailContainer;
