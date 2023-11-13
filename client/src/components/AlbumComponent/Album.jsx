/* eslint-disable react/prop-types */
import "./Album.css";
import { motion } from 'framer-motion';
const assetPath = "../../../assets"


export default function Album({ album, handleToggleFave }) {



  return (
    <>
      {album ? (
        <div className="Album">
          <img className="albumIMG" src={album.cover}/>
          <motion.div whileHover={{
            scale: 1.1
          }}>
            <img
              className="faveHeart"
              src={album.isFavourite ?  `${assetPath}/remove.png` : `${assetPath}/yellowHeart.png` }
              onClick={() => handleToggleFave(album)}
            />
          </motion.div>
        </div>
      ) : (
        <div className="AlbumPlaceholder">
        </div>
      )}
    </>
  );
}
