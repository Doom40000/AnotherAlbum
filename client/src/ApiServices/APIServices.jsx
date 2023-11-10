/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const baseURL = "http://localhost:3000";
const albumEndPoint = '/album';
// let id = 0;

// Not sure I need this, I may just use the array indexes as ids.
// function generateID () {
//   return id += 1;
// }

export async function randomAlbum() {
  try {
    const response = await axios.get(`${baseURL}${albumEndPoint}`, {responseType: 'blob'});
    const dataURL = URL.createObjectURL(response.data);
    const album = {cover: dataURL, isFavourite : false}
    return album
  } catch (error) {
    console.log(`API Error: ${error}`);
  }
}