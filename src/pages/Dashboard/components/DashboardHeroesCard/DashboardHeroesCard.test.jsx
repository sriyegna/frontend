/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import DashboardHeroesCard from "./DashboardHeroesCard";
import Hero from "../../../../mocks/json/Hero.json";

/**
 * Renders an individual Hero Card visible in the dashboard
 * Validates the image and hero name
 */
test("Loads individual hero card", async () => {
  render(
    <DashboardHeroesCard
      name={Hero.name}
      imageUrl={Hero.imageUrl}
      id={Hero.id}
    />
  );

  expect(screen.getByText(Hero.name));

  const image = screen.getByAltText(`${Hero.name}`);
  expect(image.src).toContain(Hero.imageUrl);
});
