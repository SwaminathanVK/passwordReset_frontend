import { useState } from 'react';
import api from '../api.js';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // 🔍 Debug
  alert('Sending API call...');
    try {
      const res = await api.post('/forgot-password', { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to send reset link');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
        <button className="btn btn-warning">Send Reset Link</button>
        {message && <p className="mt-3 alert alert-info">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
