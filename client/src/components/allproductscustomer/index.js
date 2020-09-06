import React from "react";
// import CardColumns from 'react-bootstrap/CardColumns';
// import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./style.css";

function AllProducts(props) {
  return (
    <div>
      <h1>
        All products
    </h1>
      <div class="row row-cols-1 row-cols-md-4">
        
        {props.products.map(product => {
          return (
            <div class="col mb-4">
            <div class="card">
              <Card.Img variant="top" src={product.picture} className="crd-img-hgt" />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text className="sub-crd-height">{product.description}</Card.Text>
                <Link
                  to={process.env.PUBLIC_URL + '/home/product/' + product._id}
                >
                  <div className="buttonNav col-12">View</div>
                </Link>

              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  SellerID: {product.sellerId}
                </small>
              </Card.Footer>
              </div>
            </div>
          );
        })
        }
      </div>
      
    </div>
  );
}

export default AllProducts;
