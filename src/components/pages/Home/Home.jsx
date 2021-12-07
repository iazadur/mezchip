import React from 'react';
import Header from '../Shared/Header';
import Cart from './Cart';
import Services from './Services';

const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Cart />
                <Services />
            </div>
        </>
    );
};

export default Home;