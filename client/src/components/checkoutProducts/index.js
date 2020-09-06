import React, { useState, useEffect } from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import Item from '../checkoutProductsItem';

function ProductsList({ localStorageProducts }) {

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




