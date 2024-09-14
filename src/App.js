// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import { CartProvider } from './context/CartContext';
import './styles.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="container">
                    <header>
                        <h1>E-Commerce Website</h1>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/cart">Cart</Link>
                            <Link to="/admin">Admin</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </nav>
                    </header>

                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
