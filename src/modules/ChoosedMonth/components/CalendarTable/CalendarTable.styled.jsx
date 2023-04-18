import styled from '@emotion/styled';

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border-style: hidden;

  margin-top: 14px;

  height: 470px;
  width: 100%;

  border-radius: 8px;

  box-shadow: 0 0 0 1px ${props => props.theme.calendarTableBorder};

  @media (min-width: 768px) {
    height: 720px;
  }
  @media (min-width: 1440px) {
    height: 625px;
  }
`;

export const StyledTd = styled.td`
  position: relative;
  width: 48px;
  height: 94px;
  border: 1px solid ${props => props.theme.calendarTableBorder};

  .today {
    color: white;
    background-color: #3e85f3;
  }

  @media (min-width: 768px) {
    height: 144px;
    width: 100px;
  }

  @media (min-width: 1440px) {
    height: 125px;
    width: 156px;
  }
`;
export const StyledDay = styled.p`
  position: absolute;
  top: 8px;
  right: 10px;

  padding: 4px 6px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: ${props => props.theme.calendarDate};

  border-radius: 6px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;
export const StyledListTasks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;

  li {
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;

    padding-top: 2px;
    padding-bottom: 2px;

    text-align: center;
    border-radius: 8px;
    width: 92%;
  }
  .low {
    background-color: #ceeefd;
    color: #3e85f3;
  }
  .medium {
    color: #f3b249;
    background-color: #fcf0d4;
  }
  .high {
    color: #ea3d65;
    background-color: #ffd2dd;
  }

  @media (min-width: 768px) {
    li {
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media (min-width: 1440px) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;
