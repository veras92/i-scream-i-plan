import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviews, Rating } from './reviews';

import sprite from 'shared/icons/sprite.svg';
import m1 from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-view/goose-view-mob.png';
import m1Retina from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-view/goose-view-mob@2x.png';
import m2 from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-sidebar/goose-sidebar-mob.png';
import m2Retina from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-sidebar/goose-sidebar-mob@2x.png';
import m3 from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-one/goose-one-mob.png';
import m3Retina from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-one/goose-one-mob@2x.png';

import t1 from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-view/image.png';
import t1Retina from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-view/image@2x.png';
import t2 from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-sidebar/image.png';
import t2Retina from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-sidebar/image@2x.png';
import t3 from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-one/image.png';
import t3Retina from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-one/image@2x.png';

import d1 from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-view/goose-view-desk.png';
import d1Retina from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-view/goose-view-desk@2x.png';
import d2 from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-sidebar/goose-sidebar-desk.png';
import d2Retina from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-sidebar/goose-sidebar-desk@2x.png';
import d3 from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-one/goose-one-desk.png';
import d3Retina from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-one/goose-one-desk@2x.png';

import {
  Svg,
  ArrowLeft,
  ArrowRight,
  SliderContainer,
  ColorContainer,
  MainContainerSlider,
  ContainerTitle,
  ImgContainer,
  Avatar,
  Comment,
  Name,
  StyledHeader,
  LogoImg,
  AppTitle,
  ButtonWrapper,
  SignUpBtn,
  ButtonSvg,
  LogInBtn,
  StyledNumber,
  StyledLabel,
  StyledTitleText,
  TitleWrapper,
  StyledText,
  HomepageContainer,
  StyledBlock,
  InfoWrapper,
  StyledImg,
  ReviewsTitle,
} from './MainPage.styled';

import goose from 'shared/icons/goose.svg';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <ArrowRight onClick={onClick}>
      <Svg width="61" height="50">
        <use href={`${sprite}#icon-arrow-right`} />
      </Svg>
    </ArrowRight>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <ArrowLeft onClick={onClick}>
      <Svg width="61" height="50">
        <use href={`${sprite}#icon-arrow-left`} />
      </Svg>
    </ArrowLeft>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function MainPage() {
  return (
    <>
      <StyledHeader>
        <LogoImg src={goose} alt="goose" />
        <AppTitle>GooseTrack</AppTitle>
        <ButtonWrapper>
          <SignUpBtn to="/register">Sign up</SignUpBtn>
          <LogInBtn to="/login">
            Log in
            <ButtonSvg>
              <use href={`${sprite}#icon-Log-in`} />
            </ButtonSvg>
          </LogInBtn>
        </ButtonWrapper>
      </StyledHeader>
      <HomepageContainer>
        <main>
          <section>
            <ul>
              <StyledBlock>
                <InfoWrapper>
                  <TitleWrapper>
                    <StyledNumber>1.</StyledNumber>
                    <StyledLabel>Calendar</StyledLabel>
                    <StyledTitleText>View</StyledTitleText>
                  </TitleWrapper>
                  <StyledText>
                    GooseTrack's Calendar view provides a comprehensive overview
                    of your schedule, displaying all your tasks, events, and
                    appointments in a visually appealing and intuitive layout.
                  </StyledText>
                </InfoWrapper>
                <div>
                  <picture>
                    <source
                      srcSet={`${m1} 1x, ${m1Retina} 2x`}
                      media="(max-width: 764px)"
                    ></source>
                    <source
                      srcSet={`${t1} 1x, ${t1Retina} 2x`}
                      media="(max-width: 1439px)"
                    ></source>
                    <source
                      srcSet={`${d1} 1x, ${d1Retina} 2x`}
                      media="(min-width: 1440px)"
                    ></source>
                    <StyledImg src={d1} alt="schedule"></StyledImg>
                  </picture>
                </div>
              </StyledBlock>
              <StyledBlock>
                <InfoWrapper>
                  <TitleWrapper>
                    <StyledNumber>2.</StyledNumber>
                    <StyledTitleText>Sidebar</StyledTitleText>
                  </TitleWrapper>
                  <StyledText>
                    GooseTrack offers easy access to your account settings,
                    calendar, and filters. The "My Account" section allows you
                    to manage your profile information and preferences, while
                    the calendar provides a quick and convenient way to view
                    your upcoming events and tasks.
                  </StyledText>
                </InfoWrapper>
                <div>
                  <picture>
                    <source
                      srcSet={`${m2} 1x, ${m2Retina} 2x`}
                      media="(max-width: 764px)"
                    ></source>
                    <source
                      srcSet={`${t2} 1x, ${t2Retina} 2x`}
                      media="(max-width: 1439px)"
                    ></source>
                    <source
                      srcSet={`${d2} 1x, ${d2Retina} 2x`}
                      media="(min-width: 1440px)"
                    ></source>
                    <StyledImg src={d2} alt="sidebar"></StyledImg>
                  </picture>
                </div>
              </StyledBlock>
              <StyledBlock>
                <InfoWrapper>
                  <TitleWrapper>
                    <StyledNumber>3.</StyledNumber>
                    <StyledLabel>All in</StyledLabel>
                    <StyledTitleText>One</StyledTitleText>
                  </TitleWrapper>
                  <StyledText>
                    GooseTrack is an all-in-one productivity tool that helps you
                    stay on top of your tasks, events, and deadlines. Say
                    goodbye to scattered to-do lists and hello to streamlined
                    productivity with GooseTrack.
                  </StyledText>
                </InfoWrapper>
                <div>
                  <picture>
                    <source
                      srcSet={`${m3} 1x, ${m3Retina} 2x`}
                      media="(max-width: 764px)"
                    ></source>
                    <source
                      srcSet={`${t3} 1x, ${t3Retina} 2x`}
                      media="(max-width: 1439px)"
                    ></source>
                    <source
                      srcSet={`${d3} 1x, ${d3Retina} 2x`}
                      media="(min-width: 1440px)"
                    ></source>
                    <StyledImg src={d3} alt="Calendar"></StyledImg>
                  </picture>
                </div>
              </StyledBlock>
            </ul>
          </section>
        </main>
        <section>
          <ReviewsTitle>Reviews</ReviewsTitle>
          <MainContainerSlider>
            <Slider {...settings}>
              {reviews.map(review => (
                <ColorContainer>
                  <SliderContainer key={review.id}>
                    <ContainerTitle>
                      <ImgContainer>
                        <Avatar src={review.photo} alt={review.name} />
                      </ImgContainer>
                      <div>
                        <Name>{review.name}</Name>
                        <Rating rating={review.rating} />
                      </div>
                    </ContainerTitle>
                    <Comment>{review.text}</Comment>
                  </SliderContainer>
                </ColorContainer>
              ))}
            </Slider>
          </MainContainerSlider>
        </section>
      </HomepageContainer>
    </>
  );
}
