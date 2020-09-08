import React, { useState, useEffect } from "react";
import Mainproducts from '../components/mainproductscustomer'
import Allproducts from '../components/allproductscustomer'
import Carousel from '../components/carouselcustomer'
import Container from 'react-bootstrap/Container'
import API from "../utils/API";
import NavCustomer from '../components/navcustomer'
import Categories from '../components/categoriescustomer'
import Footer from '../components/footercustomer'

function HomeCustomer() {
  const [products, setProducts] = useState([])
  const [topProducts, setTopProducts] = useState([])
  const [categories, setCategories] = useState([])


  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    loadCategories()
  }, [])

  function loadProducts() {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
        setTop4(res.data);
        //console.log('loadProducts - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  };

  function loadCategories() {
    API.getCategories()
      .then(res => {
        setCategories(res.data);
        //console.log('loadCategories - res.data: ', res.data);
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
    <>
      <NavCustomer />
      <Categories categories= {categories}/>
      <Container className="minht">
        <Carousel />
        <Mainproducts products={topProducts} />
        <Allproducts products={products} />
      </Container>
      <Footer />
    </>
  );
}

export default HomeCustomer;
