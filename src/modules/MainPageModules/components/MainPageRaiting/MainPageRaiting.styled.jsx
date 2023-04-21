import styled from '@emotion/styled/macro';

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
