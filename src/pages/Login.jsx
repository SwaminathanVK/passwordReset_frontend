import { useState } from 'react';
import { Link } from 'react-router-dom'; // 👈 Import Link for routing
import api from '../api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button className="btn btn-success w-100 mb-2">Login</button>

        {/* 👉 Forgot password link */}
        <div className="text-center">
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>

        {message && <p className="mt-3 alert alert-info">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
