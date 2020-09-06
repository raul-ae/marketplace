import React from "react";
import Container from 'react-bootstrap/Container';
import ProductList from '../components/checkoutProducts'
import ProductResume from '../components/checkoutProductsResume'
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'


function PDP() {
  return (
    <>
      <NavCustomer />
      <Container fluid>
        <h2>Review your shopping cart: </h2>
        <ProductList />
        <ProductResume />
      </Container>
      <Footer />
    </>
  );
}

export default PDP;
