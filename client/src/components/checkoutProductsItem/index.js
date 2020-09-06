import React from "react";
// import "./style.css";
import Row from 'react-bootstrap/Row';
import "./style.css"

function ProductsListItem({ product }) {
    return (
        <Row className="rowmar">
            <div className="col-1">
                <img src={product.picture} className="imgwd" alt="Product"></img>
            </div>
            <div className="col-2">
                {product.productName}
            </div>
            <div className="col-3">
                ${product.price} MXN
                </div>
            <div className="col-3">
                {product.quantity}
            </div>
            <div className="col-2">
                ${parseFloat(product.price) * parseFloat(product.quantity)} MXN
                </div>
            <div className="col-1">
                <i className="fas fa-trash"></i>
            </div>
        </Row>
    )
}

export default ProductsListItem;




