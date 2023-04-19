import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
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
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: ${props => props.theme.activeText};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
