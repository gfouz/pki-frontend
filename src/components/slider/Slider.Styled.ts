import React from "react";
import styled from 'styled-components';

export const StyledSlider = styled.div`
  width: 100%;
  min-height: 100vh;
  .glider {

  }
  .glider__item {
     position: relative;

     display: flex;
     justify-content: center;

     width: 100%;
     padding: 2em 0;
    }
  .glider-image__box {
    position: relative;
    padding: 10px;
    max-width:450px;
    border-radius: 20px;
  }  
  .glider__image {
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 1px 1px 20px #222222;
     } 
  .glider__text {
    position: absolute;
    padding: 1em;
    color: #666666;
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