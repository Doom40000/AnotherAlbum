import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/LoginComponent/Login";
import Navbar from "./components/NavBarComponent/Navbar";
import AnotherAlbum from "./components/AnotherAlbumComponent/AnotherAlbum";
import Favourites from "./components/FavouritesComponent/Favourites";
import FourZeroFour from "./components/404Component/404";
import "./App.css";

function App() {
  const [album, setAlbum] = useState({ });
  const [favourites, setFavourite] = useState([]);

  function handleToggleFave() {
    setFavourite((prevFavourites) => {
      if (prevFavourites.includes(album)) {
        return prevFavourites.filter((fav) => fav !== album);
      } else {
        return [...prevFavourites, album];
      }
    });
  }

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AnotherAlbum" element={<AnotherAlbum album={album} setAlbum={setAlbum} setFavourite={setFavourite} handleToggleFave={handleToggleFave}/>} />
          <Route path="/Favourites" element={<Favourites favourites={favourites} setFavourite={setFavourite} handleToggleFave={handleToggleFave}/>} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
