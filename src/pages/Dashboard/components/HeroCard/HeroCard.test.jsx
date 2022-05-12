import { render, screen } from "@testing-library/react";
import HeroCard from "./HeroCard";

const hero = {
  id: 12,
  name: "Air-Walker",
  imageUrl:
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/12-air-walker.jpg",
};

test("loads individual hero card", async () => {
  render(<HeroCard name={hero.name} imageUrl={hero.imageUrl} id={hero.id} />);

  expect(screen.getByText(hero.name));

  const image = screen.getByAltText(`Image of ${hero.name}`);
  expect(image.src).toContain(hero.imageUrl);
});
