import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import facepaint from 'facepaint';

import { BREAKPOINTS } from 'shared/services/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

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

export const StyledNumber = styled.span`
  font-weight: 700;
  font-size: 80px;
  line-height: 1;
  letter-spacing: -4px;
  color: ${props => props.theme.componentAccent};
  margin-bottom: 14px;
  @media (min-width: 765px) {
    font-size: 104px;
  }
`;

export const StyledLabel = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  border-radius: 44px;
  padding: 8px 18px;
  margin-bottom: 8px;

  background-color: ${props => props.theme.bcgHomepage};
  color: ${props => props.theme.componentAccent};

  @media (min-width: 765px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledTitleText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  color: ${props => props.theme.homepageTitle};

  @media (min-width: 765px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const TitleWrapper = styled.h2`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 14px;

  @media (min-width: 765px) {
    margin-bottom: 24px;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: ${props => props.theme.homepageTitle};
  margin-bottom: 40px;

  ${media({
    marginBottom: ['40px', '40px', '48px', '0'],
  })};
`;

export const HomepageContainer = styled.div`
  ${media({
    padding: ['64px 20px', '64px 20px', '64px 32px', '64px 128px'],
  })};
`;

export const StyledBlock = styled.li`
  margin-bottom: 64px;
  @media (min-width: 765px) {
    display: flex;
    flex-direction: column;
    :nth-of-type(2) {
      & div:nth-child(1) {
        margin-left: auto;
      }
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 228px;
    justify-content: flex-end;
    :nth-of-type(2) {
      flex-direction: row-reverse;
      align-items: flex-start;
      & div:nth-child(1) {
        margin-left: 0;
    }
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: 765px) {
    max-width: 275px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const ReviewsTitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.15;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;

  color: ${props => props.theme.componentAccent};
  @media (min-width: 765px) {
    font-size: 44px;
    margin-bottom: 50px;
  }
`;
//Slider mostly
export const Svg = styled.svg`
  fill: transparent;
  stroke: #0c0000;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ArrowLeft = styled.button`
  border: none;

  background-color: transparent;
  position: absolute;
  padding: 0 10px;
  right: 50%;
`;

export const ArrowRight = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  padding: 0 10px;
  top: 100%;
  left: 50%;
`;

export const ColorContainer = styled.div`
  @media (min-width: 1440px) {
    padding: 0 12px;
  }
`;

export const MainContainerSlider = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 335px;
  height: 100%;
  position: relative;

  @media (min-width: 768px) {
    width: 580px;
  }
  @media (min-width: 1440px) {
    width: 1208px;
  }
`;

export const SliderContainer = styled.div`
  width: 335px;
  height: 234px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  padding: 24px;
  margin: 0;

  @media (min-width: 768px) {
    width: 580px;
    height: 190px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  column-gap: 18px;
`;

export const ImgContainer = styled.div`
  width: 50px;
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

  color: ${props => props.theme.reviewsText};
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-left: 68px;
  }
`;

export const Name = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;

  margin-bottom: 13px;

  color: ${props => props.theme.homepageTitle};
`;
