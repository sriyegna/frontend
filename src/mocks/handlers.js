import { rest } from "msw";
import HeroesPages from "./json/HeroesPages.json";
import CharacterData from "./json/CharacterData.json";

// Handlers to intercept REST requests
export const handlers = [
  // Intercept individual character GET request
  rest.get(
    `http://localhost:8080/api/v1/characters/${CharacterData.id}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(CharacterData));
    }
  ),
  // Intercept individual characters page REST request
  rest.get("http://localhost:8080/api/v1/characters", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    return res(ctx.status(200), ctx.json(HeroesPages[page]));
  }),
  // Intercept number of characters pages REST request
  rest.get("http://localhost:8080/api/v1/characters/pages", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(HeroesPages.length));
  }),
];
