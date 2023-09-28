import { useState } from "react";
import Modal from "react-modal";

const ItemSerie = ({title, poster_path, id, serie, name}) => {
    const [serieSeleccionada, setSerieSeleccionada] = useState();
    const [modal, setModal] = useState(false);

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

    const openModal = (serie) => {
        setModal(true);
        setSerieSeleccionada(serie);
      };
    
      const closeModal = () => {
        setSerieSeleccionada(null);
        setModal(false);
      };
    
  return (
    <div key={title}>
    <img src={`${path_imagen}${poster_path}`} alt={name} className="ease-in-out duration-300 hover:cursor-pointer hover:scale-110" onClick={() => openModal(serie)}/>
    <h3 className="flex justify-center text-xl fontpelicula font-light mt-3">{name}</h3>   
    {serieSeleccionada && serieSeleccionada.id === id && (
<Modal
  isOpen={modal}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Detalles de la Serie"
  className="justify-center items-center rounded-lg"
>
  <h3 className="flex justify-center font-extrabold text-xl fontpelicula">
    {serieSeleccionada.title}
  </h3>
  <div className="grid grid-cols-2">
    <img
      src={`${path_imagen}${serieSeleccionada.poster_path}`}
      alt={serieSeleccionada.title}
      className="mt-2 h-auto w-[200px]"
    />
    <p className="flex justify-center fontpelicula font-light text-md">
      {serieSeleccionada.overview}
    </p>
    

    <p className="flex justify-center font-semibold text-lg">
      Vote: {serieSeleccionada.vote_average} 🎬
    </p>
  </div>

  <div className="flex justify-center items-center gap-3 text-sm">
    <button
      className="border p-2 mt-5 rounded-md uppercase bg-red-700 text-white hover:bg-red-900 font-bold"
      onClick={() => closeModal()}
    >
      Cerrar
    </button>
    <button className="border p-2 mt-5 rounded-md uppercase bg-cyan-700 text-white hover:bg-cyan-900 font-bold">
      Ver Trailer
    </button>
  </div>
</Modal>

)} 
</div>
  )
}

export default ItemSerie