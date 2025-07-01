import React, { useState } from 'react'

function UserPayment({navigateTo}) {
  const [formData, setFormData ] = useState({
    organizationName: '',
    fullName: '',
    phone: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name] : value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Donation submitted! Thankyou.')
    navigateTo('landing')
  } 
  return (
    <div className='user-payment'>
      <h3>Harambee Donation System</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Organization Name</label>
          <input 
          type='text' 
          name='organizationName' 
          value={formData.organizationName} 
          onChange={handleChange} 
          required
          />
         </div>
        <div className='form-group'>
          <label>Full Name</label>
          <input type='text' 
          name='fullName' 
          value={formData.fullName} 
          onChange={handleChange} 
          required
          />
          </div>
        <div className='form-group'>
          <label>Phone</label>
          <input 
          type='tel' 
          name='phone' 
          value={formData.phone} 
          onChange={handleChange} 
          required
          />  
        </div> 
        <div className='form-group'>
          <label>Amount</label>
          <input 
          type='number' 
          name='amount' 
          value={formData.amount} 
          onChange={handleChange} 
          required
          />
        </div>
        <button type='submit'>Donate</button>
        <button type='button' onClick={() => navigateTo('landing')}>Back</button>
      </form>
    </div>
  )
}

export default UserPayment