/* eslint-disable react/prop-types */
import "./favourites.css";

//TODO Add a button that lets you remove albums from your favourites.
export default function Favourites({ favourites, handleToggleFave }) {
  return (
    <div className="Favourites">
      <h1>Here are your favourites!</h1>
      {favourites.length ? (
        favourites.map((album) => (
          <div key={album.cover}>
            <img className="fave" src={album.cover} />
            <button className="faveButton" onClick={() => handleToggleFave(album)}>Hello?</button>
          </div>
        ))
      ) : (
        <p className="noFaves">You have no favourite albums!</p>
      )}
    </div>
  );
}
