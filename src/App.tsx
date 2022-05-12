import { HeroesProvider } from "./context/heroes";
import Dashboard from "./pages/Dashboard/dashboard";
import "./App.css";

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
