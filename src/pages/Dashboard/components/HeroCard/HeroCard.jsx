import { useState } from "react";
import {
  DashboardHeroesCardStyles,
  DashboardHeroesCardImage,
  DashboardHeroesCardContainer,
} from "./index.styled";
import HeroDetailsDialog from "../HeroDetailsDialog/HeroDetailsDialog";

const HeroCard = ({ name, imageUrl, id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <DashboardHeroesCardContainer onClick={handleOpen}>
        <DashboardHeroesCardStyles>
          <DashboardHeroesCardImage src={imageUrl} alt={`Image of ${name}`} />
          <h6>{name}</h6>
        </DashboardHeroesCardStyles>
      </DashboardHeroesCardContainer>
      <HeroDetailsDialog id={id} isOpen={open} handleClose={handleClose} />
    </>
  );
};

export default HeroCard;
