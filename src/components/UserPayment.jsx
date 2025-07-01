import React, { useState, useEffect } from 'react';

const mockOrganizations = [
  { 
    id: 1, 
    name: 'Greenfield Neighborhood Org.', 
    campaignTitle: 'Build the Greenfield Community Garden', 
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' 
  },
  { 
    id: 2, 
    name: 'Nairobi Animal Welfare', 
    campaignTitle: 'Rescue and Shelter for Stray Animals', 
    image: 'https://images.unsplash.com/photo-1597793013878-31393d25290c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' 
  },
  { 
    id: 3, 
    name: 'Kenya Education Fund', 
    campaignTitle: 'Sponsor a Child\'s High School Education', 
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
  },
  {
    id: 4,
    name: 'Kibera Tech Hub',
    campaignTitle: 'Coding Bootcamp for Kibera Youths',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
  }
];

function UserPayment({ navigateTo }) {
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrgs, setFilteredOrgs] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    amount: '',
  });
  
  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = mockOrganizations.filter(org =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOrgs(results);
      setIsDropdownVisible(true);
    } else {
      setFilteredOrgs([]);
      setIsDropdownVisible(false);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
        setSelectedOrg(null);
    }
  };

  const handleOrgSelect = (org) => {
    setSelectedOrg(org);
    setSearchTerm(org.name);
    setIsDropdownVisible(false);
  };
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmountPreset = (presetAmount) => {
    setFormData(prev => ({ ...prev, amount: presetAmount }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOrg) {
        alert("Please select an organization to support.");
        return;
    }
    console.log('Processing donation:', { ...formData, organization: selectedOrg.name });
    alert(`Asante sana for your generous donation of Ksh ${formData.amount} to ${selectedOrg.name}!`);
    navigateTo('landing'); 
  };
  
  const amountPresets = [500, 1000, 2000, 5000];
  const isFormDisabled = !selectedOrg;

  return (
    <div className='form-page-container'>
      <div className='form-card donation-page-card'>
        <div className='donation-form-layout'>
          <div className='form-section'>
            <h2>Support a Cause</h2>
            <p className='form-subheading'>Your contribution makes an Impact. Asante Sana!</p>
            
            <form onSubmit={handleSubmit}>
              <div className='form-group search-container'>
                <label htmlFor='orgSearch'>Search for an Organization</label>
                <input 
                  type='text' 
                  id='orgSearch'
                  name='orgSearch' 
                  value={searchTerm} 
                  onChange={handleSearchChange} 
                  placeholder='Start typing organization name...'
                  autoComplete="off"
                />
                {isDropdownVisible && filteredOrgs.length > 0 && (
                  <ul className='search-results'>
                    {filteredOrgs.map(org => (
                      <li key={org.id} onClick={() => handleOrgSelect(org)}>
                        {org.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <fieldset disabled={isFormDisabled}>
                <div className='form-group'>
                  <label htmlFor='fullName'>Your Full Name</label>
                  <input 
                    type='text' 
                    id='fullName'
                    name='fullName' 
                    value={formData.fullName} 
                    onChange={handleFormChange} 
                    placeholder='e.g., Juma Otieno'
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>Safaricom M-Pesa Number</label>
                  <input 
                    type='tel' 
                    id='phone'
                    name='phone' 
                    value={formData.phone} 
                    onChange={handleFormChange} 
                    placeholder='e.g., 0722 123 456'
                    required
                  />
                </div>

                <div className='form-group'>
                  <label>Chagua Kiasi (Choose an Amount)</label>
                  <div className='amount-presets'>
                    {amountPresets.map(preset => (
                      <button 
                        key={preset} 
                        type='button' 
                        className={`amount-preset-btn ${formData.amount === preset ? 'selected' : ''}`}
                        onClick={() => handleAmountPreset(preset)}
                      >
                        Ksh {preset}
                      </button>
                    ))}
                  </div>
                  <div className='custom-amount-wrapper'>
                    <span>Ksh</span>
                    <input 
                      type='number' 
                      name='amount' 
                      value={formData.amount} 
                      onChange={handleFormChange} 
                      placeholder='Or enter custom amount'
                      required 
                      min="50"
                    />
                  </div>
                </div>
              </fieldset>

              <button type='submit' className='btn btn-primary btn-full-width' disabled={isFormDisabled}>
                Donate Ksh {formData.amount || '0'} Securely
              </button>
            </form>
             <a onClick={() => navigateTo('landing')} className='back-link'>
              ← Cancel and return to site
            </a>
          </div>

          <div className='summary-section'>
            {selectedOrg ? (
              <>
                <img src={selectedOrg.image} alt={selectedOrg.campaignTitle} className='summary-image' />
                <div className='summary-content'>
                  <p>You are supporting:</p>
                  <h4>{selectedOrg.campaignTitle}</h4>
                  <p className='summary-org'>by {selectedOrg.name}</p>
                  <hr className='summary-divider' />
                  <div className='summary-total'>
                    <span>Total Donation</span>
                    <span>Ksh {formData.amount || '0.00'}</span>
                  </div>
                </div>
              </>
            ) : (
              <div className='summary-placeholder'>
                <p>Please select an organization to see the campaign details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPayment;