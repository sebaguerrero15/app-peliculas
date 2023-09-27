import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../store/peliculasSlice";
import { MdDeleteForever } from "react-icons/md";

const Favoritos = () => {
  const listPeliculas = useSelector((state) => state.lista);
  const path_imagen = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();

  const handleDeletePelicula = (lista) => {
    dispatch(deleteItem(lista));
  };

  return (
    <>
    <h2 className="flex justify-center text-2xl m-5 text-white fontpelicula">
        Mis Favoritos
      </h2>
    { listPeliculas ? (
      <div className="grid md:grid-cols-4 p-1 m-5 gap-5 text-white sm:grid-cols-3 lg:grid-cols-6">
        {listPeliculas.map((lista) => (
          <div key={lista.id}>
            <img
              src={`${path_imagen}${lista.poster_path}`}
              alt={lista.title}
              className="ease-in-out duration-300 hover:cursor-pointer hover:scale-110"
            />

            <h3 className="flex justify-center text-xl fontpelicula font-light mt-3 gap-3">
              {lista.title}
              <MdDeleteForever
                className="text-red-500 text-3xl cursor-pointer"
                onClick={() => handleDeletePelicula(lista)}
              />
            </h3>
          </div>
        ))}
        
      </div> ) : 
      <h2 className="flex justify-center items-center text-white fontpelicula">No hay peliculas Añadidas</h2>
      }
      </>
  );
};

export default Favoritos;
