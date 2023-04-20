import styled from '@emotion/styled/macro';
import facepaint from 'facepaint';
import { BREAKPOINTS } from 'shared/services/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const LogoTitle = styled.h2`
  font-family: Coolvetica;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.componentAccent};

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 289px;
  padding: 24px 32px;
  background-color: ${props => props.theme.bcgPrimary};
  @media (max-width: 1439px) {
    position: absolute;
    z-index: 5000;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  ${media({
    marginBottom: ['64px', '64px', '50px', '32px'],
  })};
`;

export const GooseImg = styled.img`
  margin-right: 6px;

  ${media({
    width: ['36px', '36px', '60px', '71px'],
    height: ['35px', '35px', '58px', '68px'],
  })};
`;

export const CloseIcon = styled.svg`
  fill: ${props => props.theme.text};

  margin-left: auto;
  height: 24px;
  width: 24px;

  @media (min-width: 765px) {
    height: 33px;
    width: 33px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SidebarSubTitle = styled.h3`
  color: ${props => props.theme.textSecondary};
  font-weight: 600;
  line-height: 1.2;
  font-size: 12px;
  margin-bottom: 24px;

  @media (min-width: 765px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;
