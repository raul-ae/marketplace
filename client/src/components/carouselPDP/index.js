import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css"

function carousel({ picture, picture2, picture3 }) {


  return (
    <Carousel className="carousel1">
      <Carousel.Item className="">
        <img
          className="ht"
          src={picture}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="ht"
          src={picture2}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="ht"
          src={picture3}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
