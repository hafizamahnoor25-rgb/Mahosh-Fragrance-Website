'use client';

import { useState } from 'react';
import { authApi } from '../lib/api';

export default function AuthForm({ mode }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const isSignup = mode === 'signup';

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setMessage('Please wait...');

    try {
      const payload = isSignup ? form : { email: form.email, password: form.password };
      const data = isSignup ? await authApi.signup(payload) : await authApi.login(payload);
      setMessage(`Welcome, ${data.user.name}.`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form className="contactForm authForm" onSubmit={submit}>
      {isSignup && <input name="name" value={form.name} onChange={update} placeholder="Full name" required />}
      <input name="email" value={form.email} onChange={update} placeholder="Email" type="email" required />
      <input
        name="password"
        value={form.password}
        onChange={update}
        placeholder="Password"
        type="password"
        minLength="8"
        required
      />
      <button className="button primary" type="submit">
        {isSignup ? 'Create Account' : 'Login'}
      </button>
      {message && <p className="formMessage">{message}</p>}
    </form>
  );
}
