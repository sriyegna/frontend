import React, {useContext} from 'react';
import { HeroesContext } from '../../context/heroes';
import { DashboardContainer, DashboardHeroesContainer, DashboardHeroesCard } from './index.styled';

const Dashboard = () => {
  const { state: { heroes } } = useContext(HeroesContext);

  return <DashboardContainer>
    {heroes && heroes.length > 0 ?
      <DashboardHeroesContainer>
        {heroes.map(hero => <DashboardHeroesCard><img src={hero.imageUrl}/><span>{hero.name}</span></DashboardHeroesCard>)}
      </DashboardHeroesContainer>
    : <div>loading</div>}
  </DashboardContainer>
};

export default Dashboard;