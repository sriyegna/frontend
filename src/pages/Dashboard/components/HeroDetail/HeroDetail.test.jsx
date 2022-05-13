/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { render, waitFor, screen } from "@testing-library/react";
import HeroDetail from "./HeroDetail";
import CharacterData from "../../../../mocks/json/CharacterData.json";

/**
 * Loads hero details dialog
 * Checks the detailed information of the hero
 */
test("loads hero details", async () => {
  render(<HeroDetail id={CharacterData.id} />);

  await waitFor(() => screen.getByText(`Hero Name: ${CharacterData.name}`));
  expect(screen.getByText(`Real Name: ${CharacterData.realName}`));
  expect(screen.getByText(`Alignment: ${CharacterData.alignment}`));

  expect(screen.getByText(`Gender: ${CharacterData.appearance.gender}`));
  expect(screen.getByText(`Race: ${CharacterData.appearance.race}`));
  expect(screen.getByText(`Height: ${CharacterData.appearance.height}`));
  expect(screen.getByText(`Weight: ${CharacterData.appearance.weight}`));

  expect(
    screen.getByText(`Alter Egos / Alias: ${CharacterData.biography.alterEgos}`)
  );
  expect(
    screen.getByText(`Place of birth: ${CharacterData.biography.placeOfBirth}`)
  );
  expect(
    screen.getByText(
      `First Appearance: ${CharacterData.biography.firstAppearance}`
    )
  );
  expect(screen.getByText(`Occupation: ${CharacterData.biography.occupation}`));

  expect(screen.getByText(`Combat: ${CharacterData.stats.combat}`));
  expect(screen.getByText(`Durability: ${CharacterData.stats.durability}`));
  expect(screen.getByText(`Intelligence: ${CharacterData.stats.intelligence}`));
  expect(screen.getByText(`Power: ${CharacterData.stats.power}`));
  expect(screen.getByText(`Speed: ${CharacterData.stats.speed}`));
  expect(screen.getByText(`Strength: ${CharacterData.stats.strength}`));
});
