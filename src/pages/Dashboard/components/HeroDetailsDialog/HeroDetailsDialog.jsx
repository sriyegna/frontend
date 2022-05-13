/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { BackDrop, StyledDialog } from "./index.styled";
import HeroDetail from "../HeroDetail/HeroDetail";

/**
 * Dialog component that can be set to open when isOpen = true
 * Will create a grey background overlay and a dialog on top
 * Clicking on the grey background will close the dialog and overlay
 * @param {Object} props - Component properties
 * @param {Boolean} props.isOpen - True if we should show the dialog
 * @param {Function} props.handleClose - Handler to close the dialog and overlay
 * @param {Number} props.id - id number of the hero
 * @returns {ReactElement} HeroDetailsDialog React Component
 */
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
