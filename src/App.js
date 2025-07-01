import './App.css';
import React, { useState } from 'react';
import LandingPage from './components/LandingPage'
import UserPayment from './components/UserPayment'
import OrgRegistration from './components/OrgRegistration'
import OrgLogin from './components/OrgLogin'
import Dashboard from './components/Dashboard'



function App() {
  const [currentPage, setCurrentPage ] = useState('landing')
  const [orgName, setOrgName ] = useState('')

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className='app'>
      {currentPage === 'landing' && <LandingPage navigateTo = {navigateTo} />}
      {currentPage === 'userPayment' && <UserPayment navigateTo = {navigateTo}/>}
      {currentPage === 'orgRegistration' && <OrgRegistration navigateTo = {navigateTo}/>}
      {currentPage === 'orgLogin' && <OrgLogin navigateTo = {navigateTo}/>}
      {currentPage === 'dashboard' && <Dashboard navigateTo = {navigateTo}/>}
    </div>
  );
 }

export default App;
