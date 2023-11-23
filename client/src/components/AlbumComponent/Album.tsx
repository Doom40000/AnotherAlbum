//client\src\components\AlbumComponent\Album.jsx

import React from "react";
import "./Album.css";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { Album as AlbumType } from "../../../types";

const assetPath = "../../../assets/Icons";

interface AlbumProps {
  album?: AlbumType; // album is now optional
  handleToggleFave: (album: AlbumType) => void;
}

const Album: React.FC<AlbumProps> = ({ album, handleToggleFave }) => {
  const { addAlbum } = useAuth();

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
              data-testid="favourite-heart"
              className="faveHeart"
              src={
                album.isFavourite
                  ? `${assetPath}/darkerCross.svg`
                  : `${assetPath}/yellowHeartbigger.svg`
              }
              onClick={() => {
                handleToggleFave(album);
                addAlbum(album);
              }}
              alt={
                album.isFavourite
                  ? "Remove from favourites"
                  : "Add to favourites"
              }
            />
          </motion.div>
        </div>
      ) : (
        <div className="AlbumPlaceholder" data-testid="album-placeholder"></div>
      )}
    </>
  );
};

export default Album;
