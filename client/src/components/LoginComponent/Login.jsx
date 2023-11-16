/* eslint-disable react/prop-types */
import "./Login.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    // This could be a form with a submit instead of a link - the onSubmitHandler could use navigate() to apply same functionality as below
    <div className="userDetailsContainer">
      <h2>Login:</h2>
      <h3>Email:</h3>
      <input data-testid="login-input-email" className="loginInput" type="text"></input>
      <h3>Password:</h3>
      <input data-testid="login-input-password" className="loginInput" type="password"></input>
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
        data-testid="new-here-heading"
        onClick={() => setIsClicked(!isClicked)}
      >
        New here?
      </motion.h2>
      {isClicked && (
        <>
          <h3>Email:</h3>
          <input className="registerInput" type="text"></input>
          <h3>Set Password:</h3>
          <input className="registerInput" type="password"></input>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            className="registerButton"
            data-testid="register-user"
          >
            Register User
          </motion.button>
        </>
      )}
    </div>
  );
}
