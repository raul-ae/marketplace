import React from "react";
import NavCustomer from '../components/navcustomer'
import Categories from '../components/categoriescustomer'
import Footer from '../components/footercustomer'
import HomeCustomer from './Home.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Productdp from "./PDPCustomer"

function MasterCustomer() {
  return (
    <Router>
        <NavCustomer />
        <Categories />
        <Wrapper>
            <Route exact path={process.env.PUBLIC_URL + '/'}  component={HomeCustomer} />
            <Route exact path={process.env.PUBLIC_URL + '/product'}  component={Productdp} />
        </Wrapper>
        <Footer />
    </Router>
  );
}

export default MasterCustomer;
