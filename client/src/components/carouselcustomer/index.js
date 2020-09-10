import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";
import Container from 'react-bootstrap/Container';


function carousel() {
  return (
    <Carousel className="minCar">
      <Carousel.Item className="minCar">
        <img
          className="d-block w-100"
          src="https://themarket.s3.us-east-2.amazonaws.com/Banners/bannerthemarket.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="minCar">
        <img
          className="d-block w-100"
          src="https://themarket.s3.us-east-2.amazonaws.com/Banners/carouselph2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="minCar">
        <img
          className="d-block w-100"
          src="https://themarket.s3.us-east-2.amazonaws.com/Banners/carouselph2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
