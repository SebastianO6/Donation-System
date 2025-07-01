import React from 'react'

function Dashboard({navigateTo, orgName}) {
  const donations = [
    {donorName: 'Bill.Sebastian', amount: '5000', date: '2020-20-15'},
    {donorName: 'Joe.Kim', amount: '8000', date: '2020-20-19'},
  ];
  const totalDonations = donations.reduce((sum, donation) => sum + parseInt(donations.amount), 0)

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <h2>Harambee Donation System</h2>
      <p>Welcome {orgName}</p>
      <p>Total Donations: {totalDonations}</p>

      <h3>Recent Donations</h3>
      <table>
        <thead>
          <tr>
            <th>Donar Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation ,index) => (
            <tr key={index}>
              <td>{donation.donorName}</td>
              <td>{donation.amount}</td>
              <td>{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard