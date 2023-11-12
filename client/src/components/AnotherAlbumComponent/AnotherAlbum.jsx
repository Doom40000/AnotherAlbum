/* eslint-disable react/prop-types */
import Album from "../AlbumComponent/Album";
import { randomAlbum } from "../../ApiServices/APIServices";

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
    <div className="AnotherAblum">
      <div className="Body">
        <Album album={album} setFavourite={setFavourite} handleToggleFave={handleToggleFave}/>
        <button onClick={handleClick}>AnotherAlbum?</button>
        {album && (
          <div className="AlbumDetails">
          <h2>Here&apos;s another album for you:</h2>
          <h2>{album.artist}</h2>
          <h3>{album.albumName}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
