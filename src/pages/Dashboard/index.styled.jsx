import React from 'react';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardHeroesContainer = styled.div`
  display: inline-grid;
  grid-template-areas: 'heroCard';
  grid-gap: 5px;
  grid-auto-flow: column;
`;

export const DashboardHeroesCard = styled.div`
  display: flex;
  flex-direction: column;
`;