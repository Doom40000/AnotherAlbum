import "./favourites.css";
import Navbar from "../NavBarComponent/Navbar";

export default function Favourites() {
  return (
    <div className="Favourites">
      <Navbar />
      <div className="favouritesBody">
        <h1>Here are your favourites!</h1>
        <img src="https://www.albumartexchange.com/coverart/gallery/mf/mfdoom_mmfood_eab.jpg" />
      </div>
    </div>
  );
}
