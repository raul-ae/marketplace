import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./styles.css";
import NavCustomer from '../components/navcustomer'
import Footer from '../components/footercustomercheckout'

function SignIn() {
  return (
    <>
      <NavCustomer />
      <Container >
        <Row className="logCard">
          <Card className="col-6 marg">
            <h3>Log In</h3>
            <Form>
              <h3>Log In</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
          </Button>
            </Form>
          </Card>
          <Card className="col-6 marg">
            <h3>Sign Up</h3>
            <Form>
              <Form.Group controlId="userName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
                <Form.Label>Picture URL</Form.Label>
                <Form.Control type="text" placeholder="Picture URL" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Row>
      </Container>
      <Footer />
    </>
  );
}


export default SignIn;



