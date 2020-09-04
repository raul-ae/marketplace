import React from "react";
import NavCustomer from '../components/navcustomer'
import Categories from '../components/categoriescustomer'
import Footer from '../components/footercustomer'
import HomeCustomer from './Home.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Productdp from "./PDPCustomer"
// import Checkout from "./Checkout"

function MasterCustomer() {
  return (
    <Router>
      <NavCustomer />
      <Categories />
      <Wrapper>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/home'} component={HomeCustomer} />
          <Route exact path={process.env.PUBLIC_URL + '/home/product'} component={Productdp} />
          <Route component={HomeCustomer} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default MasterCustomer;
