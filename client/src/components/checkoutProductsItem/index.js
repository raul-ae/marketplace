import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"

function ProductsListItem(props) {
    return (
        <Row className="rowmar">
            <div className="col-1">
                <img src="../../Images/carouselph.png" className="imgwd"></img>
            </div>
            <div className="col-2">
                Product title
            </div>
            <div className="col-3">
                $1,000 MXN
                </div>
            <div className="col-3">
                2
                </div>
            <div className="col-2">
                $2,000 MXN
                </div>
            <div className="col-1">
                <i class="fas fa-trash"></i>
            </div>
        </Row>
    )
}

export default ProductsListItem;




