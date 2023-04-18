import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;

  padding: 14px 0px;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
`;
export const StyledItem = styled.li`
  color: ${props =>
    props.item === 'SAT' || props.item === 'SUN'
      ? 'var(--main-blue-color);'
      : props.theme.calendarHeadDate};

  .full-name {
    display: block;
  }
  .short-name {
    display: none;
  }

  @media (max-width: 480px) {
    .full-name {
      display: none;
    }

    .short-name {
      display: block;
    }
  }
`;
