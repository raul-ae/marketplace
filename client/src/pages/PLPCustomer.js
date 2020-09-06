import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Container from 'react-bootstrap/Container';
import "./styles.css";
import NavCustomer from '../components/navcustomer'
import Footer from '../components/footercustomer'
import Productlist from '../components/plpproducts'
import Categories from '../components/categoriescustomer'

function PLP() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        loadCategories()
      }, [])

    function loadCategories() {
        API.getCategories()
          .then(res => {
            setCategories(res.data);
            console.log('loadCategories - res.data: ', res.data);
          }
          )
          .catch(err => console.log(err));
      };
    return (
        <>
            <NavCustomer />
            <Categories categories= {categories}/>
            <Container>
            <Productlist />
            </Container>
            <Footer />
        </>
    );
}


export default PLP;



