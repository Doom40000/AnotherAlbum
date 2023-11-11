import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="Logo">AnotherAlbum 🎵</h1>
      <nav className="Navlinks">
        <Link className="NavLink" to="/" style={{ padding: 5 }}>Login</Link>
        <Link className="NavLink" to="/AnotherAlbum" style={{ padding: 5 }}>AnotherAlbum</Link>
        <Link className="NavLink" to="/Favourites" style={{ padding: 5 }}>Favourites</Link>
      </nav>
    </div>
  );
}
