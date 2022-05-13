/* eslint-disable react/react-in-jsx-scope */
import { createContext, useEffect, useReducer } from "react";

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
  case "setCurrentPage":
    return {
      ...state,
      currentPage: data,
    };
  default:
    return state;
  }
}

/**
 *
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {ReactElement} HeroesProvider wrapper Component
 */
function HeroesProvider({ children }) {
  const [state, dispatch] = useReducer(HeroReducer, {
    heroes: null,
    numOfPages: 0,
    currentPage: 0,
  });

  const fetchHeroes = () => {
    fetch(
      "http://localhost:8080/api/v1/characters?" +
        new URLSearchParams({ page: state.currentPage })
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
  }, [state.currentPage]);

  useEffect(() => {
    // If no heroes, fetch from API
    if (!state.heroes) {
      fetchPages();
    }
  }, []);

  return (
    <HeroesContext.Provider value={{ state, dispatch }}>
      {children}
    </HeroesContext.Provider>
  );
}

export { HeroesContext, HeroesProvider };
