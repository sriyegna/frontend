/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import {
  DashboardHeroesCardStyles,
  DashboardHeroesCardImage,
} from "../DashboardHeroesCard/index.styled";
import {
  HeroDetailColumn,
  HorizontalLine,
  CenteredH6,
  HeroDetailContainer,
  HeroDetailColumnContainer,
  HeroDetailInformationContainer,
} from "./index.styled";

/**
 * Renders the content of the Heroes Appearance in HeroDetails
 * @param {Object} props - Component properties
 * @param {Object} props.data - Reference to characterData.appearance
 * @returns {ReactElement} Appearance React Component
 */
const Appearance = ({ data }) => {
  return (
    data && (
      <HeroDetailColumnContainer>
        <h2>Appearance</h2>
        {data?.gender && <h6>Gender: {data.gender}</h6>}
        {data?.race && <h6>Race: {data.race}</h6>}
        {data?.height && <h6>Height: {data.height}</h6>}
        {data?.weight && <h6>Weight: {data.weight}</h6>}
      </HeroDetailColumnContainer>
    )
  );
};

/**
 * Renders the content of the Heroes Biography in HeroDetails
 * @param {Object} props - Component properties
 * @param {Object} props.data - Reference to characterData.biography
 * @returns {ReactElement} Biography React Component
 */
const Biography = ({ data }) => {
  return (
    data && (
      <HeroDetailColumnContainer>
        <h2>Biography</h2>
        {data?.alterEgos && <h6>Alter Egos / Alias: {data.alterEgos}</h6>}
        {data?.placeOfBirth && <h6>Place of birth: {data.placeOfBirth}</h6>}
        {data?.firstAppearance && (
          <h6>First Appearance: {data.firstAppearance}</h6>
        )}
        {data?.occupation && <h6>Occupation: {data.occupation}</h6>}
      </HeroDetailColumnContainer>
    )
  );
};

/**
 * Renders the content of the Heroes Stats in HeroDetails
 * @param {Object} props - Component properties
 * @param {Object} props.data - Reference to characterData.appearance
 * @returns {ReactElement} Stats React Component
 */
const Stats = ({ data }) => {
  return (
    data && (
      <HeroDetailColumnContainer>
        <h2>Stats</h2>
        {data?.combat && <h6>Combat: {data.combat}</h6>}
        {data?.durability && <h6>Durability: {data.durability}</h6>}
        {data?.intelligence && <h6>Intelligence: {data.intelligence}</h6>}
        {data?.power && <h6>Power: {data.power}</h6>}
        {data?.speed && <h6>Speed: {data.speed}</h6>}
        {data?.strength && <h6>Strength: {data.strength}</h6>}
      </HeroDetailColumnContainer>
    )
  );
};

/**
 * Renders the content of the HeroDetailCard in HeroDetails
 * @param {Object} props - Component properties
 * @param {Object} props.data - Reference to characterData
 * @returns {ReactElement} HeroDetailCard React Component
 */
const HeroDetailCard = ({ data }) => {
  return (
    data && (
      <DashboardHeroesCardStyles>
        {data?.imageUrl && (
          <DashboardHeroesCardImage
            src={data.imageUrl}
            alt={`${data.name}`}
          />
        )}
        <HorizontalLine />
        {data?.name && <CenteredH6>Hero Name: {data.name}</CenteredH6>}
        {data?.realName && <CenteredH6>Real Name: {data.realName}</CenteredH6>}
        {data?.alignment && (
          <CenteredH6>Alignment: {data.alignment}</CenteredH6>
        )}
      </DashboardHeroesCardStyles>
    )
  );
};

/**
 * Renders the content of the Hero Detail Dialog when given an ID
 * @param {Object} props - Component properties
 * @param {Number} props.id - id number of the hero
 * @returns {ReactElement} HeroDetail React Component
 */
const HeroDetail = ({ id }) => {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/characters/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacterData(data));
  }, []);

  return (
    <>
      <HeroDetailContainer>
        <HeroDetailColumn>
          <HeroDetailCard data={characterData} />
        </HeroDetailColumn>
        <HeroDetailInformationContainer>
          <HeroDetailColumn>
            <Appearance data={characterData?.appearance || {}} />
          </HeroDetailColumn>
          <HeroDetailColumn>
            <Biography data={characterData?.biography || {}} />
          </HeroDetailColumn>
          <HeroDetailColumn>
            <Stats data={characterData?.stats || {}} />
          </HeroDetailColumn>
        </HeroDetailInformationContainer>
      </HeroDetailContainer>
    </>
  );
};

export default HeroDetail;
