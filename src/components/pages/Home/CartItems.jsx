import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pic1 from '../../../Asserts/pic.png'
import pic2 from '../../../Asserts/pic1.png'

const CartItems = () => {
    return (
        <div className="shadow-lg p-4" >
            <Row className="my-2">
                <Col sm={6} md={3}><img src={pic1} alt="" /></Col>
                <Col sm={6} md={3} className="pt-2">
                    <h5>Royal Double Bed</h5>
                    <h5>$ 45</h5>
                    <p className="rounded-pill border border-dark w-50 d-flex justify-content-between px-3"><span>-</span> 1 <span>+</span></p>
                </Col>
                <Col sm={4} md={2} className="pt-2">
                    <h5>Tenure</h5>
                    <h5>12 Months</h5>
                </Col>
                <Col sm={4} md={2} className="pt-2">
                <h5>Deposit</h5>
                    <h5>Rs 799</h5>
                    <p>Fully refundable</p>
                </Col>
                <Col sm={4} md={2} className="pt-2">
                    <h5>Total</h5>
                    <h4>Rs 1499</h4>
                </Col>
            </Row>
            <Row>
            <Col sm={6} md={3}><img src={pic2} alt="" /></Col>
                <Col sm={6} md={3}>
                <h5>Royal Double Bed</h5>
                    <h5>$ 45</h5>
                    <p className="rounded-pill border border-dark w-50 d-flex justify-content-between px-3"><span>-</span> 1 <span>+</span></p>
                </Col>
                <Col sm={4} md={2}></Col>
                <Col sm={4} md={2}></Col>
                <Col sm={4} md={2}></Col>
            </Row>
        </div>
    );
};

export default CartItems;