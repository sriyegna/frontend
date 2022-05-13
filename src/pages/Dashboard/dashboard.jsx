/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { useContext } from "react";
import { HeroesContext } from "../../context/heroes";
import {
  DashboardContainer,
  DashboardHeroesContainer,
  LeftAlignedTitle,
} from "./index.styled";
import DashboardHeroesCard from "./components/DashboardHeroesCard/DashboardHeroesCard";
import Paginator from "./components/Paginator/Paginator";

/**
 * Retrieves data from HeroesContext
 * Creates the Heroes List and the Paginator component
 * @returns {ReactElement} Dashboard React Component
 */
const Dashboard = () => {
  const {
    state: { heroes, numOfPages, currentPage },
    dispatch,
  } = useContext(HeroesContext);

  const setCurrentPage = (page) => {
    dispatch({ type: "setCurrentPage", data: page });
  };

  return (
    <DashboardContainer>
      {heroes && heroes.length > 0 ? (
        <>
          <LeftAlignedTitle>All Heroes</LeftAlignedTitle>
          <DashboardHeroesContainer>
            {/* {Map over the heroes that have been loaded in the context} */}
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
            handlePageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <div>loading</div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
