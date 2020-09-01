import React from "react";
import Container from 'react-bootstrap/Container';
import Carousel from '../components/carouselPDP'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Details from '../components/pdpdetailtabs'


function PDP() {
    return (
      <Container>
            <Row>
                <Col>
                    <Carousel />
                </Col>
                <Col>
                    <h1>Product title</h1>
                    <div>Product description:

                    </div>
                    <div>
                        <Button variant="secondary" size="lg">
                            Add to cart
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Product Details:</h1>
                    <Details />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Related products</h1>
                </Col>
            </Row>
      </Container>
    );
  }
  
  export default PDP;
