import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import PersonalInfoForm from "../components/checkoutperinfo";
import AddressForm from "../components/checkoutaddress";
import PaymentForm from "../components/checkoutpayment";
import Row from 'react-bootstrap/Row';
import "./styles.css";
import { Link } from "react-router-dom";
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'
import API from "../utils/API";

function PDP() {

  const [consumer, setConsumer] = useState();

  useEffect(() => {
    loadConsumers();
  }, []);

  const loadConsumers = () => {
    API.getConsumers()
      .then(res => {
        // setConsumers(res.data);
        console.log('loadConsumers - res.data: ', res.data);
        setConsumer(res.data[0]);
      }
      )
      .catch(err => console.log(err));
  }

  return (
    <>
      <NavCustomer />
      <Container className="marg minht" fluid>
        <Row>
          <div className="col-lg-4 col-sm-12">
            <h1>Personal Information</h1>
            <PersonalInfoForm consumer={consumer} />
          </div>
          <div className="col-lg-4 col-sm-12">
            <h1>Address</h1>
            <AddressForm consumer={consumer} />
          </div>
          <div className="col-lg-4 col-sm-12">
            <h1>Add Payment details</h1>
            <PaymentForm consumer={consumer} />
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default PDP;
