/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import HeroesPages from "./mocks/json/HeroesPages.json";

// Note network requests are intercepted and handled in src\mocks\handlers.js

// Validates all the images and names on the page
const validatePage = async (page) => {
  let HeroesPage = HeroesPages[page];
  for (let i = 0; i < HeroesPage.length; i++) {
    const image = await waitFor(() =>
      screen.getByAltText(`${HeroesPage[i].name}`)
    );
    expect(image.src).toContain(HeroesPage[i].imageUrl);
    screen.getByText(HeroesPage[i].name);
  }
};

/**
 * Loads the dashboard
 * Validates all the images and names on the page
 */
test("Load dashboard", async () => {
  render(<App />);
  await validatePage(0);
});
