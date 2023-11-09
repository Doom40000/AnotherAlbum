/* eslint-disable react/prop-types */
// const URL = "http://localhost:3000/album";

export default function Album ({album}) {
  return (
    <div className="Album">
      {album &&
        <img className="albumIMG" src={album}/>
      }
    </div>
  );
}