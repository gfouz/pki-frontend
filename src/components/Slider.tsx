import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import {Heading} from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  
  interface settingsProps {
    dots: boolean;
    infinite: boolean;
    speed: number;
    autoplay: boolean;
    autoplaySpeed: number;
    slidesToShow: number;
    slidesToScroll: number;
  }
  var settings: settingsProps = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <StyledSlider> 
    <Slider {...settings}>
      <div className="slider">
        <p style={{color:"#000000"}}>
          By default, all toasts will inherit
          ToastContainer's props. Props defined 
          on toast supersede ToastContainer's
          props. Props marked with * can only be 
          set on the ToastContainer. 
         </p> 
      </div>
      <div>
        <Heading color="#000000">2</Heading>
      </div>
      <div>
        <Heading color="#000000">3</Heading>
      </div>
      <div>
        <Heading color="#000000">4</Heading>
      </div>
      <div>
        <Heading color="#000000">5</Heading>
      </div>
    </Slider>
   </StyledSlider> 
  );
}

const StyledSlider = styled.div`
  .slider {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: yellow;
  }
  p {
    width: 320px;
  }
`;  