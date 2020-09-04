import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import Item from '../checkoutProductsItem';

function ProductsListResume() {
    return (
        // <Row>
        //     <div className="col-7">

        //     </div>
        //     <Card body className="col-4">

        //     </Card>
        // </Row>
        <div className="stl">
            <div className="col-6">

            </div>
            <Card body className="cardRes col-6">
                <Row>
                    <div className="col-6">Subtotal</div>
                    <div className="col-6">$2,000 MXN</div>
                </Row>
                <Row>
                    <div className="col-6">Shipping</div>
                    <div className="col-6">$100 MXN</div>
                </Row>
                <Row>
                    <div className="col-6">Total</div>
                    <div className="col-6">$2,100 MXN</div>
                </Row>
                <Row>
                    <div className="buttonNav col-12">Purchase</div>
                </Row>
            </Card>
        </div>
    )
}

export default ProductsListResume;




