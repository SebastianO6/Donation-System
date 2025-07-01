import React, { useState } from 'react'

function OrgLogin({navigateTo , setOrgName}) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    setOrgName('Matter Heart Run')
    navigateTo('dashboard')

  }
  return (
    <div className='org-login'>
      <h2>Harambee Donation System</h2>
      <h3>Login Organization</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email</label>
          <input 
          type='email' 
          name='email' 
          value={formData.emailemail} 
          onChange={handleChange} 
          required
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input 
          type='password' 
          name='password' 
          value={formData.password} 
          onChange={handleChange} 
          required
          />
        </div>
        <button type='submit' onClick={handleSubmit}>Login</button>
        <p><span onClick={() => navigateTo('orgRegistration')}>Dont have an account? </span></p>
        <button type='button' onClick={() => navigateTo('landing')}>Back</button> 
      </form>
    </div>
  )
}

export default OrgLogin