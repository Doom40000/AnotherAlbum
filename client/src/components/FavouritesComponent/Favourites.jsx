/* eslint-disable react/prop-types */
import "./favourites.css";
const assetPath = "../../../assets/Icons";

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
      <div
        className={`Favourites ${favourites.length > 3 ? "showScrollBar" : ""}`}
      >

        {favourites.length
          ? favourites.map((album) => (
              <div className="faveAlbum" key={album.id}>
                <img className="fave" src={album.cover} />
                <img
                  className="faveHeart"
                  src={
                    album.isFavourite
                      ? `${assetPath}/darkerCross.svg`
                      : `${assetPath}/yellowHeart.svg`
                  }
                  onClick={() => handleToggleFave(album)}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
