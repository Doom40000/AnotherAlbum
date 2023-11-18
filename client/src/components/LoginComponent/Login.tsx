/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from '../../context/AuthContext';

interface LoginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ isLoggedIn, setIsLoggedIn }): ReactElement => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [createUserForm, setCreateUserForm] = useState<{email: string | null, password: string | null}>({email: null, password: null});
  const [signInForm, setSignInForm] = useState<{email: string | null, password: string | null}>({email: null, password: null});

  const { createUser, signIn } = useAuth();
  const navigate = useNavigate();

  const handleCreateUserChange = (e): void => {
    const { name, value } = e.target
    setCreateUserForm((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleCreateUserSubmit = async (e): Promise<void> => {
    e.preventDefault();
    const { email, password } = createUserForm;
    if (email && password) {
      await createUser(email, password);
      navigate('/AnotherAlbum')
    }
  }

  const handleSignInChange = (e): void => {
    const { name, value } = e.target
    setSignInForm((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSignInSubmit = async (e): Promise<void> => {
    e.preventDefault();
    console.log('running handler')
    const { email, password } = signInForm;
    if (email && password) {
      await signIn(email, password);
      navigate('/AnotherAlbum')
    }
  }

  return (
    <div className="userDetailsContainer">
      <h2>Login:</h2>
      <form onSubmit={handleSignInSubmit}>
        <h3>Email:</h3>
        <input name="email" onChange={handleSignInChange} data-testid="login-input-email" className="loginInput" type="text"></input>
        <h3>Password:</h3>
        <input name="password" onChange={handleSignInChange}  data-testid="login-input-password" className="loginInput" type="password"></input>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          className="loginButton"
        >
          Login User
        </motion.button>
      </form>
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
        <form onSubmit={handleCreateUserSubmit}>
          <h3>Email:</h3>
          <input name="email" onChange={handleCreateUserChange} className="registerInput" type="text"></input>
          <h3>Set Password:</h3>
          <input name="password" onChange={handleCreateUserChange} className="registerInput" type="password"></input>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            className="registerButton"
            data-testid="register-user"
          >
            Register User
          </motion.button>
        </form>
      )}
    </div>
  );
}

export default Login;