import React, { useState, useEffect } from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import Item from '../checkoutProductsItem';

function ProductsList() {

    const [localStorageProducts, setlocalStorageProducts] = useState([]);
    let localProducts = [];

    useEffect(() => {
        getLocalStoragePdts();
    }, []);

    const getLocalStoragePdts = () => {
        console.log('localStorage.length: ', localStorage.length);
        for (let i = 0; i < localStorage.length; i++) {
            let id = localStorage.key(i);
            let product = JSON.parse(localStorage.getItem(id));
            localProducts.push(product);
            console.log('productName: ', product.productName);
        }
        console.log('localProducts: ', localProducts);
        setlocalStorageProducts(localProducts);
    }

    return (
        <Card body className="cardRes">
            <Row>
                <div className="col-3">
                    Product
                </div>
                <div className="col-3">
                    Price
                </div>
                <div className="col-3">
                    Quantity
                </div>
                <div className="col-3">
                    Total
                </div>
            </Row>
            {localStorageProducts.map((product) => {
                return (
                    <Item product={product} />
                );
            })}
        </Card>
    )
}

export default ProductsList;




