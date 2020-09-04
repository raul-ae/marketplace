import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductList from '../components/checkoutProducts'
import ProductResume from '../components/checkoutProductsResume'


function PDP() {
  return (
    <Container fluid>
      <h2>Review your shopping cart: </h2>
      <ProductList />
      <ProductResume />
    </Container>
  );
}

export default PDP;
