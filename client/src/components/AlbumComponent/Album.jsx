/* eslint-disable react/prop-types */

export default function Album ({album}) {
  return (
    <div className="Album">
      {album &&
        <img className="albumIMG" src={album}/>
      }
    </div>
  );
}