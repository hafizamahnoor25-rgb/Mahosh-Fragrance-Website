'use client';

import { useState } from 'react';
import { apiRequest } from '../lib/api';

export default function CheckoutForm() {
  const [message, setMessage] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      await apiRequest('/orders/checkout', {
        method: 'POST',
        body: JSON.stringify({
          paymentMethod: form.get('paymentMethod'),
          shippingAddress: {
            fullName: form.get('fullName'),
            phone: form.get('phone'),
            line1: form.get('line1'),
            city: form.get('city'),
            country: form.get('country'),
            postalCode: form.get('postalCode')
          }
        })
      });
      setMessage('Order placed successfully.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form className="contactForm authForm" onSubmit={submit}>
      <input name="fullName" placeholder="Full name" required />
      <input name="phone" placeholder="Phone" />
      <input name="line1" placeholder="Address" required />
      <input name="city" placeholder="City" required />
      <input name="country" placeholder="Country" required />
      <input name="postalCode" placeholder="Postal code" />
      <select name="paymentMethod" defaultValue="card">
        <option value="card">Card</option>
        <option value="cash_on_delivery">Cash on delivery</option>
      </select>
      <button className="button primary" type="submit">
        Place Order
      </button>
      {message && <p className="formMessage">{message}</p>}
    </form>
  );
}
