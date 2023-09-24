import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 static justify-center p-10 bg-zinc-950 text-zinc-500">
      <div className="flex justify-center items-center gap-3 font-bold uppercase">
        <Link to={"/peliculas"}>Películas</Link>
        <Link to={"/series"}>Series</Link>
        <Link to={"/buscarpelicula"}>Buscar Peliculas</Link>
      </div>
      <div className="grid justify-center items-center">
        <p>Todos los derechos reservados.</p>
        <p className="flex justify-center">Sebastian Guerrero A.</p>
      </div>
    </footer>
  );
};

export default Footer;
