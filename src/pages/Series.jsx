import { useState, useEffect } from "react";
import ItemSerie from "../components/ItemSerie";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const urlSeries = `https://api.themoviedb.org/3/tv/top_rated?language=es-ES&page=${nextPage}`;

  useEffect(() => {
    async function fetchSeries() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTMwYTUwYjc0YjM5NTRkYWZhZjA2MzUzZWIwZTgxZSIsInN1YiI6IjYzZDU1NDY2MjBlNmE1MDBkNTQzNTk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jO2ePiqe7i1yrC9WyBmWXVuSqi0YB5kQjWCUERLtV1U",
        },
      };
      try {
        const res = await fetch(urlSeries, options);
        const data = await res.json();
        console.log(data);
        setSeries(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSeries();
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
        {series.map((serie) => (
          <ItemSerie
            key={serie.id}
            id={serie.id}
            title={serie.title}
            poster_path={serie.poster_path}
            name={serie.name}
            serie={serie}
          />
        ))}
        ;
      </div>

      <div className="flex gap-3 justify-center items-center text-white mb-8">
        <p className="font-white fontpelicula text-lg">Página: {nextPage}</p>
        <button
          onClick={prevPage}
          disabled={nextPage === 1}
          className="bg-red-800 hover:bg-red-700 uppercase font-light p-2 rounded-lg fontpelicula cursor-pointer"
        >
          Página Anterior
        </button>
        <button
          onClick={getNextPage}
          className="bg-red-800 hover:bg-red-700 uppercase font-light p-2 rounded-lg fontpelicula cursor-pointer"
        >
          Siguiente Página
        </button>
      </div>
    </>
  );
};

export default Series;
