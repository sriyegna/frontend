import { createContext, useEffect, useReducer, useState } from "react";

const HeroesContext = createContext();

/**
 *
 * @param {*} state - current context state/value
 * @param {*} action - triggering event object
 * @returns context state/value
 */
function HeroReducer(state, action) {
  const { type, data } = action;

  switch (type) {
    case "setData":
      return {
        ...state,
        ...data,
      };
    case "setNumOfPages":
      return {
        ...state,
        numOfPages: data,
      };
    default:
      return state;
  }
}

function HeroesProvider({ children }) {
  const [state, dispatch] = useReducer(HeroReducer, {
    heroes: null,
    numOfPages: 0,
  });
  const [currentPage, setCurrentPage] = useState(0);

  const fetchHeroes = () => {
    fetch(
      "http://localhost:8080/api/v1/characters?" +
        new URLSearchParams({ page: currentPage })
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "setData", data: { heroes: data } }));
  };

  const fetchPages = () => {
    fetch("http://localhost:8080/api/v1/characters/pages")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "setNumOfPages", data }));
  };

  useEffect(() => {
    fetchHeroes();
  }, [currentPage]);

  useEffect(() => {
    // If no heroes, fetch from API
    if (!state.heroes) {
      fetchPages();
    }
  }, []);

  return (
    <HeroesContext.Provider
      value={{ state, dispatch, setCurrentPage, currentPage }}
    >
      {children}
    </HeroesContext.Provider>
  );
}

export { HeroesContext, HeroesProvider };
