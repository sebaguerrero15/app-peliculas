import {useState, useEffect} from "react";
import ItemBuscarPelicula from "../components/ItemBuscarPelicula";

const BuscarPelicula = () => {
    const [buscarPelicula, setBuscarPelicula] = useState([])
    const [buscarNombre, setBuscarNombre] = useState("")
    const [nextPage, setNextPage] = useState(1);

    const urlBuscarPeliculas = `https://api.themoviedb.org/3/search/movie?query=${buscarNombre}&include_adult=false&language=es-MX&page=${nextPage}`

    

    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTMwYTUwYjc0YjM5NTRkYWZhZjA2MzUzZWIwZTgxZSIsInN1YiI6IjYzZDU1NDY2MjBlNmE1MDBkNTQzNTk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jO2ePiqe7i1yrC9WyBmWXVuSqi0YB5kQjWCUERLtV1U",
        },
      };

      async function buscarPeliculaFetch() {
        try {
          const res = await fetch(urlBuscarPeliculas, options);
            const data = await res.json();
            setBuscarPelicula(data.results);
            console.log(data.results)
        } catch (error) {
          console.log(error)
        }
      }
      
     

      useEffect(() => {  
        buscarPeliculaFetch()
      }, [nextPage]);

      const getNextPage = () => {
        setNextPage(nextPage + 1);
      };
    
      const prevPage = () => {
        setNextPage(nextPage - 1);
      };

         
  return (
    <>
    <div className="my-11">
        <div className="flex items-center justify-center gap-5">
        <input
          type="text"
          className="rounded-sm py-2 w-[300px] text-lg"
          placeholder=" Ingresa el nombre de tu pelicula"
          value={buscarNombre}
          onChange={(e) => setBuscarNombre(e.target.value)}
        />
        <button className="p-2 bg-red-700 text-white border rounded-lg hover:bg-red-900 font-bold uppercase" onClick={buscarPeliculaFetch}>
          Buscar
        </button>
        </div>
      
      <div className="grid md:grid-cols-4 p-1 m-5 gap-5 text-white sm:grid-cols-3 lg:grid-cols-6">
        {buscarPelicula.map((buscarpeli) => (
            <ItemBuscarPelicula
            key={buscarpeli.id} 
            id={buscarpeli.id}
            title={buscarpeli.title}
            poster_path={buscarpeli.poster_path}
            buscarpeli={buscarpeli}
            />
        ))}
      </div>

      <div className="flex gap-3 justify-center items-center text-white mb-8">
        <p className="font-white fontpelicula text-lg">Página: {nextPage}</p>
        <button
          onClick={prevPage}
          disabled={nextPage === 1}
          className="bg-red-800 uppercase font-light p-2 rounded-lg fontpelicula"
        >
          Página Anterior
        </button>
        <button
          onClick={getNextPage}
          className="bg-red-800 uppercase font-light p-2 rounded-lg fontpelicula"
        >
          Siguiente Página
        </button>
      </div>
    </div>
    </>
  );
};

export default BuscarPelicula;
