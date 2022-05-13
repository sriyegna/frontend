/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import {
  DashboardHeroesCardStyles,
  DashboardHeroesCardImage,
  DashboardHeroesCardContainer,
} from "./index.styled";
import HeroDetailsDialog from "../HeroDetailsDialog/HeroDetailsDialog";

/**
 * Renders the content of the DashboardHeroesCard in Dashboard
 * @param {Object} props - Component properties
 * @param {String} props.name - Name of the hero
 * @param {String} props.imageUrl - Url to image of the hero
 * @param {Number} props.id - Id of the hero
 * @returns {ReactElement} DashboardHeroesCard React Component
 */
const DashboardHeroesCard = ({ name, imageUrl, id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <DashboardHeroesCardContainer onClick={handleOpen}>
        <DashboardHeroesCardStyles>
          <DashboardHeroesCardImage src={imageUrl} alt={`${name}`} />
          <h6>{name}</h6>
        </DashboardHeroesCardStyles>
      </DashboardHeroesCardContainer>
      <HeroDetailsDialog id={id} isOpen={open} handleClose={handleClose} />
    </>
  );
};

export default DashboardHeroesCard;
