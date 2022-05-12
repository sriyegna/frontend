import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const StyledDialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding-top: 8px;
`;
