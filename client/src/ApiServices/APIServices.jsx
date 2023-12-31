/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const baseURL = "http://localhost:3000";
const albumEndPoint = "/album";

export async function randomAlbum() {
  try {
    const jsonResponse = await axios.get(`${baseURL}${albumEndPoint}`, {
      responseType: "json",
    });
    const { id, artist, albumName, cover } = jsonResponse.data;

    const unit8Array = new Uint8Array(cover.data);

    const dataBlob = new Blob([unit8Array], { type: "image/JPEG" });
    const dataURL = URL.createObjectURL(dataBlob);

    const album = {
      id: id,
      artist: artist,
      albumName: albumName,
      cover: dataURL,
      isFavourite: false,
    };

    return album;
  } catch (error) {
    console.log(`API Error: ${error}`);
  }
}
