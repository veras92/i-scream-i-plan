import styled from '@emotion/styled';

export const StyledAddTaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bcgFocus};
  border: 1px dashed ${props => props.theme.componentAccent};
  border-radius: 8px;

  width: 100%;
  padding: 12px 0;

  @media (min-width: 765px) {
    padding: 14px 0;
  }
`;

export const AddTaskSvg = styled.svg`
  fill: transparent;
  stroke: ${props => props.theme.text};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
