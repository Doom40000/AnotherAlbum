import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/LoginComponent/Login";
import Navbar from "./components/NavBarComponent/Navbar";
import AnotherAlbum from "./components/AnotherAlbumComponent/AnotherAlbum";
import Favourites from "./components/FavouritesComponent/Favourites";
import FourZeroFour from "./components/404Component/404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AnotherAlbum" element={<AnotherAlbum />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
