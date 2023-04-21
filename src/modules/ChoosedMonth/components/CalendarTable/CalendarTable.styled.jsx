import styled from '@emotion/styled';

export const StyledTable = styled.table`
  border-spacing: 0;
  border-style: hidden;

  height: 470px;

  width: 100%;

  border-radius: 8px;
  background-color: ${props => props.theme.bcgTernary};

  box-shadow: 0 0 0 1px ${props => props.theme.calendarTableBorder};

  @media (min-width: 768px) {
    height: 720px;
  }
  @media (min-width: 1440px) {
    height: 625px;
  }
`;

export const OverflowWrapper = styled.div`
  max-height: 472px;
  overflow-y: auto;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  @media (min-width: 768px) {
    max-height: 722px;
  }
  @media (min-width: 1440px) {
    max-height: 627px;
  }
`;
