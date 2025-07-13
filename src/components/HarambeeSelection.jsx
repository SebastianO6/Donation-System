import React from 'react';
import { FaUser, FaBuilding } from 'react-icons/fa';
import './HarambeeSelection.css';

function HarambeeTypeSelection({ navigateTo }) {
  return (
    <div className="type-selection-container">
      <div className="type-selection-header">
        <h1 className="type-selection-title">Start a Harambee</h1>
        <p className="type-selection-subtitle">Choose the type of Harambee you want to create:</p>
      </div>

      <div className="selection-options-grid">
        <div className="option-card" onClick={() => navigateTo('userRegistration')}>
          <div className="option-card-icon">
            <FaUser size={48} />
          </div>
          <h3 className="option-card-title">Personal Fundraiser</h3>
          <p className="option-card-description">For individuals raising money for personal causes</p>
        </div>

        <div className="option-card" onClick={() => navigateTo('orgRegistration')}>
          <div className="option-card-icon">
            <FaBuilding size={48} />
          </div>
          <h3 className="option-card-title">Organization</h3>
          <p className="option-card-description">For registered organizations and charities</p>
        </div>
      </div>

      <div className="back-button-container">
        <button
          className="btn btn-back"
          onClick={() => navigateTo('landing')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default HarambeeTypeSelection;