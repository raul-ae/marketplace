import React from "react";
import NavCustomer from './components/navcustomer'
import Categories from './components/categoriescustomer'
import Carousel from './components/carouselcustomer'
import Container from 'react-bootstrap/Container'
import Footer from './components/footercustomer'
import Mainproducts from './components/mainproductscustomer'
import Allproducts from './components/allproductscustomer'

function App() {
  return (
    <div>
      <NavCustomer />
      <Categories />
      <Container>
        <Carousel />
        <Mainproducts />
        <Allproducts />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
