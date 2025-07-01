import React, { useState, useEffect } from 'react';

function UserPayment({ navigateTo }) {
  const campaignDetails = {
    title: 'Build the Greenfield Community Garden',
    organization: 'Greenfield Neighborhood Org.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
  };
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmountPreset = (presetAmount) => {
    setFormData(prev => ({ ...prev, amount: presetAmount }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Processing donation:', formData);
    alert(`Thank you for your generous donation of $${formData.amount}!`);
    navigateTo('landing'); 
  };
  
  const amountPresets = [25, 50, 100, 250];

  return (
    <div className='form-page-container'>
      <div className='form-card donation-page-card'>
        <div className='donation-form-layout'>
          <div className='form-section'>
            <h2>Support this Cause</h2>
            <p className='form-subheading'>Your contribution makes a real difference. Thank you!</p>
            
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='fullName'>Full Name</label>
                <input 
                  type='text' 
                  id='fullName'
                  name='fullName' 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  placeholder='e.g., Jane Doe'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='phone'>Mpesa Phone Number</label>
                <input 
                  type='tel' 
                  id='phone'
                  name='phone' 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder='(+254) 720 501 759'
                />
              </div>

              <div className='form-group'>
                <label>Choose an Amount</label>
                <div className='amount-presets'>
                  {amountPresets.map(preset => (
                    <button 
                      key={preset} 
                      type='button' 
                      className={`amount-preset-btn ${formData.amount === preset ? 'selected' : ''}`}
                      onClick={() => handleAmountPreset(preset)}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className='custom-amount-wrapper'>
                  <span>$</span>
                  <input 
                    type='number' 
                    name='amount' 
                    value={formData.amount} 
                    onChange={handleChange} 
                    placeholder='Or enter custom amount'
                    required 
                    min="1"
                  />
                </div>
              </div>

              <button type='submit' className='btn btn-primary btn-full-width'>
                Donate ${formData.amount || '0'} Securely
              </button>
            </form>
             <a onClick={() => navigateTo('landing')} className='back-link'>
              ← Cancel and return to site
            </a>
          </div>

          <div className='summary-section'>
            <img src={campaignDetails.image} alt={campaignDetails.title} className='summary-image' />
            <div className='summary-content'>
              <p>You are supporting:</p>
              <h4>{campaignDetails.title}</h4>
              <p className='summary-org'>by {campaignDetails.organization}</p>
              <hr className='summary-divider' />
              <div className='summary-total'>
                <span>Total Donation</span>
                <span>${formData.amount || '0.00'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPayment;