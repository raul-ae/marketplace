import React from "react";
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import ResumeCheckout from "./ResumeCheck"
import ResumePayment from './ResumePayment'

function MasterCustomerCheckout() {
  return (
    <Router>
      <NavCustomer />
      <Wrapper>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/check/resume'} component={ResumeCheckout} />
          <Route exact path={process.env.PUBLIC_URL + '/check/payment'} component={ResumePayment} />
          <Route component={ResumeCheckout} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default MasterCustomerCheckout;
