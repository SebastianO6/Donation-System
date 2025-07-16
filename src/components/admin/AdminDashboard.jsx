import React, { useState } from 'react';
import './AdminDashboard.css'

function AdminDashboard({ navigateTo }) {
  const [organizations, setOrganizations] = useState([
    { id: 1, name: 'Matter Heart Run', email: 'mhr@example.com', donations: 15, total: 125000 },
    { id: 2, name: 'Cancer Foundation', email: 'cf@example.com', donations: 8, total: 75000 },
  ]);

  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Harambee Admin</h3>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</a>
          <a href="#" className={activeTab === 'organizations' ? 'active' : ''} onClick={() => setActiveTab('organizations')}>Organizations</a>
          <a href="#" className={activeTab === 'donations' ? 'active' : ''} onClick={() => setActiveTab('donations')}>Donations</a>
          <a href="#" className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>Settings</a>
        </nav>
        <div className="sidebar-footer">
          <button onClick={() => navigateTo('landing')}>Logout</button>
        </div>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Welcome, Admin!</h1>
          <div className="header-actions">
            <button className="btn-add-org">Add New Organization</button>
          </div>
        </header>
        <div className="content">
          <div className="organizations-section">
            <h2>Organizations Management</h2>
            <table className="org-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Donations Count</th>
                  <th>Total Received</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {organizations.map(org => (
                  <tr key={org.id}>
                    <td>{org.id}</td>
                    <td>{org.name}</td>
                    <td>{org.email}</td>
                    <td>{org.donations}</td>
                    <td>KSh {org.total.toLocaleString()}</td>
                    <td>
                      <button className="btn-edit">Edit</button>
                      <button className="btn-delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;