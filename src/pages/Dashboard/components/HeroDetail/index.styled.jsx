import styled from "styled-components";

const MAXIMUM_MOBILE_WIDTH = "768px";

/**
 * If in desktop view, show Hero Details horizontally
 * If in mobile view, show Hero Details vertically
 */
export const HeroDetailContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MAXIMUM_MOBILE_WIDTH}) {
    flex-direction: column;
    padding: 18px;
  }
`;

/**
 * If in desktop view, show Hero Details Information Text horizontally
 * If in mobile view, show Hero Details Information vertically in reverse order
 */
export const HeroDetailInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: ${MAXIMUM_MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

/**
 * If in desktop view, each Hero Detail Column should take up a quarter of the width (since it is horizontally drawn)
 * If in mobile view, each Hero Detail Column should take up the whole width (since it is vertically drawn)
 */
export const HeroDetailColumn = styled.div`
  display: flex;
  margin: 0 2%;
  width: 25%;
  padding-bottom: 12px;

  @media (max-width: ${MAXIMUM_MOBILE_WIDTH}) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const HeroDetailColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HorizontalLine = styled.hr`
  border: 1px solid black;
  opacity: 100%;
  width: 80%;
  margin: 0 auto 15px auto;
`;

export const CenteredH6 = styled.h6`
  text-align: center;
`;
