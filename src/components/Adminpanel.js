// src/components/AdminPanel.js
import React from 'react';

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <div className="admin-options">
                <button>View Products</button>
                <button>Manage Orders</button>
                <button>Add New Product</button>
            </div>
            <p>This is the admin panel where you can manage the product listings, orders, and other e-commerce settings.</p>
        </div>
    );
};

export default AdminPanel;
