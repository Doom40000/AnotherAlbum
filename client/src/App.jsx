//client\src\App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginComponent/Login";
import Navbar from "./components/NavBarComponent/Navbar";
import AnotherAlbum from "./components/AnotherAlbumComponent/AnotherAlbum";
import Favourites from "./components/FavouritesComponent/Favourites";
import FourZeroFour from "./components/404Component/404";
import "./App.css";

function App() {
  const [album, setAlbum] = useState(null);
  const [favourites, setFavourite] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleToggleFave(clickedAlbum) {
    setFavourite((prevFavourites) => {
      const isAlbumInFave = prevFavourites.some(
        (fav) => fav.id === clickedAlbum.id
      );
      if (isAlbumInFave) {
        const updatedFavourites = prevFavourites.map((fave) =>
          fave.id === clickedAlbum.id ? { ...fave, isFavourite: false } : fave
        );
        return updatedFavourites.filter((fave) => fave.id !== clickedAlbum.id);
      } else {
        const updatedAlbum = { ...clickedAlbum, isFavourite: true };
        return [...prevFavourites, updatedAlbum];
      }
    });
  }

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            path="/AnotherAlbum"
            element={
              <AnotherAlbum
                album={album}
                setAlbum={setAlbum}
                setFavourite={setFavourite}
                handleToggleFave={handleToggleFave}
              />
            }
          />
          <Route
            path="/Favourites"
            element={
              <Favourites
                favourites={favourites}
                setFavourite={setFavourite}
                handleToggleFave={handleToggleFave}
              />
            }
          />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
