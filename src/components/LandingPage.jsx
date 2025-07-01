import React from 'react';

// You can create a new CSS file for this component or add the CSS below to your existing one.
// import './LandingPage.css'; 

function LandingPage({ navigateTo }) {
  // Data for the featured campaigns. In a real app, this would come from an API.
  const featuredCampaigns = [
    {
      id: 1,
      title: 'Build the Greenfield Community Garden',
      organization: 'by Greenfield Neighborhood Org.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
      raised: 7500,
      goal: 10000,
    },
    {
      id: 2,
      title: 'New Books for the Westside Library',
      organization: 'by Friends of the Library',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
      raised: 4750,
      goal: 5000,
    },
    {
      id: 3,
      title: 'Uniforms for the Youth Soccer Team',
      organization: 'by Riverside Youth Sports',
      image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
      raised: 1200,
      goal: 3000,
    },
  ];

  return (
    <div className='new-landing-page'>
      {/* 1. Hero Section */}
      <header className='hero-section'>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1>Unite for Change. Ignite Your Community.</h1>
          <p className='hero-subtitle'>
            "Harambee" means to pull together. We provide the platform for you to launch or support projects that make a real, collective impact.
          </p>
          <div className='hero-buttons'>
            <button className='btn btn-primary' onClick={() => navigateTo('orgRegistration')}>
              Start a Harambee
            </button>
            <button className='btn btn-secondary' onClick={() => navigateTo('userPayment')}>
              Find a Harambee to Support
            </button>
          </div>
        </div>
      </header>

      {/* 2. Info Section */}
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
            <button className='btn btn-primary' onClick={() => navigateTo('orgRegistration')}>
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