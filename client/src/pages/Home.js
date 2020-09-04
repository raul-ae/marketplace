import React, { useState, useEffect } from "react";
import Mainproducts from '../components/mainproductscustomer'
import Allproducts from '../components/allproductscustomer'
import Carousel from '../components/carouselcustomer'
import Container from 'react-bootstrap/Container'
import API from "../utils/API";

function homeCustomer() {
  const [products, setProducts] = useState([])
  const [topProducts, setTopProducts] = useState([])


  useEffect(() => {
    loadProducts()
  }, [])

  function loadProducts() {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
        setTop4(res.data);
        console.log('loadProducts - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  };

  function setTop4(array) {
    let top4 = []
    let baseArray = array.slice(0);

    for (let i = 0; i < 4; i++) {
      let index = Math.floor(Math.random() * baseArray.length)
      top4.push(baseArray[index])
      baseArray.splice(index, 1);
    };
    setTopProducts(top4);
  }


  return (
    <Container>
      <Carousel />
      <Mainproducts products={topProducts} />
      <Allproducts products={products} />
    </Container>
  );
}

export default homeCustomer;
