import {
  DashboardHeroesCardStyles,
  DashboardHeroesCardImage,
  DashboardHeroesCardContainer,
} from "./index.styled";

const DashboardHeroesCard = ({ name, imageUrl }) => {
  return (
    <DashboardHeroesCardContainer>
      <DashboardHeroesCardStyles>
        <DashboardHeroesCardImage src={imageUrl} />
        <span>{name}</span>
      </DashboardHeroesCardStyles>
    </DashboardHeroesCardContainer>
  );
};

export default DashboardHeroesCard;
