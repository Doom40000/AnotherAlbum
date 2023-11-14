/* eslint-disable react/prop-types */
import "./Album.css";
// import { motion } from 'framer-motion';
const assetPath = "../../../assets/Icons"


export default function Album({ album, handleToggleFave }) {



  return (
    <>
      {album ? (
        <div className="Album">
          <img className="albumIMG" src={album.cover}/>
          {/* <motion.div whileHover={{
            scale: 1.1
          }}> */}
            <div>
            <img
              key={album.isFavourite}
              className="faveHeart"
              src={album.isFavourite ?  `${assetPath}/darkerCross.svg` : `${assetPath}/yellowHeart.svg` }
              onClick={() => handleToggleFave(album)}
            />
            </div>
          {/* </motion.div> */}
        </div>
      ) : (
        <div className="AlbumPlaceholder">
        </div>
      )}
    </>
  );
}
