'use client';

import { useState } from 'react';
import { apiRequest } from '../lib/api';

export default function AdminConsole() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

  const addProduct = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      await apiRequest('/products', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
          name: form.get('name'),
          description: form.get('description'),
          image: form.get('image'),
          price: Number(form.get('price')),
          inventory: Number(form.get('inventory')),
          rating: Number(form.get('rating')),
          featured: form.get('featured') === 'on',
          notes: form.get('notes').split(',').map((note) => note.trim()).filter(Boolean)
        })
      });
      setMessage('Product added.');
      event.currentTarget.reset();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const loadOrders = async () => {
    try {
      const data = await apiRequest('/orders', { headers: authHeaders });
      setOrders(data.orders);
      setMessage('Orders loaded.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const loadUsers = async () => {
    try {
      const data = await apiRequest('/users', { headers: authHeaders });
      setUsers(data.users);
      setMessage('Users loaded.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const deleteProduct = async (event) => {
    event.preventDefault();
    const productId = new FormData(event.currentTarget).get('productId');

    try {
      await apiRequest(`/products/${productId}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      setMessage('Product deleted.');
      event.currentTarget.reset();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const updateOrder = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      await apiRequest(`/orders/${form.get('orderId')}/status`, {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify({ status: form.get('status') })
      });
      setMessage('Order status updated.');
      event.currentTarget.reset();
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="adminConsole">
      <input value={token} onChange={(event) => setToken(event.target.value)} placeholder="Admin JWT token" />
      <form className="contactForm" onSubmit={addProduct}>
        <h2>Add Product</h2>
        <input name="name" placeholder="Product name" required />
        <textarea name="description" placeholder="Description" rows="4" required />
        <input name="image" placeholder="Image URL" type="url" required />
        <input name="price" placeholder="Price" type="number" min="0" step="0.01" required />
        <input name="inventory" placeholder="Inventory" type="number" min="0" defaultValue="10" />
        <input name="rating" placeholder="Rating" type="number" min="0" max="5" step="0.1" defaultValue="5" />
        <input name="notes" placeholder="Notes, comma separated" />
        <label className="checkLabel">
          <input name="featured" type="checkbox" /> Featured product
        </label>
        <button className="button primary" type="submit">
          Add Product
        </button>
      </form>
      <div className="adminActions">
        <button className="button" onClick={loadOrders} type="button">
          Load Orders
        </button>
        <button className="button" onClick={loadUsers} type="button">
          Load Users
        </button>
      </div>
      <div className="adminMiniForms">
        <form className="contactForm" onSubmit={deleteProduct}>
          <h3>Delete Product</h3>
          <input name="productId" placeholder="Product ID" required />
          <button className="button" type="submit">
            Delete
          </button>
        </form>
        <form className="contactForm" onSubmit={updateOrder}>
          <h3>Update Order</h3>
          <input name="orderId" placeholder="Order ID" required />
          <select name="status" defaultValue="processing">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className="button" type="submit">
            Update
          </button>
        </form>
      </div>
      {message && <p className="formMessage">{message}</p>}
      <div className="adminLists">
        <section>
          <h3>Orders</h3>
          {orders.map((order) => (
            <p key={order._id}>
              {order.status} · ${order.total} · {new Date(order.createdAt).toLocaleDateString()}
            </p>
          ))}
        </section>
        <section>
          <h3>Users</h3>
          {users.map((user) => (
            <p key={user._id}>
              {user.name} · {user.email} · {user.role}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}
