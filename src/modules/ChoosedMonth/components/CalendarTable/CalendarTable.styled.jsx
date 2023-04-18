import styled from '@emotion/styled';

export const StyledTd = styled.td`
  position: relative;
  width: 155px;
  height: 125px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  .today {
    color: white;
    background-color: #3e85f3;
  }
`;
export const StyledDay = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;

  border-radius: 50%;
  padding: 2px;
`;
export const StyledListTasks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  li {
    border-radius: 8px;
    padding: 2px 8px;
  }
  .low {
    background-color: #ceeefd;
    color: #3e85f3;
  }
`;
