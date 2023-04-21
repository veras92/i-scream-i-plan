import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sprite from 'shared/icons/sprite.svg';
import { reviews } from './consts/reviews';
import { Rating } from './Reviews';
import {
  ArrowLeft,
  ArrowRight,
  Avatar,
  ColorContainer,
  Comment,
  ContainerTitle,
  ImgContainer,
  MainContainerSlider,
  Name,
  ReviewsTitle,
  SliderContainer,
  Svg,
} from './MainPageRaiting.styled';

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

export const MainPageRaiting = () => {
  return (
    <section>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <MainContainerSlider>
        <Slider {...settings}>
          {reviews.map(review => (
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
  );
};
