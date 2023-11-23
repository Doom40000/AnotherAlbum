import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../../../src/components/NavBarComponent/Navbar";

describe("NavBar Component", () => {
  it("should render logo image", () => {
    render(<Router><Navbar isLoggedIn={false}/></Router>);
    expect(screen.getByAltText("logo")).toBeTruthy()
  });
  it("should contains atleast two links in the navigation if user is not logged in", () => {
    render(<Router><Navbar isLoggedIn={false}/></Router>);
    expect(screen.getByTestId("nav-link-container").children.length).toBeGreaterThanOrEqual(2);
  });
  it("should contains atleast three links in the navigation if user is logged in", () => {
    render(<Router><Navbar isLoggedIn={true}/></Router>);
    expect(screen.getByTestId("nav-link-container").children.length).toBeGreaterThanOrEqual(2);
  })
  it("if logged in is false 'login' should show and 'logout' should be removed", () => {
    render(<Router><Navbar isLoggedIn={false}/></Router>);
    expect(screen.getByTestId("login-button")).toBeTruthy();
  })
  it("if logged in is true 'login' should be removed and 'logout' should show", () => {
    render(<Router><Navbar isLoggedIn={true}/></Router>);
    expect(screen.getByTestId("logout-button")).toBeTruthy();
  })
});