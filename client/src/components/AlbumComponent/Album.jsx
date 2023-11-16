//client\src\components\AlbumComponent\Album.jsx
import "./Album.css";
import { motion } from "framer-motion";
const assetPath = "../../../assets/Icons";

export default function Album({ album, handleToggleFave }) {
  return (
    <>
      {album ? (
        <div className="Album">
          <img className="albumIMG" src={album.cover} alt="album cover" />
          <motion.div
            className="faveHeart"
            whileHover={{
              scale: 1.5,
            }}
          >
            <img
              key={album.isFavourite}
              data-testid="favourite-heart"
              className="faveHeart"
              src={
                album.isFavourite
                  ? `${assetPath}/darkerCross.svg`
                  : `${assetPath}/yellowHeartbigger.svg`
              }
              onClick={() => handleToggleFave(album)}
            />
          </motion.div>
        </div>
      ) : (
        <div className="AlbumPlaceholder" data-testid="album-placeholder"></div>
      )}
    </>
  );
}
