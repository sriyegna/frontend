import { BackDrop, StyledDialog } from "./index.styled";
import HeroDetail from "../HeroDetail/HeroDetail";

const HeroDetailsDialog = ({ isOpen, handleClose, id }) => {
  return (
    isOpen && (
      <>
        <BackDrop onClick={() => handleClose()} />
        <StyledDialog>
          <HeroDetail id={id} />
        </StyledDialog>
      </>
    )
  );
};

export default HeroDetailsDialog;
