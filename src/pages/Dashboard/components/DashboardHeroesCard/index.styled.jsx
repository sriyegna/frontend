import styled from "styled-components";

export const DashboardHeroesCardContainer = styled.div`
  display: flex;
  width: calc(100% * (1 / 6) - 1px);
`;

export const DashboardHeroesCardStyles = styled.div`
  margin: 5px 5px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
`;

export const DashboardHeroesCardImage = styled.img`
  width: 50%;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;
