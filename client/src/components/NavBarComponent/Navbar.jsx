import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Navbar.css";
const assetPath = "../../../assets"

export default function Navbar() {
  return (
    <div className="Navbar">
      <img className="Logo" src={`${assetPath}/LogoSmaller.jpeg`} />
      <nav className="Navlinks">
        <motion.div
        whileHover={{
          scale: 1.2
          }}>
          <Link className="NavLink" to="/" style={{ padding: 5 }}>Login</Link>
          </motion.div>
        <motion.div
        whileHover={{
          scale: 1.2
          }}>
          <Link className="NavLink" to="/AnotherAlbum" style={{ padding: 5 }}>AnotherAlbum</Link>
          </motion.div>
        <motion.div
        whileHover={{
          scale: 1.2
          }}>
          <Link className="NavLink" to="/Favourites" style={{ padding: 5 }}>Favourites</Link>
          </motion.div>
      </nav>
    </div>
  );
}
