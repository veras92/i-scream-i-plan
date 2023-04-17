import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviews, Rating } from './reviews';

import sprite from 'shared/icons/sprite.svg';

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
} from './MainPage.styled';

import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
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
            Log in{' '}
            <ButtonSvg>
              <use href={`${sprite}#icon-Log-in`} />
            </ButtonSvg>
          </LogInBtn>
        </ButtonWrapper>
      </StyledHeader>
      <main>
        <section>
          <ul>
            <li>
              <div>
                <h2>1.</h2>
                <h3>CALENDAR</h3>
                <h3>VIEW</h3>
                <span>
                  GooseTrack's Calendar view provides a comprehensive overview
                  of your schedule, displaying all your tasks, events, and
                  appointments in a visually appealing and intuitive layout.
                </span>
              </div>
              <div>
                <img src={one} alt="calendar" />
              </div>
            </li>
            <li>
              <div>
                <h2>2.</h2>
                <h3>SIDEBAR</h3>
                <span>
                  GooseTrack offers easy access to your account settings,
                  calendar, and filters. The "My Account" section allows you to
                  manage your profile information and preferences, while the
                  calendar provides a quick and convenient way to view your
                  upcoming events and tasks.
                </span>
              </div>
              <div>
                <img src={two} alt="sidebar" />
              </div>
            </li>
            <li>
              <div>
                <h2>3.</h2>
                <h3>ALL IN</h3>
                <h3>ONE</h3>
                <span>
                  GooseTrack is an all-in-one productivity tool that helps you
                  stay on top of your tasks, events, and deadlines. Say goodbye
                  to scattered to-do lists and hello to streamlined productivity
                  with GooseTrack.
                </span>
              </div>
              <div>
                <img src={three} alt="all in" />
              </div>
            </li>
          </ul>
        </section>
      </main>
      <section>
        <h2>REVIEWS</h2>
        <MainContainerSlider>
        <Slider {...settings}>
          {reviews.map((review) => (
            <ColorContainer key={review.id}>
              <SliderContainer>                             
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
    </>
  );
}