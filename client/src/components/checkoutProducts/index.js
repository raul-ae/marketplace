import React, { useEffect } from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import Item from '../checkoutProductsItem';

function ProductsList() {

    let product = {};

    useEffect(() => {
        getLocalStoragePdts();
    });

    const getLocalStoragePdts = () => {
        console.log('localStorage.length: ', localStorage.length);
        for (let i = 0; i < localStorage.length; i++) {
            let id = localStorage.key(i);
            product = JSON.parse(localStorage.getItem(id));
            console.log('productName: ', product.productName);
        }
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
            <Item />
            <Item />
        </Card>
    )
}

export default ProductsList;




