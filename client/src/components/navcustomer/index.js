import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import "./style.css";


function NavCustomer() {
    const [search, setSearch] = useState([])

    const [localStorageProducts, setlocalStorageProducts] = useState([]);
    let localProducts = [];
    //console.log("nononono",localStorageProducts);
    const [counter, setCounter] = useState([]);



    useEffect(() => {
        getLocalStoragePdts();
      }, []);

    useEffect(() => {
        getLocalStoragePdts();
      }, [counter]);

    
    const getLocalStoragePdts = () => {
        let count=0;
        for (let i = 0; i < localStorage.length; i++) {
            let id = localStorage.key(i);
 
            if(id!="total"){
                let prodTemp= JSON.parse(localStorage.getItem(id));
                let quantTemp=parseInt(prodTemp.quantity)
                count=count+quantTemp;
                //console.log(count);
                setCounter(count);
            }
            let product = JSON.parse(localStorage.getItem(id));
            localProducts.push(product);
        }
        setlocalStorageProducts(localProducts);
    }

    const handleSearchChange = (e) => {
        let value = e.target.value;
        setSearch(value);
        //console.log("search bar", value)
      }

    return (
        <Navbar bg="light" expand="lg" className="row">
            <div className="col-sm-12 col-lg-2">
                <Link to={process.env.PUBLIC_URL + '/'}>
                    <img alt="" src="../../Images/logo.png" width="300" className="d-inline-block align-top"/>
                </Link>
            </div>
            <div className="col-sm-12 col-lg-8">
                <Form inline className="linee">
                    <FormControl type="search" placeholder="Search" className="col-sm-10 col-lg-10"
                        onChange={handleSearchChange}
                    >
                    </FormControl>
                    <Link to={process.env.PUBLIC_URL + '/home/productsearch/'+search} className="col-sm-2 col-lg-2">
                        <div className="buttonNav">Search</div>
                    </Link>
                </Form>
            </div>
            <div className="col-sm-12 col-lg-2 ">
                <Row>
                    <div>                     
                        <Link to={process.env.PUBLIC_URL + '/home/login'} className="astyle">
                            <div><i class="fas fa-user"></i> Account | </div>
                        </Link>
                    </div>
                    <div className="float-right">
                        <Link to={process.env.PUBLIC_URL + '/home/shoppingcart'} className="astyle">
                            <div> Shopping Cart<i className="fas fa-shopping-cart"></i><div className="cart-counter">{counter}</div></div>
                        </Link>
                    </div>
                </Row>
            </div>
        </Navbar>
    );
}

export default NavCustomer;
