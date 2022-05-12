import styled from "styled-components";

const MAXIMUM_MOBILE_WIDTH = '801px';

export const HeroDetailContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MAXIMUM_MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

export const HeroDetailColumn = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 2%;
  width: 25%;
  padding-bottom: 12px;

  @media (max-width: ${MAXIMUM_MOBILE_WIDTH}) {
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
  }
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
