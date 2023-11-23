//client\src\components\AnotherAlbumComponent\AnotherAlbum.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Album from "../AlbumComponent/Album";
import { Album as AlbumType } from "../../../types";
import { randomAlbum } from "../../ApiServices/APIServices";
import "./AnotherAlbum.css";

interface AnotherAlbumProps {
  album: AlbumType | null;
  setAlbum: React.Dispatch<React.SetStateAction<AlbumType | null>>;
  handleToggleFave: (album: AlbumType) => void;
}

const AnotherAlbum: React.FC<AnotherAlbumProps> = ({
  album,
  setAlbum,
  handleToggleFave,
}) => {
  const animationControl = useAnimation();

  useEffect(() => {
    if (album) {
      animationControl.start({ x: 0, opacity: 1 });
    }
  }, [album, animationControl]);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const newAlbum = await randomAlbum();
      if (newAlbum !== undefined) {
        setAlbum(newAlbum as AlbumType);
      } else {
        setAlbum(null);
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      setAlbum(null);
    }
  };

  return (
    <div className="AnotherAlbum">
      <div className="AADisplay">
        {album && <Album album={album} handleToggleFave={handleToggleFave} />}

        {album ? (
          <motion.div
            whileHover={{
              scale: 1.5,
            }}
          >
            <button className="AAButton" onClick={handleClick}>
              AnotherAlbum?
            </button>
          </motion.div>
        ) : (
          <motion.div
            whileHover={{
              scale: 1.5,
            }}
            style={{ marginRight: "14vw" }}
          >
            <button className="AAButton" onClick={handleClick}>
              Hit me with an album!
            </button>
          </motion.div>
        )}
      </div>
      {album ? (
        <motion.div
          className="AlbumDetails"
          key={album.id}
          initial={{ x: 100, opacity: 0 }}
          animate={animationControl}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="detailsHeader"
            whileHover={{
              scale: 1.1,
            }}
          >
            Here&apos;s Another Album for you...
          </motion.h1>
          <motion.h1
            className="artistDetails"
            whileHover={{
              scale: 1.1,
            }}
          >
            Album: {album.albumName}
          </motion.h1>
          <motion.h1
            className="albumDetails"
            whileHover={{
              scale: 1.1,
            }}
          >
            Artist: {album.artist}
          </motion.h1>
        </motion.div>
      ) : (
        <div className="AlbumDetails"></div>
      )}
    </div>
  );
};

export default AnotherAlbum;
