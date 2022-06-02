import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import {Heading} from '@chakra-ui/react';
import {StyledSlider} from './Slider.Styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Glider() {
  
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
     <div>
      <section className="glider">
      <div className="glider__item">
        <img 
         className="glider__image"
         src="./images/services.jpg" 
         alt="services"
        />
      </div>
    </section>
     </div> 
     <div>
      <section className="glider">
      <div className="glider__item">
        <img 
         className="glider__image"
         src="./images/services.jpg" 
         alt="services"
        />
      </div>
    </section>
     </div> 
     <div>
      <section className="glider">
      <div className="glider__item">
      <img 
         className="glider__image"
         src="./images/services.jpg" 
         alt="services"
        />
      </div>  
    </section>
     </div>
     <div>
      <section className="glider">
      <div className="glider__item">
        <img 
         className="glider__image"
         src="./images/services.jpg" 
         alt="services"
        />
      </div>
    </section>
     </div> 
     <div>
      <section className="glider">
      <div className="glider__item">
        <img 
         className="glider__image"
         src="./images/services.jpg" 
         alt="services"
        />
      </div>  
    </section>
     </div> 
    </Slider>
   </StyledSlider> 
  );
}

