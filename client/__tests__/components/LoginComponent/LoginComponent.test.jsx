import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "../../../src/components/LoginComponent/Login";

describe("Login Component", () => {
  it("should render the three headings 'login', 'email', and 'password", () => {
    render(<Router><Login setIsLoggedIn={false}/></Router>);
    expect(screen.getByText("Login:")).toBeTruthy();
    expect(screen.getByText("Email:")).toBeTruthy();
    expect(screen.getByText("Password:")).toBeTruthy();
  });

  it("should contain a text input for the email to added and a password input for the password", () => {
    render(<Router><Login setIsLoggedIn={false}/></Router>);
    expect(screen.getByTestId("login-input-email")).not.toBe(null);
    expect(screen.getByTestId("login-input-password")).not.toBe(null);
  });

  it("should toggle register form render on click of 'New here?'", () => {
    render(<Router><Login setIsLoggedIn={false}/></Router>);
    const newHereHeading = screen.getByTestId("new-here-heading");
    fireEvent.click(newHereHeading);
    expect(screen.getByTestId("register-user")).not.toBe(null);
  });
});