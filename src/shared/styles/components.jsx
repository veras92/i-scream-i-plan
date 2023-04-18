import styled from '@emotion/styled/macro';
import facepaint from 'facepaint';

import { BREAKPOINTS } from 'shared/services/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const Svg = styled.svg`
  fill: transparent;
  stroke: ${props => props.theme.componentPrimary};

  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  ${media({
    width: ['18px', '18px', '20px', '20px'],
    height: ['18px', '18px', '20px', '20px'],
  })};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;

  width: ${props => props.width || ''};
  margin-top: 0.5rem;

  background-color: ${props => props.theme.componentAccent};
  box-shadow: 4px 2px 16px ${props => props.theme.btnShadow};
  border-radius: 16px;

  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: ${props => props.theme.componentPrimary};

  &:hover ${Svg} {
    animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  padding: 14px 28px;
  @media (min-width: 765px) {
    padding: 16px 23px;
  }
`;

export const MainWrapper = styled.div`
  background-color: ${props => props.theme.bcgSecondary};
  ${media({
    padding: [
      '24px 20px 40px',
      '24px 20px 40px',
      '24px 32px 42px',
      '40px 32px 32px',
    ],
  })};
`;
