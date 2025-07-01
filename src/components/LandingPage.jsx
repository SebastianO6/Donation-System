import React from 'react'

function LandingPage( {navigateTo} ) {
  return (
    <div className='landing-page'>
      <h1>Welcome to harambee system</h1>
      <div className='options'>
        <div className='option-card' onClick={() => navigateTo('orgRegistration')}>
          <h3>Register or Login</h3>
        </div>
        <div className='option-card' onClick={() => navigateTo('userPayment')}>
          <h3>For Donors</h3>
          <p>Proceed to make a donation</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage