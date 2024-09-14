// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Our E-Commerce Store</h1>
            <p>Browse our products and add them to your cart!</p>
            <ProductList />
        </div>
    );
};

export default HomePage;
