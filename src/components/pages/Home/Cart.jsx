import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CartCalculate from './CartCalculate';
import CartItems from './CartItems';

const Cart = () => {
    return (
        <>
            <Row className="my-5">
                <Col sm={12} md={8}> <CartItems /> </Col>
                <Col sm={12} md={4}> <CartCalculate /> </Col>
            </Row>
        </>
    );
};

export default Cart;


