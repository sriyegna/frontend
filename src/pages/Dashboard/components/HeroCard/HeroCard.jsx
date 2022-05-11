import { useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import DashboardHeroesDetail from "../HeroDetail/HeroDetail";
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
          <DashboardHeroesCardImage src={imageUrl} />
          <span>{name}</span>
        </DashboardHeroesCardStyles>
      </DashboardHeroesCardContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={"xl"}
      >
        <DialogContent>
          <DashboardHeroesDetail id={id} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroCard;
