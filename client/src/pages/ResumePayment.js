import React from "react";
import Container from 'react-bootstrap/Container';
import PersonalInfoForm from "../components/checkoutperinfo";
import AddressForm from "../components/checkoutaddress";
import PaymentForm from "../components/checkoutpayment";
import Row from 'react-bootstrap/Row';
import "./styles.css";
import { Link } from "react-router-dom";
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'

function PDP() {
  return (
    <>
      <NavCustomer />
      <Container className="marg" fluid>
        <Row>
          <div className="col-4">
            <h1>Personal Information</h1>
            <PersonalInfoForm />
          </div>
          <div className="col-4">
            <h1>Address</h1>
            <AddressForm />
          </div>
          <div className="col-4">
            <h1>Add Payment details</h1>
            <PaymentForm />
          </div>
        </Row>
        <Link
          to={process.env.PUBLIC_URL + '/check/confirmation'}
        >
          <div className="buttonNav col-12">Confirm your purchase</div>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default PDP;
