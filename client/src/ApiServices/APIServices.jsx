/* eslint-disable react-refresh/only-export-components */
const URL = "http://localhost:3000";

export async function randomAlbum() {
  try {
    const data = await fetch(`${URL}/album`);
    const response = await data.text();
    console.log(response);
    return response;
  } catch (error) {
    console.log(`API Error: ${error}`);
  }
}