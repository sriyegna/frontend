/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import {
  DashboardHeroesCardStyles,
  DashboardHeroesCardImage,
  DashboardHeroesCardContainer,
} from "./index.styled";
import Dialog from "../Dialog/Dialog";
import HeroDetail from "../HeroDetail/HeroDetail";

/**
 * Renders the content of the DashboardHeroesCard in Dashboard
 * Creates a modal dialog containing HeroDetails that can be opened on card click
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
      <DashboardHeroesCardContainer>
        <DashboardHeroesCardStyles onClick={handleOpen}>
          <DashboardHeroesCardImage src={imageUrl} alt={`${name}`} />
          <h6>{name}</h6>
        </DashboardHeroesCardStyles>
      </DashboardHeroesCardContainer>
      <Dialog isOpen={open} handleClose={handleClose}>
        <HeroDetail id={id} />
      </Dialog>
    </>
  );
};

export default DashboardHeroesCard;
