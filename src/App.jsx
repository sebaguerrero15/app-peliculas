import Navbar from "./components/Navbar.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Series from "./pages/Series.jsx";
import Peliculas from "./pages/Peliculas.jsx"
import BuscarPelicula from "./pages/BuscarPelicula.jsx";
import Favoritos from "./pages/Favoritos.jsx"
import Footer from "./components/Footer.jsx";

function App() {
  
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/buscarpelicula" element={<BuscarPelicula />} />
        </Routes>
        <Footer />
      </Router>
   
  )
}

export default App
