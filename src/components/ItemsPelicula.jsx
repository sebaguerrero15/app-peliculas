import { useState } from "react";
import Modal from "react-modal";
import { addItem } from "../store/peliculasSlice";
import { useDispatch } from 'react-redux';

const ItemsPelicula = ({ title, poster_path, id, pelicula }) => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState();
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const path_imagen = "https://image.tmdb.org/t/p/w500";

  const customStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "rgba(255, 255, 255, 0.75)",
      width: "80vh",
      padding: "20px",
    },
  };

  const handleAddPelicula = (peliculaSeleccionada) => {
    dispatch(addItem(peliculaSeleccionada));
  };

 
  const openModal = (pelicula) => {
    setModal(true);
    setPeliculaSeleccionada(pelicula);
  };

  const closeModal = () => {
    setPeliculaSeleccionada(null);
    setModal(false);
  };

  return (
    <div>
      <img
        src={`${path_imagen}${poster_path}`}
        alt={title}
        className="ease-in-out duration-300 hover:cursor-pointer hover:scale-110"
        onClick={() => openModal(pelicula)}
      />
      <h3 className="flex justify-center text-xl fontpelicula font-light mt-3">
        {title}
      </h3>

      {peliculaSeleccionada && peliculaSeleccionada.id === id && (
        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Detalles de la Película"
          className="justify-center items-center rounded-lg"
        >
          <h3 className="flex justify-center font-extrabold text-xl fontpelicula">
            {peliculaSeleccionada.title}
          </h3>
          <div className="grid grid-cols-2">
            <img
              src={`${path_imagen}${peliculaSeleccionada.poster_path}`}
              alt={peliculaSeleccionada.title}
              className="mt-2 h-auto w-[200px]"
            />
            <p className="flex justify-center fontpelicula font-light text-md">
              {peliculaSeleccionada.overview}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Fecha Estreno: </span>
              {peliculaSeleccionada.release_date}
            </p>

            <p className="flex justify-center font-semibold text-lg">
              Vote: {peliculaSeleccionada.vote_average} 🎬
            </p>
          </div>

          <div className="flex justify-center items-center gap-3 text-sm">
            <button
              className="border p-2 mt-5 rounded-md uppercase bg-red-700 text-white hover:bg-red-900 font-bold"
              onClick={() => closeModal()}
            >
              Cerrar
            </button>
            <button 
            className="border p-2 mt-5 rounded-md uppercase bg-cyan-700 text-white hover:bg-cyan-900 font-bold"
            onClick={() => handleAddPelicula(peliculaSeleccionada)}
            >
              Añadir a Favoritos
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ItemsPelicula;
