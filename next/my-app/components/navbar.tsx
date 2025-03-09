import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around list-none m-0 p-0">
        <li>
          <Link href="/" className="text-white text-lg hover:underline">
           Inicio
          </Link>
        </li>
        <li>
          <Link href="/categorias" className="text-white text-lg hover:underline">
            categorias
          </Link>
        </li>
        <li>
          <Link href="/perfil" className="text-white text-lg hover:underline">
            perfil
          </Link>
        </li>
        <li>
          <Link href="/productos" className="text-white text-lg hover:underline">
            productos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;