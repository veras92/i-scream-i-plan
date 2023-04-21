import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.componentAccent};
  padding: 88px 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 142px;
  height: 142px;

  @media (min-width: 765px) {
    width: 150px;
    height: 150px;
  }
`;

export const AppTitle = styled.h1`
  font-family: Coolvetica;
  font-weight: 400;
  font-style: italic;
  font-size: 44px;
  line-height: 1.1;
  margin-bottom: 32px;
  text-align: center;

  color: ${props => props.theme.componentPrimary};

  @media (min-width: 765px) {
    font-size: 120px;
    line-height: 1.25;
    margin-bottom: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  justify-content: space-between;

  @media (min-width: 765px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const SignUpBtn = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: ${props => props.theme.componentPrimary};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media (min-width: 765px) {
    font-size: 14px;
  }
`;

export const ButtonSvg = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${props => props.theme.componentAccent};

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
export const LogInBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;

  background-color: ${props => props.theme.componentPrimary};
  box-shadow: 4px 2px 16px ${props => props.theme.btnShadow};
  border-radius: 16px;

  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: ${props => props.theme.componentAccent};
  margin-bottom: 208px;
  padding: 14px 34px;

  @media (min-width: 765px) {
    padding: 16px 28px;
    margin-bottom: 0;
  }
  &:hover ${ButtonSvg} {
    animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;
