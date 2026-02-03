function ItemDetail({ item }) {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <img src={item.imagen} className="rounded mb-4" />
      <h2 className="text-2xl font-bold">{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <p className="mt-2 font-semibold">${item.precio}</p>
      <p>Stock: {item.stock}</p>
    </div>
  );
}

export default ItemDetail;
