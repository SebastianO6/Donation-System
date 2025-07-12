import React, { useState } from 'react';

function OrgRegistration({ navigateTo }) {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    password: '',
    category: '',
    paybillNumber: '',
    accountNumber: '',
    orgPhoto: null,
    city: '',
    targetAmount: '',
    duration: 15,
    referallCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      orgPhoto: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering organization:', formData);
    alert('Organization registered successfully!');
    navigateTo('dashboard'); 
  };

  return (
    <div className='form-page-container'>
      <div className='form-card'>
        <h3>Start an Harambee</h3>
        <p className='form-subheading'>Register Your Harambee below</p>
        
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

          <div className='form-group'>
            <label htmlFor='orgPhoto'>Organization Photo</label>
            <input 
              type='file' 
              id='orgPhoto' 
              name='orgPhoto' 
              onChange={handleFileChange} 
              accept='image/*' 
            />
          </div>

          <div className='form-group'>
            <label htmlFor='paybillNumber'>Mpesa Pabill Number</label>
            <input 
              type='number' 
              id='paybillNumber' 
              name='paybillNumber' 
              value={formData.paybillNumber}
              onChange={handleChange}
              placeholder='eg. 1234' 
              required
            /> 
          </div>

          <div className='form-group'>
            <label htmlFor='accountNumber'>Account number</label>
            <input 
              type='text' 
              id='accountNumber' 
              name='accountNumber' 
              value={formData.accountNumber} 
              onChange={handleChange}
              placeholder='eg., 1234' 
              required
            /> 
          </div>

          <div className='form-group'>
            <label htmlFor='city'>city</label>
            <input 
              type='text' 
              id='city' 
              name='city' 
              value={formData.city} 
              onChange={handleChange}
              placeholder='eg .,Nairobi' 
              required
            /> 
          </div>

          <div className='form-group'>
            <label htmlFor='targetAmount'>Target Amount (KSH)</label>
            <input 
              type='number' 
              id='targetAmount' 
              name='targetAmount' 
              value={formData.targetAmount}
              onChange={handleChange}
              placeholder='eg., 200000' 
              required
            /> 
          </div>
           
          <div className='form-group'>
            <label htmlFor='duration'>Duration (days)</label>
            <select 
              name="duration" 
              id="duration" 
              value={formData.duration} 
              onChange={handleChange} 
              required
              >
              <option value="15">15 days</option>
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="100">100 days</option>
            </select>  
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