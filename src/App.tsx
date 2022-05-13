/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { HeroesProvider } from "./context/heroes";
import Dashboard from "./pages/Dashboard/dashboard";
import "./App.css";

/**
 * @returns HeroesProvider wrapped App
 */
function App() {
  return (
    <div className="App">
      <HeroesProvider>
        <Dashboard />
      </HeroesProvider>
    </div>
  );
}

export default App;
