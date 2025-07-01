import React from 'react'

function LandingPage( {navigateTo} ) {
  return (
    <div className='landing-page'>
      <h1>Welcome to harambee system</h1>
      <div className='options'>
        <div className='option-card-1' onClick={() => navigateTo('orgRegistration')}>
          <h3>Interested in Starting an Harambee?</h3>
          <p><strong>Register </strong>or <strong>Login</strong> your organization</p>
        </div>
        <div className='option-card-2' onClick={() => navigateTo('userPayment')}>
          <h3>For Donors</h3>
          <p>Proceed to make a donation</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage