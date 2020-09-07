import React from "react";
// import CardColumns from 'react-bootstrap/CardColumns';
// import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./style.css";

function AllProducts(props) {
  return (
    <>
    <h1>
        All products
    </h1>
      <div class="row row-cols-1 row-cols-md-4">
        {props.products.map(product => {
          return (
            <div class="col mb-4">
            <div class="card card-hgt">
              <Card.Img variant="top" src={product.picture} className="img-hgt" />
              <Card.Body>
                <h5 class="card-title prd-tle">{product.productName}</h5>
                <Card.Text className="sub-crd-height">{product.description}</Card.Text>
                <div className="smll-height"><small className="text-muted">Sold by: {product.sellerId}</small></div>
                <div className="col-12 price">$ {product.price} MXN</div>
                <Link
                  to={process.env.PUBLIC_URL + '/home/product/' + product._id}
                >
                  <div className="buttonNav col-12">View</div>
                </Link>
              </Card.Body>
              </div>
            </div>
          );
        })
        }
      </div>
      
    </>
  );
}

export default AllProducts;
