// src/components/Product.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
