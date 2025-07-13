import React from 'react';
import './LandingPage.css';

function LandingPage({ navigateTo }) {
  return (
    <div className='new-landing-page'>
      <header className='hero-section'>
        <div className="admin-access">
          <button 
            className="admin-login-btn" 
            onClick={() => navigateTo('adminLogin')}
          >
            Admin Login
          </button>
        </div>

        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1>Unite for Change. Ignite Your Community.</h1>
          <p className='hero-subtitle'>
            "Harambee" means to pull together. We provide the platform for you to launch or support projects that make a real, collective impact.
          </p>
          <div className='hero-buttons'>
            <button className='btn btn-primary' onClick={() => navigateTo('harambeeTypeSelection')}>
              Start a Harambee
            </button>
            <button className='btn btn-secondary' onClick={() => navigateTo('userPayment')}>
              Find a Harambee to Support
            </button>
          </div>
        </div>
      </header>

      <section className='info-section'>
        <h2>What is a Harambee?</h2>
        <p className='info-intro'>
          Harambee is a Kenyan tradition of community self-help, where everyone pulls together to achieve a common goal. We bring this powerful spirit online, empowering you to create transparent, community-funded campaigns for the causes you care about most.
        </p>
        <div className='features-grid'>
          <div className='feature-item'>
            <h3>Collaborate</h3>
            <p>Rally friends, family, and neighbors around a shared vision.</p>
          </div>
          <div className='feature-item'>
            <h3>Empower</h3>
            <p>Launch projects that build, restore, and enrich your local community.</p>
          </div>
          <div className='feature-item'>
            <h3>Impact</h3>
            <p>Contribute directly to a cause and see the tangible results of your support.</p>
          </div>
        </div>
      </section>

      <section className='cta-section'>
        <h2>Ready to Make a Difference?</h2>
        <p>Whether you have an idea that needs support or you want to help a cause you believe in, your journey starts here.</p>
        <div className='cta-buttons'>
            <button className='btn btn-primary' onClick={() => navigateTo('harambeeTypeSelection')}>
              Start a Harambee
            </button>
            <button className='btn btn-dark' onClick={() => navigateTo('userPayment')}>
              Find a Harambee
            </button>
        </div>
      </section>

      <footer className='page-footer'>
        <p>© {new Date().getFullYear()} Harambee Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;