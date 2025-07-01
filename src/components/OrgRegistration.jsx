import React, { useState } from 'react'

function OrgRegistration({navigateTo}) {
  const [formData, setFormData ] = useState({
    orgName: '',
    email: '',
    password: '',
    category: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Organization registered successfully!')
    navigateTo('dashboard')
  }
  return (
    <div className='org-registration'>
      <h2>Harambee Donation System</h2>
      <p>Register your organization</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Org Name</label>
          <input type='text' 
          name='orgName' 
          value={formData.orgName} 
          onChange={handleChange} 
          required
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' 
          name='email' 
          value={formData.email} 
          onChange={handleChange} 
          required 
          />
        </div>
                <div className='form-group'>
          <label>Password</label>
          <input type='password' 
          name='password' 
          value={formData.password} 
          onChange={handleChange} 
          required 
          />
        </div>
        <div className='form-group'>
          <label>Category</label>
          <input type='text' 
          name='category' 
          value={formData.category} 
          onChange={handleChange} 
          required 
          />
        </div>

        <button type='submit'>Register</button>
        <p>Already have an account? <span onClick={() => navigateTo('orgLogin')}>Login</span></p>

        <button type='submit' onClick={() => navigateTo('landing')}>Back</button>
      </form>
    </div>
  )
}

export default OrgRegistration