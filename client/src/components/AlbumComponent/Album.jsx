/* eslint-disable react/prop-types */
import "./Album.css";
import { motion } from "framer-motion";
const assetPath = "../../../assets/Icons";

export default function Album({ album, handleToggleFave }) {
  return (
    <>
      {album ? (
        <div className="Album">
          <img className="albumIMG" src={album.cover} />
          <motion.div
            className="faveHeart"
            whileHover={{
              scale: 1.5,
            }}
          >
            <img
              key={album.isFavourite}
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
        <div className="AlbumPlaceholder"></div>
      )}
    </>
  );
}
