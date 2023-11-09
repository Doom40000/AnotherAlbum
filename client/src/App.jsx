import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Album from "./components/Album";
import { randomAlbum } from "./ApiServices/APIServices";

function App() {
  const [album, setAlbum] = useState('');
  console.log(`Album:  ${album}`);

  const handleClick = (event) => {
    event.preventDefault();
    randomAlbum().then((fetchedAlbum) => {
      setAlbum(fetchedAlbum);
    });
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