import React, { useState } from 'react';
import './AdminLogin.css'

function AdminLogin({ navigateTo, setAdminLoggedIn }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username === 'admin' && credentials.password === 'admin1234') {
      setAdminLoggedIn(true);
      navigateTo('adminDashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className='admin-login-container'>
      <div className='login-box'>
        <div className='login-header'>
          <h2>Harambee Admin Portal</h2>
          <p>Welcome back, please log in to continue.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit' className='btn-login'>Login</button>
          <button type='button' className='btn-back' onClick={() => navigateTo('landing')}>Back to Main</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;