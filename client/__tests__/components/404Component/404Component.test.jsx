//client\__tests__\components\404Component\404Component.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FourZeroFour from "../../../src/components/404Component/404";

describe("FourZeroFour Component", () => {
  it("renders without crashing", () => {
    render(<FourZeroFour />);
    expect(screen.getByText("Oops!")).toBeTruthy();
  });

  it("displays the 404 message", () => {
    render(<FourZeroFour />);
    expect(screen.getByText("404: Page not found. ☠️")).toBeTruthy();
  });

  it("suggests to turn around", () => {
    render(<FourZeroFour />);
    expect(screen.getByText("Time to turn around. ↩️")).toBeTruthy();
  });
});
