import React, { useContext } from "react";
import { HeroesContext } from "../../context/heroes";
import { DashboardContainer, DashboardHeroesContainer } from "./index.styled";
import DashboardHeroesCard from "./components/DashboardCard/DashboardHeroesCard";

const Dashboard = () => {
  const {
    state: { heroes },
  } = useContext(HeroesContext);

  return (
    <DashboardContainer>
      {heroes && heroes.length > 0 ? (
        <DashboardHeroesContainer>
          {heroes.map((hero) => (
            <DashboardHeroesCard
              key={hero.id}
              name={hero.name}
              imageUrl={hero.imageUrl}
              id={hero.id}
            />
          ))}
        </DashboardHeroesContainer>
      ) : (
        <div>loading</div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
