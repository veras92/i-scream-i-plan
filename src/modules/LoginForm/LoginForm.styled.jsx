import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.25rem;

  background-color: #dcebf7;

  @media screen and (min-width: 1200px) {
    background: url(../../shared/images/GooseImg/goose-rocket/goose-rocket.png),
      url(), #dcebf7;
    background-repeat: no-repeat;
    background-position-x: calc(50% + (480px / 2) + (368px / 2) + 52px),
      calc(50% + (480px / 2) + (207px / 2) + 156px);
    background-position-y: calc(50% + 212px - 66px),
      calc(50% + 212px - 66px - (717px / 2) + (174px / 2) + 76px);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 480px;

  & > a {
    position: relative;
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: var(--main-blue-color);

    &:before {
      position: absolute;
      bottom: 0;
      left: 0;

      content: '';
      width: 100%;
      height: 1px;
      background-color: var(--main-blue-color);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  padding: 40px 24px;
  margin-bottom: 1.125rem;

  background-color: #fff;
  border-radius: 8px;

  @media (min-width: 576px) {
    padding: 40px;
  }
`;

export const FormTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;

  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  margin-bottom: 0.5rem;
`;

export const Svg = styled.svg`
  fill: transparent;
  stroke: #ffffff;

  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;
  padding: 14px;
  margin-top: 0.5rem;

  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: #fff;

  &:hover ${Svg} {
    animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;
