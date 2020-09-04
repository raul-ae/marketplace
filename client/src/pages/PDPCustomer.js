import React from "react";
import Container from 'react-bootstrap/Container';
import Carousel from '../components/carouselPDP'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from '../components/pdpdetailtabs'
import ProductDetail from '../components/pdpproductdetail'
import Related from '../components/pdprelatedproducts'

function PDP() {
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel />
                </Col>
                <Col>
                    <ProductDetail />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Product Specification</h2>
                    <Details />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Related products</h2>
                    <Related />
                </Col>
            </Row>
        </Container>
    );
}

export default PDP;
