import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="Logo">AnotherAlbum 🎵</h1>
      <nav>
        <Link to="/" style={{ padding: 5 }}>Login</Link>
        <Link to="/AnotherAlbum" style={{ padding: 5 }}>AnotherAlbum</Link>
        <Link to="/Favourites" style={{ padding: 5 }}>Favourites</Link>
      </nav>
    </div>
  );
}
