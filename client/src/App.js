import React from "react";
import NavCustomer from './components/navcustomer'
import Categories from './components/categoriescustomer'
// import Carousel from './components/carouselcustomer'
// import Container from 'react-bootstrap/Container'
import Footer from './components/footercustomer'
// import Mainproducts from './components/mainproductscustomer'
// import Allproducts from './components/allproductscustomer'
import HomeCustomer from './pages/Home.js'

function App() {
  return (
    <div>
      <NavCustomer />
      <Categories />
        <HomeCustomer />
      <Footer />
    </div>
  );
}

export default App;
