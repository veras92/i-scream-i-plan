import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const StyledLink = styled(NavLink)`
  color: ${props => props.theme.text};
  width: 185px;
  
  font-weight: 600;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  &.active {
    color: ${props => props.theme.activeText};
    background-color: ${props => props.theme.bcgFocus};

    & > svg {
      fill: transparent;
      stroke: ${props => props.theme.activeText};
    }
  }

  @media (min-width: 765px) {
    font-size: 16px;
    padding: 16px 20px;
    width: 225px;
  }

  @media (min-width: 1087px) {
    width: 241px;
  }
`;

export const NavIcon = styled.svg`
  fill: transparent;
  stroke: ${props => props.theme.text};

  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (min-width: 765px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;
