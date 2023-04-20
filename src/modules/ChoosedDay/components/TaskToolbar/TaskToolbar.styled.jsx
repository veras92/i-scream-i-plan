import styled from '@emotion/styled/macro';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 13px;

  &.active {
    stroke: blue;
  }
`;

export const TaskButton = styled.button`
  background-color: transparent;
  color: transparent;
`;

export const TaskAction = styled.svg`
  fill: transparent;
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.text};

  border-radius: 50%;
  width: 14px;
  height: 14px;
  cursor: pointer;
  &.active {
    stroke: #3e85f3;
  }
  @media (min-width: 765px) {
    width: 16px;
    height: 16px;
  }
`;

export const MoveButton = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  color: ${props => props.theme.textActions};
  background-color: transparent;
  border: none;

  @media (min-width: 765px) {
    font-size: 14px;
  }
`;

export const MoveAction = styled.svg`
  fill: transparent;
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.textActions};
  margin-left: 8px;

  border-radius: 50%;
  width: 14px;
  height: 14px;

  @media (min-width: 765px) {
    width: 16px;
    height: 16px;
  }
`;

export const MoveWrapper = styled.li`
  color: ${props => props.theme.textActions};
`;

export const PopUp = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${props => props.theme.bcgPrimary};
  border: 1px solid ${props => props.theme.disabledSecondary};
  border-radius: 8px;

  padding: 14px;
  z-index: 10;
  @media (min-width: 765px) {
    padding: 20px 24px;
  }
`;
