/* eslint-disable react/prop-types */
import "./Album.css";

//TODO Add a button that allows you to add an album to your favourites.
//TODO Add CSS that will display the button on hover.
export default function Album({ album, setFavourite }) {

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
    <div className="Album">
      {album && (
        <>
          <img className="albumIMG" src={album.cover} />
          <button className="faveButton" onClick={handleToggleFave}>Hello?</button>
        </>
      )}
    </div>
  );
}
