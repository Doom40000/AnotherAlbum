import { useState } from 'react'
import "./App.css";
import Navbar from "./components/NavBarComponent/Navbar";
import Album from "./components/AlbumComponent/Album";
import { randomAlbum } from "./ApiServices/APIServices";

function App() {
  const [album, setAlbum] = useState(null);
  const [favourites, setFavourite] = useState([]);
  console.log(`Album:  ${album}`);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const imageUrl = await randomAlbum();
      setAlbum(imageUrl);
    } catch (error) {
      console.log(`Error: ${error}`);

    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="Body">
        <Album album={album}/>
        <button onClick={handleClick}>AnotherAlbum?</button>
      </div>
    </div>
  );
}

export default App;