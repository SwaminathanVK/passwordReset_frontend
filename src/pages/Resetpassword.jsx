import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api.js'; 

const ResetPassword = () => {
  const { token } = useParams(); // token from URL
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/reset-password/${token}`, { password });
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error('Reset error:', err);
      setMessage(err.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-danger">Reset Password</button>
        {message && <p className="mt-3 alert alert-info">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
