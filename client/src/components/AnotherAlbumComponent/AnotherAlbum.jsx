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
  // const [isLoaded, setIsLoaded] = useState(false);
  const animationControl = useAnimation();

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("Album:", album);
    if (album) {
      console.log("Animation started");
      animationControl
        .start({ x: 0, opacity: 1 })
        .then(() => console.log("Animation complete."));
    }
  }, [album, animationControl]);

  // const newAlbum = () => Promise.resolve(setIsLoaded(false));

  const handleClick = async (event) => {
    event.preventDefault();
    // await newAlbum();
    try {
      const newAlbum = await randomAlbum();
      setAlbum(newAlbum);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="AnotherAlbum">
      <div className="AlbumOptions">
        <select>
          <option value="rock">Rock</option>
          <option value="dance">Dance</option>
        </select>
      </div>
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
          initial={{ x: 100, opacity: 0 }}
          animate={animationControl}
          transition={{ duration: 0.5 }}
        >
          <h2>Here&apos;s Another Album for you...</h2>
          <h2>Artist: {album.artist}</h2>
          <h3>Album: {album.albumName}</h3>
        </motion.div>
      ) : (
        <div className="AlbumDetails"></div>
      )}
    </div>
  );
}
