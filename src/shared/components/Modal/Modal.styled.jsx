import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;

  padding: 40px 28px;

  background: ${props => props.theme.bcgPrimary};
  border: 1px solid rgba ${props => props.theme.disabled};
  box-shadow: 0px 4px 16px rgba ${props => props.theme.reviewsText};
  border-radius: 8px;
`;

export const Button = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 20px;
  height: 20px;

  border: 1px solid transparent;
  background-color: transparent;

  cursor: pointer;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  padding: 3px;
  border-radius: 50%;

  fill: ${props => props.theme.text};
  transition: backgrond-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(17, 17, 17, 0.1);
  }
`;
