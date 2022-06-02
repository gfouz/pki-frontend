import React from "react";
import styled from 'styled-components';

export const StyledSlider = styled.div`
  width: 100%;
  .glider {

  }
  .glider__item {
     position: relative;
     width: 100%;
     display: flex;
     justify-content: center;
    }
  .glider__image {
      max-width: 300px;
      height: auto;
     } 
  .glider__text {
    position: absolute;
    padding: 1em;
  }    
    .slick-dots li button:before {
    font-family: 'slick';
    font-size: 16px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: .75;
    color: #e1cf62;
}

`;  