import React, { useContext } from "react";
import { HeroesContext } from "../../context/heroes";
import { DashboardContainer, DashboardHeroesContainer } from "./index.styled";
import DashboardHeroesCard from "./components/DashboardCard/DashboardHeroesCard";
import Paginator from "./components/Paginator/Paginator";

const Dashboard = () => {
  const {
    state: { heroes, numOfPages },
  } = useContext(HeroesContext);

  return (
    <DashboardContainer>
      {heroes && heroes.length > 0 ? (
        <Paginator itemsPerPage={18} numOfPages={numOfPages} dispatch>
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
        </Paginator>
      ) : (
        <div>loading</div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
