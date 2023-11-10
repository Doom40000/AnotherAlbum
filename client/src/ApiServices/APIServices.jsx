/* eslint-disable react-refresh/only-export-components */
const url = "http://localhost:3000";

export async function randomAlbum() {
  try {
    const data = await fetch(`${url}/album`);
    const dataBlob = await data.blob();
    const response = URL.createObjectURL(dataBlob);
    console.log(response);
    return response;
  } catch (error) {
    console.log(`API Error: ${error}`);
  }
}