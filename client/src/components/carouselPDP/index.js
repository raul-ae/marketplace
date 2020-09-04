import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css"

function carousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/91B2ftaRW7L._AC_SL1500_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/71St4QL1z%2BL._AC_SL1000_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/8146hMBYeJL._AC_SL1500_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
