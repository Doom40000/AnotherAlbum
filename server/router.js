const router = require("express").Router();
const mockData = require("./models/db");
const path = require("path");

function randomNum() {
  return Math.floor(Math.random() * 8);
}

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/album", (req, res) => {
  const index = randomNum();
  const imagePath = mockData[index].cover;
  console.log(imagePath);
  res.sendFile(path.join(__dirname, "public/mockImages", imagePath));
});

module.exports = router;