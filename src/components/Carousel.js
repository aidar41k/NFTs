import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Arrow from "../assets/Arrow.svg";
import  carousel  from "../imports/carousel";

const Container = styled.div`
  width: 25vw;
  height: 70vh;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next {
    top: 60%;
    color: ${(props) => props.theme.text};
    right: 0;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    width: 4rem;
    &:after {
      display: none;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    transform: rotate(180deg);
    top: 60%;
    left: 0;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    width: 4rem;
    &:after {
      display: none;
    }
  }
`;
const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {carousel.map(({ path, name }) => (
          <SwiperSlide key={name}>
            <img src={path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
