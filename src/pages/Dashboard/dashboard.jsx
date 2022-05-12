import { useContext } from "react";
import { HeroesContext } from "../../context/heroes";
import {
  DashboardContainer,
  DashboardHeroesContainer,
  LeftAlignedTitle,
} from "./index.styled";
import DashboardHeroesCard from "./components/HeroCard/HeroCard";
import Paginator from "./components/Paginator/Paginator";

const Dashboard = () => {
  const {
    state: { heroes, numOfPages },
    currentPage,
    setCurrentPage,
  } = useContext(HeroesContext);

  return (
    <DashboardContainer>
      {heroes && heroes.length > 0 ? (
        <>
          <LeftAlignedTitle>All Heroes</LeftAlignedTitle>
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
          <Paginator
            currentPage={currentPage}
            numOfPages={numOfPages}
            handlePageChange={(value) => setCurrentPage(value)}
          />
        </>
      ) : (
        <div>loading</div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
