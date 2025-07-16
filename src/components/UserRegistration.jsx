import React, { useState } from 'react'

function UserRegistration({navigateTo}) {

    const [formData, setFormData] = useState({
        donationTitle: '',
        email: '',
        password: '',
        idPhoto: null,
        payBill: '',
        accountNumber: '',
        profilePic: null,
        city: '',
        targetAmount: '',
        duration: 15,
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))     
    }

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            profilePic: e.target.files[0]
        }))
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form data submitted", formData)
        alert('User registered Successfully')
        navigateTo('dashboard')
    }
  return (
    <div className='form-page-container'>
        <div className="form-card">
            <h3>Start an Harambee</h3>
            <p className="form-subheading">Register Harambee below</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='donationTile'>Donation Name</label>
                        <input 
                            type='text' 
                            id='donationTitle' 
                            name='donationTitle' 
                            value={formData.donationTitle}
                            onChange={handleChange} 
                            placeholder="eg .,Mike's Cancer Treatement" 
                            required
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder='eg .,user@gmail.com' 
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">
                        <input 
                            type="password" 
                            id='password' 
                            name='password' 
                            value={formData.password} 
                            onChange={handleChange} 
                            placeholder='••••••••' 
                            required
                        />
                    </label>

                    <div className="form-group">
                        <label htmlFor="idPhoto">Upload Id photo</label>
                        <input 
                            type='file' 
                            id='idPhoto' 
                            name='idPhoto' 
                            onChange={handleFileChange} 
                            accept='image/*' 
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="payBill">Mpesa Paybill Number</label>
                        <input type='number' 
                            id='payBill' 
                            name='payBill' 
                            value={formData.payBill} 
                            onChange={handleChange} 
                            placeholder='eg., 1234' 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="accountNumber">Account Number</label>
                        <input type='text' 
                            id='accountNumber' 
                            name='accountNumber' 
                            value={formData.accountNumber} 
                            onChange={handleChange} 
                            placeholder='eg., AFYA / 1234' 
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="profilePic">Upload your photo</label>
                        <input 
                            type='file' 
                            id='profilePic' 
                            name='profilePic' 
                            accept='image/*' 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input 
                            type='text' 
                            id='city' 
                            name='city' 
                            value={formData.city} 
                            onChange={handleChange} 
                            placeholder='eg.,Nairobi'
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="targetAmount">Target Amount (KSH)</label>
                        <input 
                            type='number' 
                            id='targetAmount' 
                            name='targetAmount' 
                            value={formData.targetAmount} 
                            onChange={handleChange} 
                            placeholder='eg.,20000' 
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="duration">Duration</label>
                        <select 
                            id='duration' 
                            name='duration' 
                            value={formData.duration} 
                            onChange={handleChange}
                        >
                            <option value='15'>15 days</option>
                            <option value='30'>30 days</option> 
                            <option value='60'>60 days</option>  
                            <option value='100'>100 days</option> 
                        </select> 
                    </div>
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
  )
}

export default UserRegistration