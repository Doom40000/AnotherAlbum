/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Album from "../AlbumComponent/Album";
import { randomAlbum } from "../../ApiServices/APIServices";

export default function AnotherAlbum({ album, setAlbum, setFavourite, handleToggleFave}) {

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const newAlbum = await randomAlbum();
      console.log(newAlbum)
      setAlbum(newAlbum);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="AnotherAblum">
      <div className="Body">
        <Album album={album} setFavourite={setFavourite} handleToggleFave={handleToggleFave}/>
        <button onClick={handleClick}>AnotherAlbum?</button>
      </div>
    </div>
  );
}
