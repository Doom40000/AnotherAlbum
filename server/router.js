/* eslint-disable no-undef */
const router = require("express").Router();
const mockData = require("./models/db");
const path = require("path");
const fs = require("fs");

function randomNum() {
  return Math.floor(Math.random() * 8);
}


router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/album", (req, res) => {
  let index = randomNum();
  const album = mockData[index];
  const imagePath = path.join(__dirname, "public/mockImages", album.cover);
  fs.readFile(imagePath, (error, data) => {
    if (error) {
      console.log(`Image error: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.json({
        id: album.id,
        artist: album.artist,
        albumName: album.album,
        cover: data,
      });
    }
  });
});

module.exports = router;
