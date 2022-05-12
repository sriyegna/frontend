import styled from "styled-components";

const MAXIMUM_MOBILE_WIDTH = "801px";

export const HeroDetailContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MAXIMUM_MOBILE_WIDTH}) {
    flex-direction: column;
    padding: 18px;
  }
`;

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
