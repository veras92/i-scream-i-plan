import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  background-color: ${props => props.theme.PeriodTypeSelect};

  border-radius: 0px 8px 8px 0px;

  &.active {
    background-color: ${props => props.theme.PeriodTypeSelectDisabled};
  }
  &:first-of-type {
    padding: 8px 16px;
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    padding: 8px 25px;
    border-radius: 0 8px 8px 0;
  }

  @media (min-width: 768px) {
    &:last-child {
      padding: 8px 26px;
    }
  }
`;
export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.activeText};
`;
