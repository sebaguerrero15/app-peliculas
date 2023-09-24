import { useState, useEffect } from "react";
import ItemsPelicula from "../components/ItemsPelicula";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  

  const urlPeliculas = `https://api.themoviedb.org/3/movie/top_rated?language=es-MX&page=${nextPage}`;
  

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTMwYTUwYjc0YjM5NTRkYWZhZjA2MzUzZWIwZTgxZSIsInN1YiI6IjYzZDU1NDY2MjBlNmE1MDBkNTQzNTk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jO2ePiqe7i1yrC9WyBmWXVuSqi0YB5kQjWCUERLtV1U",
    },
  };

  useEffect(() => {
    async function fetchApiPeliculas() {
      try {
        const res = await fetch(urlPeliculas, options);
        const data = await res.json();
        setPeliculas(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApiPeliculas();
  }, [nextPage]);


  const getNextPage = () => {
    setNextPage(nextPage + 1);
  };

  const prevPage = () => {
    setNextPage(nextPage - 1);
  };

  return (
    <>
      <div className="grid md:grid-cols-4 p-1 m-5 gap-5 text-white sm:grid-cols-3 lg:grid-cols-6">
        {peliculas.map((pelicula) => (
          <ItemsPelicula
            key={pelicula.id}
            id={pelicula.id}
            title={pelicula.title}
            poster_path={pelicula.poster_path}
            pelicula={pelicula}
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
    </>
  );
};

export default Peliculas;
