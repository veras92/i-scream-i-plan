import styled from '@emotion/styled';

export const ColumnTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + button {
    margin-top: 35px;
  }

  & + ul {
    margin-top: 24px;
    @media (min-width: 765px) {
      margin-top: 35px;
    }
  }
`;

export const ColumnTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  color: ${props => props.theme.text};

  @media (min-width: 765px) {
    font-size: 20px;
  }
`;

export const AddButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const StyledAddIcon = styled.svg`
  fill: transparent;
  stroke: ${props => props.theme.text};
  width: 22px;
  height: 22px;

  @media (min-width: 765px) {
    height: 24px;
    width: 24px;
  }
`;
