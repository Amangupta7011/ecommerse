// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, calculateTotal } = useContext(CartContext);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <span>{item.name}</span>
                                <span>${item.price} x {item.quantity}</span>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ${calculateTotal()}</h2>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
