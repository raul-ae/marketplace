import React from "react";
import NavCustomer from '../components/navcustomer'
import Categories from '../components/categoriescustomer'
import Footer from '../components/footercustomer'
import HomeCustomer from './Home.js'

function MasterCustomer() {
  return (
    <div>
      <NavCustomer />
      <Categories />
           ADMIN
      <Footer />
    </div>
  );
}

export default MasterCustomer;
