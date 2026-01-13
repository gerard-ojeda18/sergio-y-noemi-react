import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      <h2 className="text-xl font-bold">Mi Tienda</h2>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-300">Categoria 1</li>
        <li className="cursor-pointer hover:text-gray-300">Categoria 2</li>
        <li className="cursor-pointer hover:text-gray-300">Categoria 3</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default Navbar;
