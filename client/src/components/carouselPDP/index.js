import React from "react";
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';


function carousel() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../../Images/productph.png"
            alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../../Images/productph.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../../Images/productph.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
