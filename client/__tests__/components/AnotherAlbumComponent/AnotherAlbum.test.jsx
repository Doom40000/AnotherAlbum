import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AnotherAlbum from "../../../src/components/AnotherAlbumComponent/AnotherAlbum";

describe("AnotherAlbum Component", () => {
  it("renders the button to fetch a new album when no album is provided", () => {
    render(
      <AnotherAlbum
        album={null}
        setAlbum={vi.fn()}
        setFavourite={vi.fn()}
        handleToggleFave={vi.fn()}
      />
    );

    const button = screen.getByText("Hit me with an album!");
    expect(button).toBeTruthy();
  });

  it("renders album information and the 'AnotherAlbum?' button when an album is provided", () => {
    const mockAlbum = {
      id: "1",
      albumName: "Test Album",
      artist: "Test Artist",
    };
    render(
      <AnotherAlbum
        album={mockAlbum}
        setAlbum={vi.fn()}
        setFavourite={vi.fn()}
        handleToggleFave={vi.fn()}
      />
    );

    const button = screen.getByText("AnotherAlbum?");
    const albumName = screen.getByText(`Album: ${mockAlbum.albumName}`);
    const artistName = screen.getByText(`Artist: ${mockAlbum.artist}`);

    expect(button).toBeTruthy();
    expect(albumName).toBeTruthy();
    expect(artistName).toBeTruthy();
  });
});
