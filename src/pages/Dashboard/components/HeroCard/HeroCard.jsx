import { useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import HeroDetail from "../HeroDetail/HeroDetail";
import {
  DashboardHeroesCardStyles,
  DashboardHeroesCardImage,
  DashboardHeroesCardContainer,
} from "./index.styled";

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
      <Dialog open={open} onClose={handleClose} maxWidth={"md"}>
        <DialogContent>
          <HeroDetail id={id} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroCard;
