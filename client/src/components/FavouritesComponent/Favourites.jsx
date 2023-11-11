/* eslint-disable react/prop-types */
import "./favourites.css";
const assetPath = "../../../assets"


//TODO Update button behaviour: Hover on mouseover and change icon accordingly.
export default function Favourites({ favourites, handleToggleFave }) {
  return (
    <div className="FavouritesContainer">
      <h1>Here are your favourites!</h1>
      <div className="Favourites">
        {favourites.length ? (
          favourites.map((album) => (
            <div className="faveAlbum" key={album.id}>
              <img className="fave" src={album.cover} />
              <img
            className="faveHeart"
            src={album.isFavourite ?  `${assetPath}/remove.png` : `${assetPath}/yellowHeart.png` }
            onClick={() => handleToggleFave(album)}
          />
            </div>
          ))
        ) : (
          <p className="noFaves">You have no favourite albums!</p>
        )}
      </div>
    </div>
  );
}
