import { useEffect, useState } from "react";
import {
  DashboardHeroesCardStyles,
  DashboardHeroesCardImage,
} from "../HeroCard/index.styled";
import {
  HeroDetailColumn,
  DashboardHeroCardHorizontalLine,
  CenteredH6,
} from "./index.styled";

const HeroDetail = ({ id }) => {
  const [characterData, setCharacterData] = useState(null);

  const Appearance = () => {
    const { appearance } = characterData || {};
    return (
      characterData && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Appearance</h2>
          {appearance.gender && <h6>Gender: {appearance.gender}</h6>}
          {appearance.race && <h6>Race: {appearance.race}</h6>}
          {appearance.height && <h6>Height: {appearance.height}</h6>}
          {appearance.weight && <h6>Weight: {appearance.weight}</h6>}
        </div>
      )
    );
  };

  const Biography = () => {
    const { biography } = characterData || {};
    return (
      characterData && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Biography</h2>
          {biography.alterEgo && <h6>Alter Egos: {biography.alterEgos}</h6>}
          {biography.placeOfBirth && (
            <h6>Place of Birth: {biography.placeOfBirth}</h6>
          )}
          {biography.firstAppearance && (
            <h6>First Appearance: {biography.firstAppearance}</h6>
          )}
          {biography.occupation && <h6>Occupation: {biography.occupation}</h6>}
        </div>
      )
    );
  };

  const Stats = () => {
    const { stats } = characterData || {};
    return (
      characterData && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Stats</h2>
          {stats.combat && <h6>Combat: {stats.combat}</h6>}
          {stats.durability && <h6>Durability: {stats.durability}</h6>}
          {stats.power && <h6>Power: {stats.power}</h6>}
          {stats.speed && <h6>Speed: {stats.speed}</h6>}
          {stats.strength && <h6>Strength: {stats.strength}</h6>}
        </div>
      )
    );
  };

  const Card = () => {
    return (
      characterData && (
        <DashboardHeroesCardStyles>
          <DashboardHeroesCardImage src={characterData.imageUrl} alt={`Image of ${characterData.name}`} />
          <DashboardHeroCardHorizontalLine />
          {characterData.name && (
            <CenteredH6>Hero Name: {characterData.name}</CenteredH6>
          )}
          {characterData.realName && (
            <CenteredH6>Real Name: {characterData.realName}</CenteredH6>
          )}
          {characterData.alignment && (
            <CenteredH6>Alignment: {characterData.alignment}</CenteredH6>
          )}
        </DashboardHeroesCardStyles>
      )
    );
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/characters/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacterData(data));
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <HeroDetailColumn>
          <Card />
        </HeroDetailColumn>
        <HeroDetailColumn>
          <Appearance />
        </HeroDetailColumn>
        <HeroDetailColumn>
          <Biography />
        </HeroDetailColumn>
        <HeroDetailColumn>
          <Stats />
        </HeroDetailColumn>
      </div>
    </>
  );
};

export default HeroDetail;
