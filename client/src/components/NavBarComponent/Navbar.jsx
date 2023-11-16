/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
const assetPath = "../../../assets";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="Navbar">
      <img className="Logo" src={`${assetPath}/LogoSmaller.jpeg`} alt="logo" style={isLoggedIn ?  {} : {marginRight: '5vw'} } />
      <nav data-testid="nav-link-container" className="Navlinks">
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
        >
          {isLoggedIn ? (
            <Link
              onClick={() => setIsLoggedIn(false)}
              className="NavLink"
              to="/"
              style={{ padding: 5 }}
              data-testid="logout-button"
            >
              Logout
            </Link>
          ) : (
            <Link className="NavLink" to="/" style={{ padding: 5 }} data-testid="login-button">
              Login
            </Link>
          )}
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
        >
          <Link className="NavLink" to="/AnotherAlbum" style={{ padding: 5 }}>
            AnotherAlbum
          </Link>
        </motion.div>
        {isLoggedIn && (
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
        >
          
            <Link className="NavLink" to="/Favourites" style={{ padding: 5 }}>
              Favourites
            </Link>
          
        </motion.div>
        )}
      </nav>
    </div>
  );
}
