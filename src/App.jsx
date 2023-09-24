import Navbar from "./components/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Series from "./pages/Series.jsx";
import Peliculas from "./pages/Peliculas.jsx"
import BuscarPelicula from "./pages/BuscarPelicula.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/buscarpelicula" element={<BuscarPelicula />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
  )
}

export default App
