import React from "react";
import Container from 'react-bootstrap/Container';
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Item from '../components/checkoutProductsItem';
import Card from 'react-bootstrap/Card';
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'

function PDP() {
  return (
    <>
      <NavCustomer />
      <Container className="marg minht" fluid>
        <Row>
          <div className="col-12 d-flex justify-content-center">
            <h1>
              Your ordern has been confirmed!<br></br>
                Confirmation number: #
            </h1>
          </div>
        </Row>
        <Row>
          <div className="col-12 d-flex justify-content-center">
            <h2>Here are some details of your purchase</h2>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <Card>
              <h3>Your Products</h3>
              {/* <Item /> */}
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col-6">
            <Card>
              <h3>Address</h3>
            </Card>
          </div>
          <div className="col-6">
            <Card>
              <h3>Payment</h3>
            </Card>
          </div>
        </Row>
      </Container >
      <Footer />
    </>
  );
}

export default PDP;
