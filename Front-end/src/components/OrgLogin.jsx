import React, { useState } from 'react';

function OrgLogin({ navigateTo }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    alert('Login successful!');
    navigateTo('dashboard');
  };

  return (
    <div className='form-page-container'>
      <div className='form-card'>
        <h2>Welcome Back!</h2>
        <p className='form-subheading'>Sign in to manage your Harambee campaigns.</p>
        
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input 
              type='email' 
              id='email'
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              placeholder='you@organization.com'
              required 
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              id='password'
              name='password' 
              value={formData.password} 
              onChange={handleChange} 
              placeholder='••••••••'
              required 
            />
          </div>

          <button type='submit' className='btn btn-primary btn-full-width'>
            Sign In
          </button>
        </form>

        <p className='form-footer-text'>
          Don't have an account?{' '}
          <a onClick={() => navigateTo('orgRegistration')}>Sign Up</a>
        </p>

        <a onClick={() => navigateTo('landing')} className='back-link'>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default OrgLogin;