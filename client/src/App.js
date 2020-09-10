import React, {useState} from "react";
import MasterCustomer from './pages/MasterCustomer'
import MasterAdmin from './pages/MasterAdmin'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import MasterCheckout from './pages/MasterCustomerCheckout'
import UserContext from "./utils/UserContext"

// Add Stripe to your React app
// Use the Stripe.js and the Stripe Elements UI library to stay PCI compliant by ensuring that card details go directly to Stripe and never reach your server.
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./components/CheckoutForm";
// import CheckoutForm from "./components/CheckoutForm";

// Handling the api keys
import dotenv from 'dotenv';
dotenv.config();


// Load Stripe.js
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
// const promise = loadStripe(process.env.STRIPE_API_KEY);
// const promise = loadStripe("pk_test_51HLY6nIsyYjySygOXa1LA85XDeyEmpELSHi6IGah9ECVTI6zod8Hk5Z7IEFDlNLIjTFLJB5SOTnpI6R5szjarang00wQanVBJ7");


function App() {

  const [user, setUser] = useState({
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
  })


  // Initialize Stripe Elements
  // Pass the resulting promise from loadStripe to the Elements provider. This allows the child components to access the Stripe service via the Elements consumer.
  return (
    <Router>
<<<<<<< HEAD
    <UserContext.Provider value={UserContext}>
=======
    <UserContext.Provider value={{user, setUser}}>

>>>>>>> b07ae2495dca368348e6bcf957080e99b721ad2b
      <Wrapper>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={MasterCustomer} />
          <Route path={process.env.PUBLIC_URL + '/admin'} component={MasterAdmin} />
          <Route path={process.env.PUBLIC_URL + '/home'} component={MasterCustomer} />
          <Route path={process.env.PUBLIC_URL + '/check'} component={MasterCheckout} />
          {/*  <Elements stripe={promise}>
            <Route path={process.env.PUBLIC_URL + '/checkout'} component={CheckoutForm} />
          </Elements> */}
          <Route component={MasterCustomer} />
        </Switch>
      </Wrapper>
    </UserContext.Provider>
    </Router>
  );
}

export default App;

/* <CheckoutForm /> */