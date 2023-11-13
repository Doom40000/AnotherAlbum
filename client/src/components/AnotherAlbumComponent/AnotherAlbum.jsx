/* eslint-disable react/prop-types */
import Album from "../AlbumComponent/Album";
import { randomAlbum } from "../../ApiServices/APIServices";
import "./AnotherAlbum.css";

export default function AnotherAlbum({ album, setAlbum, setFavourite, handleToggleFave}) {

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const newAlbum = await randomAlbum();
      console.log(newAlbum)
      setAlbum(newAlbum);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="AnotherAlbum">
      <div className="AlbumOptions">
        <ul>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </ul>
      </div>
      <div className="AADisplay">
        <Album album={album} setFavourite={setFavourite} handleToggleFave={handleToggleFave}/>
        <button className="AAButton" onClick={handleClick}>AnotherAlbum?</button>
        </div>
        {album && (
          <div className="AlbumDetails">
          <h2>Here&apos;s Another Album for you...</h2>
          <h2>Artist: {album.artist}</h2>
          <h3>Album: {album.albumName}</h3>
          </div>
        )}
    </div>
  );
}
