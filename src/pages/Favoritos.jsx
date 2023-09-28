import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"
import { deleteItem } from "../store/peliculasSlice";
import { MdDeleteForever } from "react-icons/md";
import toast , {Toaster} from "react-hot-toast"

const Favoritos = () => {
  const [mostrarLista, setMostrarLista] = useState(true)
  const listPeliculas = useSelector((state) => state.lista);
  const path_imagen = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();

  const handleDeletePelicula = (lista) => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar esta película?");

    if(confirmar){
      dispatch(deleteItem(lista));
      toast.success("Pelicula Eliminada")
    }
  };

  return (
    <>
      <h2 className="flex justify-center text-2xl m-5 text-white fontpelicula">
        Mis Favoritos
      </h2>
      <Toaster />
      {mostrarLista && listPeliculas.length > 0 ? (
        <div className="grid md:grid-cols-4 p-1 m-5 gap-5 text-white sm:grid-cols-3 lg:grid-cols-6">
          {listPeliculas.map((lista) => (
            <div key={lista.id}>
              <img
                src={`${path_imagen}${lista.poster_path}`}
                alt={lista.title}
                className="ease-in-out duration-300 hover:cursor-pointer hover:scale-110"
              />
              <div className="flex items-center gap-2 justify-center">
              <h3 className="flex justify-center text-xl fontpelicula font-light mt-3 gap-3">
                {lista.title}
              </h3>
                <MdDeleteForever
                  className="text-red-500 text-3xl cursor-pointer"
                  onClick={() => handleDeletePelicula(lista)}
                />
                </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="flex justify-center items-center text-white fontpelicula">
           {listPeliculas.length === 0
            ? "No hay películas Ingresadas"
            : setMostrarLista(false)}
        </h2>
      )}
    </>
  );
};

export default Favoritos;
