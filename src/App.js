import './App.css';
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import UserPayment from './components/UserPayment';
import OrgRegistration from './components/OrgRegistration';
import OrgLogin from './components/OrgLogin';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard'
import UserRegsitration from './components/UserRegistration';
import HarambeeTypeSelection from './components/HarambeeSelection';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [orgName, setOrgName] = useState('');
  const [adminLoggedIn, setAdminLoggedIn] = useState('')

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='app'>
      {currentPage === 'landing' && <LandingPage navigateTo={navigateTo} />}
      {currentPage === 'userPayment' && <UserPayment navigateTo={navigateTo} />}
      {currentPage === 'orgRegistration' && <OrgRegistration navigateTo={navigateTo} />}
      {currentPage === 'orgLogin' && (
        <OrgLogin 
          navigateTo={navigateTo} 
          setOrgName={setOrgName}  
        />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard 
          navigateTo={navigateTo} 
          orgName={orgName}  
        />
      )}
      {currentPage === 'adminLogin' && <AdminLogin navigateTo = {navigateTo} setAdminLoggedIn = {setAdminLoggedIn} />}
      {currentPage === 'adminDashboard' && <AdminDashboard navigateTo = {navigateTo} /> }
      {currentPage === 'harambeeTypeSelection' && <HarambeeTypeSelection navigateTo={navigateTo} /> }
      {currentPage === 'userRegistration' && <UserRegsitration navigateTo={navigateTo} /> }
    </div>
  );
}

export default App;