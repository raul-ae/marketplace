import React from "react";
import MasterCustomer from './pages/MasterCustomer'
import MasterAdmin from './pages/MasterAdmin'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/home'}  component={MasterCustomer} />
          <Route path={process.env.PUBLIC_URL + '/admin'} component={MasterAdmin} />
          <Route component={MasterCustomer} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
