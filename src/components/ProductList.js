// src/components/ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 },
        { id: 4, name: 'Product 4', price: 250 },
        { id: 5, name: 'Product 5', price: 300 },
        { id: 6, name: 'Product 6', price: 350 },
        { id: 7, name: 'Product 7', price: 400 },
        { id: 8, name: 'Product 8', price: 450 }
    ];

    return (
        <div>
            <h1>Product Listing</h1>
            <div className="product-grid">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
