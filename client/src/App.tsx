//client\src\App.jsx
import React, { useState, useEffect, ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from './context/AuthContext';
import Login from "./components/LoginComponent/Login";
import Navbar from "./components/NavBarComponent/Navbar";
import AnotherAlbum from "./components/AnotherAlbumComponent/AnotherAlbum";
import Favourites from "./components/FavouritesComponent/Favourites";
import FourZeroFour from "./components/404Component/404";
import { Album as AlbumType } from "../types";
import "./App.css";

function App(): ReactElement {
  const { user } = useAuth();
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [favourites, setFavourite] = useState<AlbumType[] | []>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  },[user]);

  function handleToggleFave(clickedAlbum: AlbumType) {
    setFavourite((prevFavourites: AlbumType[] | []) => {
      const isAlbumInFave = prevFavourites.some(
        (fav) => fav.id === clickedAlbum.id
      );
      if (isAlbumInFave) {
        const updatedFavourites: AlbumType[] = prevFavourites.map((fave: AlbumType) =>
          fave.id === clickedAlbum.id ? { ...fave, isFavourite: false } : fave
        );
        return updatedFavourites.filter((fave) => fave.id !== clickedAlbum.id);
      } else {
        const updatedAlbum: AlbumType = { ...clickedAlbum, isFavourite: true };
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
                handleToggleFave={handleToggleFave}
              />
            }
          />
          <Route
            path="/Favourites"
            element={
              <Favourites
                favourites={favourites}
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
