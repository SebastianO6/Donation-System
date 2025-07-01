import React, { useState } from 'react';

function OrgRegistration({ navigateTo }) {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    password: '',
    category: ''
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
    console.log('Registering organization:', formData);
    alert('Organization registered successfully!');
    navigateTo('dashboard'); 
  };

  return (
    <div className='form-page-container'>
      <div className='form-card'>
        <h2>Create Your Organization's Account</h2>
        <p className='form-subheading'>Join our community of changemakers. Let's get started!</p>
        
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='orgName'>Organization Name</label>
            <input 
              type='text' 
              id='orgName'
              name='orgName' 
              value={formData.orgName} 
              onChange={handleChange} 
              placeholder='e.g., Greenfield Neighborhood Org.'
              required
            />
          </div>
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
          <div className='form-group'>
            <label htmlFor='category'>Category</label>
            <input 
              type='text' 
              id='category'
              name='category' 
              value={formData.category} 
              onChange={handleChange} 
              placeholder='e.g., Community, Education, Sports'
              required 
            />
          </div>

          <button type='submit' className='btn btn-primary btn-full-width'>
            Create Account
          </button>
        </form>

        <p className='form-footer-text'>
          Already have an account?{' '}
          <a onClick={() => navigateTo('orgLogin')}>Login</a>
        </p>

        <a onClick={() => navigateTo('landing')} className='back-link'>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default OrgRegistration;