import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavbarContainer() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 
bg-orange-600 text-white shadow-lg">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        NyS
      </Link>

      <ul className="flex gap-6">
        <li>
          <Link to="/category/frutos-secos" className="hover:text-amber-200 transition">Frutos Secos</Link>
        </li>
        <li>
          <Link to="/category/semillas" className="hover:text-amber-200 transition">Semillas</Link>
        </li>
        <li>
          <Link to="/category/snacks" className="hover:text-amber-200 transition">Snacks</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavbarContainer;

