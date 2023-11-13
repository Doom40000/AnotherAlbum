/* eslint-disable react/prop-types */
import "./favourites.css";
const assetPath = "../../../assets"

export default function Favourites({ favourites, handleToggleFave }) {
  return (
    <div className="FavouritesContainer">
      {favourites.length ? (
        favourites.length === 1 ? (
          <h1>Here is your favourite!</h1>
         ) : (
           <h1>Here are your favourites!</h1>
         )
        ) : (
        <h1>You have no saved favourites.</h1>
      )}
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
        null
        )}
      </div>
    </div>
  );
}
