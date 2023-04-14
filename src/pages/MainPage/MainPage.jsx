import { Link } from 'react-router-dom';
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews, Rating } from './reviews';

import sprite from 'shared/icons/sprite.svg';
import { Svg } from './MainPage.styled';

import { Arrow } from './MainPage.styled';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import goose from 'shared/icons/goose.svg';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Arrow
      onClick={onClick}>
        <Svg width="47">
            <use href={`${sprite}#icon-arrow-right`} />
        </Svg>
    </Arrow>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <Arrow
    onClick={onClick}>
      <Svg width="47">
        <use href={`${sprite}#icon-arrow-left`} />
      </Svg>
      </Arrow>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />

};

export default function MainPage() {
  return (
    <>
      <div style={{ margin: '50px' }}>
      <header>   
        <img width="150" src={goose} alt="goose"/>       
        <h1>Goose Track</h1>
        <Link to="/register">Sign up</Link>
        <Link to="/login">Log in </Link>
    </header>
    <main>
      <section>
      <ul>
        <li>
          <div>
          <h2>1.</h2>
            <h3>CALENDAR</h3>
            <h3>VIEW</h3>
            <span>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</span>
        </div>
        <div>
        <img src={one} alt="calendar" />
        </div>
      </li>
        <li>
          <div>
          <h2>2.</h2>
            <h3>SIDEBAR</h3>
            <span>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</span>
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
            <span>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</span>
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
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <img src={review.photo} alt={review.name} width="40px" height="40px"/>
              <h3>{review.name}</h3>
              <Rating rating={review.rating} />
              <p>{review.text}</p>              
            </div>
          ))}
        </Slider> 
      </section>
      </div>
    </>
  );
}



