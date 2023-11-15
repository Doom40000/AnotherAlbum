/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Album from "../AlbumComponent/Album";
import { randomAlbum } from "../../ApiServices/APIServices";
import "./AnotherAlbum.css";

export default function AnotherAlbum({
  album,
  setAlbum,
  setFavourite,
  handleToggleFave,
}) {
  const animationControl = useAnimation();

  useEffect(() => {
    if (album) {
      animationControl.start({ x: 0, opacity: 1 });
    }
  }, [album, animationControl]);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const newAlbum = await randomAlbum();
      setAlbum(newAlbum);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="AnotherAlbum">
      <div className="AADisplay">
        <Album
          album={album}
          setFavourite={setFavourite}
          handleToggleFave={handleToggleFave}
        />

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
            style={{marginRight: '14vw'}}
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
}
