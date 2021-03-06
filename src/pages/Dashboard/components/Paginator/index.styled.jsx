import styled from "styled-components";

export const PaginationButton = styled.button`
  font-size: 1.5em;
  margin: 0 10px;
  text-decoration: none;
  color: grey;
  border: none;
  background: none;
`;

export const ActivePaginationButton = styled.button`
  font-size: 1.5em;
  margin: 0 10px;
  text-decoration: none;
  color: black;
  border: none;
  border-radius: 10px;
  min-width: 40px;
`;

export const PaginationNavigationButton = styled.button`
  color: black;
  border: none;
  background: none;
`;

export const PaginationNavigationButtonImage = styled.img`
  position: relative;
  top: 50%;
  transform: translateY(-25%);
  filter: invert(45%) sepia(0%) saturate(1586%) hue-rotate(263deg)
    brightness(113%) contrast(75%);
`;
