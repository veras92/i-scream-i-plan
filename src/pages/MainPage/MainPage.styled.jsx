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

//Slider mostly
export const Svg = styled.svg`
  fill: transparent;
  stroke: #0c0000;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* 
  &:hover,
  &:focus {
    stroke: rgba(17, 17, 17, 0.1);
  } */
`;

export const ArrowLeft = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: -50%;
  right: 49%;
  transform: translateX(-50%);
`;

export const ArrowRight = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: -50%;
  left: 51%;
  transform: translateX(-50%);
  margin-left: 24px;
`;

export const SliderContainer = styled.div`
  width: 580px;
  height: 187px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  padding: 32px;
  height: 187px;
  margin-right: 24px;
  display: flex;
  column-gap: 18px;
  position: relative;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  max-width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const Comment = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  /* or 129% */

  color: rgba(17, 17, 17, 0.7);
  margin-top: 24px;
`;

export const Name = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  margin-bottom: 13px;

  color: #343434;
`;
