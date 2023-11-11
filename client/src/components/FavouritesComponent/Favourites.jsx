/* eslint-disable react/prop-types */
import "./favourites.css";

//TODO Update button behaviour: Hover on mouseover and change icon accordingly.
export default function Favourites({ favourites, handleToggleFave }) {
  return (
    <div className="FavouritesContainer">
      <h1>Here are your favourites!</h1>
      <div className="Favourites">
        {favourites.length ? (
          favourites.map((album) => (
            <div key={album.id}>
              <img className="fave" src={album.cover} />
              <button className="faveButton" onClick={() => handleToggleFave(album)}>Hello?</button>
            </div>
          ))
        ) : (
          <p className="noFaves">You have no favourite albums!</p>
        )}
      </div>
    </div>
  );
}
