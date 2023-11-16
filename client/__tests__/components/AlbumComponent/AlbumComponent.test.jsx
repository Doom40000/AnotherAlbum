//client\__tests__\components\AlbumComponent\AlbumComponent.test.jsx
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Album from "../../../src/components/AlbumComponent/Album";

describe("Album Component", () => {
  it("renders album information when album is provided", () => {
    const album = { cover: "test-cover.jpg", isFavourite: false };
    render(<Album album={album} handleToggleFave={() => {}} />);

    const image = screen.getByRole("img", { name: /album cover/i });
    expect(image).toBeTruthy();
  });

  it("renders placeholder when no album is provided", () => {
    render(<Album album={null} handleToggleFave={() => {}} />);
    const placeholder = screen.getByTestId("album-placeholder");
    expect(placeholder).toBeTruthy();
  });

  it("calls handleToggleFave when heart icon is clicked", () => {
    const handleToggleFave = vi.fn();
    const album = { cover: "test-cover.jpg", isFavourite: false };
    render(<Album album={album} handleToggleFave={handleToggleFave} />);

    const heartIcon = screen.getByTestId("favourite-heart");
    fireEvent.click(heartIcon);
    expect(handleToggleFave).toHaveBeenCalledTimes(1);
  });
});
