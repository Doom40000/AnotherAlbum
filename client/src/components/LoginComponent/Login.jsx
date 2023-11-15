/* eslint-disable react/prop-types */
import "./Login.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="userDetailsContainer">
      <h2>Login:</h2>
      <h3>Email:</h3>
      <input className="loginInput"></input>
      <h3>Password:</h3>
      <input className="loginInput" type="password"></input>
      <Link to="/AnotherAlbum">
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          className="loginButton"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Login User
        </motion.button>
      </Link>
      <motion.h2
        whileHover={{
          scale: 1.2,
        }}
        className="registerHeader"
        onClick={() => setIsClicked(!isClicked)}
      >
        New here?
      </motion.h2>
      {isClicked && (
        <>
          <h3>Email:</h3>
          <input className="registerInput"></input>
          <h3>Set Password:</h3>
          <input className="registerInput" type="password"></input>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            className="registerButton"
          >
            Register User
          </motion.button>
        </>
      )}
    </div>
  );
}
