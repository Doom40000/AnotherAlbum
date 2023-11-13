/* eslint-disable react/prop-types */
import "./Album.css";
const assetPath = "../../../assets"


export default function Album({ album, handleToggleFave }) {
  return (
    <>
      {album && (
        <div className="Album">
          <img className="albumIMG" src={album.cover} />
          <img
            className="faveHeart"
            src={album.isFavourite ?  `${assetPath}/remove.png` : `${assetPath}/yellowHeart.png` }
            onClick={() => handleToggleFave(album)}
          />
        </div>
      )}
    </>
  );
}
