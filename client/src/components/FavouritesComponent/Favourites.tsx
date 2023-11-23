/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import "./favourites.css";
const assetPath = "../../../assets/Icons";
import { Album as AlbumType } from "../../../types";
import { motion } from "framer-motion";

interface FavouritesProps {
  favourites: AlbumType[] | [];
  handleToggleFave: (album: AlbumType) => void;
}

const Favourites: React.FC<FavouritesProps> = ({ favourites, handleToggleFave }): ReactElement => {
  return (
    <div className="FavouritesContainer">
      {favourites.length ? (
        favourites.length === 1 ? (
          <h1 className="faveHeader">Here is your favourite!</h1>
        ) : (
          <h1 className="faveHeader">Here are your favourites!</h1>
        )
      ) : (
        <h1 className="faveHeader">You have no saved favourites.</h1>
      )}
      <div
        className={`Favourites ${favourites.length > 3 ? "showScrollBar" : ""}`}
        data-testid="favourites-container"
      >
        {favourites.length
          ? favourites.map((album: AlbumType) => (
              <div className="faveAlbum" key={album.id}>
                <img className="fave" src={album.cover} />
                <motion.img
                  whileHover={{
                    scale: 1.1,
                  }}
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

export default Favourites;