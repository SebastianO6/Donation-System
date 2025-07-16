import React from 'react';

function Dashboard({ navigateTo }) {
  const orgName = "Greenfield Neighborhood Org.";
  const totalDonations = 13000;
  const recentDonations = [
    { id: 1, donorName: 'Bill Sebastian', amount: 5000, date: '2024-07-15' },
    { id: 2, donorName: 'Joe Kim', amount: 8000, date: '2024-07-19' },
    { id: 3, donorName: 'Aisha Williams', amount: 2500, date: '2024-07-22' },
    { id: 4, donorName: 'Maria Garcia', amount: 10000, date: '2024-07-25' },
  ];
  const donorCount = new Set(recentDonations.map(d => d.donorName)).size;
  const averageDonation = totalDonations / donorCount;

  return (
    <div className='dashboard-layout'>
      <aside className='sidebar'>
        <div className='sidebar-header'>
          <h3>Harambee</h3>
        </div>
        <nav className='sidebar-nav'>
          <a href='#' className='nav-item active'>Dashboard</a>
          <a href='#' className='nav-item'>Campaigns</a>
          <a href='#' className='nav-item'>Donations</a>
          <a href='#' className='nav-item'>Settings</a>
          <a onClick={() => navigateTo('landing')} className='nav-item logout'>Log Out</a>
        </nav>
      </aside>

      <main className='main-content'>
        <header className='dashboard-header'>
          <h1>Dashboard</h1>
          <div className='header-actions'>
            <span className='welcome-message'>Welcome, {orgName}</span>
            <button className='btn btn-primary' onClick={() => alert('Starting new campaign!')}>
              + New Campaign
            </button>
          </div>
        </header>

        <section className='stats-grid'>
          <div className='stat-card'>
            <h4>Total Donations</h4>
            <p className='stat-value'>${totalDonations.toLocaleString()}</p>
          </div>
          <div className='stat-card'>
            <h4>Total Donors</h4>
            <p className='stat-value'>{donorCount}</p>
          </div>
          <div className='stat-card'>
            <h4>Average Donation</h4>
            <p className='stat-value'>${averageDonation.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          </div>
        </section>

        <section className='recent-donations-card'>
          <h3>Recent Donations</h3>
          <table className='donations-table'>
            <thead>
              <tr>
                <th>Donor Name</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentDonations.map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.donorName}</td>
                  <td className='amount'>${donation.amount.toLocaleString()}</td>
                  <td>{new Date(donation.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;