import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import HeroesPages from "./mocks/json/HeroesPages.json";

const validatePage = async (page) => {
  let HeroesPage = HeroesPages[page];
  for (let i = 0; i < HeroesPage.length; i++) {
    const image = await waitFor(() =>
      screen.getByAltText(
        `Image of ${HeroesPage[i].name}`
      )
    );
    expect(image.src).toContain(HeroesPage[i].imageUrl);
    screen.getByText(HeroesPage[i].name);
  }
};

test("Load first page", async () => {
  render(<App />);
  await validatePage(0);
});
