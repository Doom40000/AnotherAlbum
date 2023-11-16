import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Favourites from '../../../src/components/FavouritesComponent/Favourites';
import mockFavourites from './favourites-mock-data'

describe("Favourites Component", () => {
  it("should render 'You have no saved favourites.' if favourites list is empty", () => {
    render(<Favourites favourites={mockFavourites.noFavourites}/>);
    expect(screen.getByText("You have no saved favourites.")).toBeTruthy();
  });

  it("should render 'Here is your favourite!' if favourites list has one entry", () => {
    render(<Favourites favourites={mockFavourites.oneFavourite}/>);
    expect(screen.getByText("Here is your favourite!")).toBeTruthy();
  });

  it("should render 'Here are your favourites!' if favourites list has more than one entry", () => {
    render(<Favourites favourites={mockFavourites.multipleFavourites}/>);
    expect(screen.getByText("Here are your favourites!")).toBeTruthy();
  });

  it("should render scrollbar if favourites list has more than three entries", () => {
    const {rerender} = render(<Favourites favourites={mockFavourites.multipleFavourites}/>);
    expect(screen.getByTestId("favourites-container").classList.contains('showScrollBar')).toBe(true);

    rerender(<Favourites favourites={mockFavourites.oneFavourite}/>);
    expect(screen.getByTestId("favourites-container").classList.contains('showScrollBar')).toBe(false);
  });

  it("should render a list of favourite albums", () => {
    const {rerender} = render(<Favourites favourites={mockFavourites.multipleFavourites}/>);
    expect(screen.getByTestId("favourites-container").children.length).toBe(mockFavourites.multipleFavourites.length);

    rerender(<Favourites favourites={mockFavourites.noFavourites}/>);
    expect(screen.getByTestId("favourites-container").children.length).toBe(0);
  })
});