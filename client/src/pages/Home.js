import React from "react";
import Mainproducts from '../components/mainproductscustomer'
import Allproducts from '../components/allproductscustomer'
import Carousel from '../components/carouselcustomer'
import Container from 'react-bootstrap/Container'

function homeCustomer() {
  return (
    <Container>
        <Carousel />
        <Mainproducts />
        <Allproducts />
    </Container>
  );
}

export default homeCustomer;
