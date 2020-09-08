import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles.css";
import NavCustomer from "../components/navcustomer";
import Footer from "../components/footercustomercheckout";
import API from "../utils/API";
import HomeCustomer from './Home.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function SignIn({handleLogInSuccess}) {
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const [signUp, setSignUp] = useState({
    userName: "",
    userType: "",
    consumerAddress: {},
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobile: "",
    picture: "",
    paymentMethod: "",
  });
const [address, setAddress]=useState({
    street: "",
    number: "",
    neighborhood: "",
    zipCode: "",
    country: "",
    state: "",
})


  const handleLogInSubmitButton = () => {
    submitLogIn();
  };

  const submitLogIn = () => {
    console.log("submit LogIn as: ", logIn);
    API.getUser(logIn)
      .then((res) => {
        console.log("logIn response:  ", res.data);
        if (res.data!=="Wrong User or Password"){
          // handleLogInSuccess(res.data)
          if (res.data.userType==="Customer"){
            return (
              window.location = "/home"
              )
            } else {
              return (
                window.location = "/admin"
                )
            }
        }else{alert("Wrong user or password")}
      })
      .catch((err) => {
        console.log(err)
        alert("Wrong user or password")
      });
  };

  const handleLogInInputOnChange = (e) => {

    let key = e.target.getAttribute("aria-label");
    let value = e.target.value;

    // console.log(e.target.id, ": ", e.target.value)
    setLogIn({ ...logIn, [key]: value });
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  };

  const handleLogSignUpOnChange = (e) => {

    let key = e.target.getAttribute("aria-label");
    let value = e.target.value;

    // console.log(e.target.id, ": ", e.target.value)
    setSignUp({ ...signUp, [key]: value });
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  };
  const handleLogSignUpAddressOnChange = (e) => {

    let key = e.target.getAttribute("aria-label");
    let value = e.target.value;

    // console.log(e.target.id, ": ", e.target.value)
    setAddress({ ...address, [key]: value });
    setSignUp({ ...signUp, consumerAddress: address})
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  };

  const handleSignUpSubmitButton = () => {
    submitSignUp();
  };

  const submitSignUp = () => {
    console.log("submit signUp as: ", signUp);
    API.saveUser(signUp)
      .then((res) => {
        console.log("signUp response:  ", res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavCustomer />
      <Container>
        <Row className="logCard">
          <Card className="col-6 marg">
            <h3>Log In</h3>
            <Form>
              <Form.Group controlId="formBasicEmail.user">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  aria-label="email"
                  onChange={handleLogInInputOnChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword.user">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  onChange={handleLogInInputOnChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                // type="submit"
                onClick={handleLogInSubmitButton}
              >
                Submit
              </Button>
            </Form>
          </Card>
          <Card className="col-6 marg">
            <h3>Sign Up</h3>
            <Form>
              <Form.Group>
                <Form.Label controlId="userName">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  aria-label="userName"
                  onChange={handleLogSignUpOnChange}
                />
                <Form.Label controlId="firstName">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  aria-label="firstName"
                  onChange={handleLogSignUpOnChange}
                />
                <Form.Label controlId="lastName">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  aria-label="lastName"
                  onChange={handleLogSignUpOnChange}
                />
                <Form.Label controlId="mobile">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  aria-label="mobile"
                  onChange={handleLogSignUpOnChange}
                />
                <Form.Label controlId="Address">Address: </Form.Label>
                <Form.Group>
                  <Form.Label controlId="Address1">Street</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      aria-label="street"
                      onChange={handleLogSignUpAddressOnChange}
                    />
                     <Form.Label controlId="Address2">Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      aria-label="number"
                      onChange={handleLogSignUpAddressOnChange}
                    />
                     <Form.Label controlId="Address3">Neighborhood</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      aria-label="neighborhood"
                      onChange={handleLogSignUpAddressOnChange}
                    />
                     <Form.Label controlId="Address4">zipCode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      aria-label="zipCode"
                      onChange={handleLogSignUpAddressOnChange}
                    />
                     <Form.Label controlId="Address5">Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      aria-label="country"
                      onChange={handleLogSignUpAddressOnChange}
                    />
                     <Form.Label controlId="Address6">State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      aria-label="state"
                      onChange={handleLogSignUpAddressOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Payment method</Form.Label>
                  <Form.Control
                    as="select"
                    aria-label="paymentMethod"
                    onChange={handleLogSignUpOnChange}
                  >
                    <option>Select your payment method</option>
                    <option>Visa</option>
                    <option>Master Card</option>
                  </Form.Control>
                </Form.Group>
                <Form.Label controlId="picture">Picture URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Picture URL"
                  aria-label="picture"
                  onChange={handleLogSignUpOnChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail.new">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  aria-label="email"
                  onChange={handleLogSignUpOnChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select a User Type</Form.Label>
                <Form.Control
                  as="select"
                  aria-label="userType"
                  onChange={handleLogSignUpOnChange}
                >
                  <option>Select your User Type</option>
                  <option>Admin</option>
                  <option>Customer</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword.new">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  aria-label="password"
                  placeholder="Password"
                  onChange={handleLogSignUpOnChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                // type="submit"
                onClick={handleSignUpSubmitButton}
              >
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
