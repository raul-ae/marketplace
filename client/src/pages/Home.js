import React, {useState, useEffect} from "react";
import Mainproducts from '../components/mainproductscustomer'
import Allproducts from '../components/allproductscustomer'
import Carousel from '../components/carouselcustomer'
import Container from 'react-bootstrap/Container'
import API from "../utils/API";

function homeCustomer() {
  const [products, setProducts]= useState([])
  
  
  useEffect(() => {
    loadProducts()
  }, [])

  function loadProducts() {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
        console.log('loadProducts - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  };


  return (
    <Container>
        <Carousel />
      <Mainproducts products={products}/>
        <Allproducts products={products}/>
    </Container>
  );
}

export default homeCustomer;
