import { createContext, useEffect, useReducer } from 'react';

const HeroesContext = createContext();

/**
 * 
 * @param {*} state - current context state/value
 * @param {*} action - triggering event object
 * @returns context state/value
 */
function HeroReducer(state, action) {
  const { type, data } = action;
  switch(type) {
    case 'setData':
      return {
        ...state,
        ...data,
      };
    default:
      return state;
  }
}

function HeroesProvider({ children }) {
  const [state, dispatch] = useReducer(HeroReducer, {
    heroes: null,
  });

  useEffect(() => {
      // If no heroes, fetch from API
    if (!state.heroes) {
      fetch('http://localhost:8080/api/v1/characters')
        .then(response => response.json())
        .then(data => dispatch({type: 'setData', data: { heroes: data } }));
    }
  }, []);

  return <HeroesContext.Provider value={{ state, dispatch }}>
    {children}
  </HeroesContext.Provider>;
}

export { HeroesContext, HeroesProvider };