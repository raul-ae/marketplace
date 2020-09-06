import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import { Link } from "react-router-dom";

function ProductsListResume({ localStorageProducts }) {

    let subtototal = 0;
    let shipping = 100;

    localStorageProducts.forEach(product => {
        console.log('product: ', product, typeof (product));
        if (typeof (product) !== 'number') {
            subtototal += parseFloat(product.price) * parseFloat(product.quantity);
        }
    });
    let total = subtototal + shipping;
    localStorage.setItem('total', total.toString());

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
                    <div className="col-6">${subtototal} MXN</div>
                </Row>
                <Row>
                    <div className="col-6">Shipping</div>
                    <div className="col-6">${shipping} MXN</div>
                </Row>
                <Row>
                    <div className="col-6">Total</div>
                    <div className="col-6">${total} MXN</div>
                </Row>
                <Row>
                    <Link
                        to={process.env.PUBLIC_URL + '/home/payment'}
                    >
                        <div className="buttonNav col-12">Purchase</div>
                    </Link>
                </Row>
            </Card>
        </div>
    )
}

export default ProductsListResume;




