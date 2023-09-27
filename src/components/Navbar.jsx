import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {


  return (
    <>
      <nav className="bg-[black] flex items-center justify-between p-3 text-white top-0">
        <div className="flex items-center gap-5 fontpelicula">
          <Link
            to={"/"}
            className="text-3xl text-[red]  font-bold uppercase fontpelicula"
          >
            Streaming Movies
          </Link>
          <div className="flex items-center ml-10 space-x-4">
            <Link to={"/peliculas"} className="text-xl hover:border-b hover:border-red-500">
              Top Películas
            </Link>
            <Link to={"/series"} className="text-xl hover:border-b hover:border-red-500">
              Top Series
            </Link>
            <Link to={"/buscarpelicula"} className="text-xl hover:border-b hover:border-red-500">
              Buscar Peliculas
            </Link>
            <Link to={"/favoritos"} className="flex items-center gap-1 text-xl hover:border-b hover:border-red-500">
              Favoritos <FaRegHeart />
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4 mx-5">
          
          {/* <button>Log in</button>
          <span className="text-2xl hover:cursor-pointer">
            <BiUserCircle />
          </span> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
