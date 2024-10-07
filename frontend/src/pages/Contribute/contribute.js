import React, { useState, useEffect} from 'react';
import './contribute.css'; 
import axios from 'axios';
import Login from '../Auth/login';
import SelectDropdown from './selectDropdown';

const Contribute = ({ darkMode, isLoggedIn, onLogin, setCurrentPage }) => {
  const initialFormData = {
    emission_quantity: '',
    emission_quantity_units: '',
    pollutant: '',
    datasource: null,
    geographicalscope: null,
    emissioncategory: null,
    co2_or_co2_equivalent: null,
    technical_refrence: '',
    sector: null,
  };
  const [formData, setFormData] = useState(initialFormData);

  const data = {
    dataSources: [
      { id: 1, name: 'IPCC' },
      { id: 2, name: 'SYKE Finnish Environment Institute' },
      { id: 3, name: 'Statistics Finland' }
    ],
    sector: [
      { id: 1, name: 'Food and beverage' },
      { id: 2, name: 'Energy' }
    ],
    co2Values: [
      { id: 1, name: 'CO2' },
      { id: 2, name: 'CO2 Equivalent' }
    ]
  };

  const [emissionCategories, setEmissionCategories] = useState([]);
  const [geographicalScopes, setGeographicalScopes] = useState([]);

  useEffect(() => {
    // Fetch data from the APIs
    const fetchData = async () => {
      try {
        const [categoriesResponse, scopesResponse] = await Promise.all([
          axios.get('https://ec2-54-226-167-211.compute-1.amazonaws.com/api/emissioncategory/'), // Change the URL to your GET API endpoint for emission categories
          axios.get('https://ec2-54-226-167-211.compute-1.amazonaws.com/api/geographicalscope/'), // Change the URL to your GET API endpoint for geographical scopes
        ]);

        setEmissionCategories(categoriesResponse.data.data);
        setGeographicalScopes(scopesResponse.data.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      } 
    };

    fetchData();
  }, []);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await axios.post('https://ec2-54-226-167-211.compute-1.amazonaws.com/api/emissionfactor/', formData); // Change the URL to your POST API endpoint
      console.log('Form submitted:', response.data);
      setShowSuccessMessage(true);
      setFormData(initialFormData);
      setTimeout(() => setShowSuccessMessage(false), 3000);

      // Handle successful submission, e.g., show a success message or clear the form
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state, e.g., show an error message
    }
  };

  const emissionCategoryOptions = emissionCategories.map((category) => ({
    value: category.emission_category_id,
    label: category.sub_category,
  }));

  const geographicalScopeOptions = geographicalScopes.map((scope) => ({
    value: scope.geographical_scope_id,
    label: scope.country,
  }));

  const sectorOptions = data.sector.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const dataSourcesOptions = data.dataSources.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const co2Options = data.co2Values.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  const currentPage=window.location.pathname;

  return (
    <div>
      {!isLoggedIn ? (
         <div className={`contribute-container ${darkMode ? 'dark' : ''}`}>
       <div className="notification-container">
            <p>Please log in to contribute Emission Factor data</p>

            <Login  darkMode={darkMode} onLogin={onLogin} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
            </div>

      ) : (
          <div className={`contribute-container ${darkMode ? 'dark' : ''}`}>
            <div className="form-wrapper">
              <h2 className="form-title">Submit New Emission Factor</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="emission_quantity">Emission Factor Value:</label>
                  <input
                    type="text"
                    id="emission_quantity"
                    name="emission_quantity"
                    value={formData.emission_quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emission_quantity_units">Emission Factor Unit:</label>
                  <input
                    type="text"
                    id="emission_quantity_units"
                    name="emission_quantity_units"
                    value={formData.emission_quantity_units}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pollutant">Pollutant:</label>
                  <input
                    type="text"
                    id="pollutant"
                    name="pollutant"
                    value={formData.pollutant}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sector">Sector:</label>
                  <SelectDropdown
                  id="sector"
                  name="sector"
                  value={formData.sector}//{sectorOptions.find(option => option.value === formData.sector)}
                  handleChange={handleChange}
                  options={sectorOptions}
                  maxMenuHeight={200} // This controls the height of the dropdown menu
                  placeholder="Select Sector"
                  isClearable={true}
                >
                </SelectDropdown>
                </div>
                <div className="form-group">
                  <label htmlFor="datasource">Data Source:</label>
                  <SelectDropdown
                  id="datasource"
                  name="datasource"
                  value={formData.datasource}//{dataSourcesOptions.find(option => option.value === formData.datasource)}
                  handleChange={handleChange}
                  options={dataSourcesOptions}
                  maxMenuHeight={200} // This controls the height of the dropdown menu
                  placeholder="Select Data Source"
                  isClearable
                >
                </SelectDropdown>
                </div>
                <div className="form-group">
                  <label htmlFor="geographicalscope">Region:</label>
                  <SelectDropdown
                  id="geographicalscope"
                  name="geographicalscope"
                  value={formData.geographicalscope}//{geographicalScopeOptions.find(option => option.value === formData.geographicalscope)}
                  handleChange={handleChange}
                  options={geographicalScopeOptions}
                  maxMenuHeight={200} // This controls the height of the dropdown menu
                  placeholder="Select Region"
                  isClearable
                >
                </SelectDropdown>
                </div>
                <div className="form-group">
                  <label htmlFor="emissioncategory">Emission Category:</label>
                  <div className="custom-dropdown">
                  <SelectDropdown
                  id="emissioncategory"
                  name="emissioncategory"
                  value={formData.emissioncategory}//{emissionCategoryOptions.find(option => option.value === formData.emissioncategory)}
                  handleChange={handleChange}
                  options={emissionCategoryOptions}
                  maxMenuHeight={200} // This controls the height of the dropdown menu
                  placeholder="Select Emission Category"
                  isClearable
                >
                </SelectDropdown>
                </div>
                </div>
                <div className="form-group">
                  <label htmlFor="co2_or_co2_equivalent">CO2 or CO2 Equivalent:</label>
                  <SelectDropdown
                  id="co2_or_co2_equivalent"
                  name="co2_or_co2_equivalent"
                  value={formData.co2_or_co2_equivalent}//{co2Options.find(option => option.value === formData.co2_or_co2_equivalent)}
                  handleChange={handleChange}
                  options={co2Options}
                  maxMenuHeight={200} // This controls the height of the dropdown menu
                  placeholder="Select CO2 or CO2 Equivalent"
                  isClearable
                >
                </SelectDropdown>
                </div>
                <div className="form-group">
                  <label htmlFor="technical_refrence">Technical Reference:</label>
                  <input
                    type="text"
                    id="technical_refrence"
                    name="technical_refrence"
                    value={formData.technical_refrence}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-submit">
                  <button type="submit" className="submit-button">Submit</button>
                </div>
              </form>
              {showSuccessMessage && (
            <p style={{ color: 'green', marginTop: '1rem' }}>Emission Factor submitted successfully!</p>
          )}
            </div>

            {/* Submission Status */}
            <div className="submission-status-wrapper">
              <h3 className="submission-status-title">Submission Status</h3>
              <div className="overflow-x-auto">
                <table className="submission-status-table">
                  <thead className="submission-status-table-header">
                    <tr>
                      <th>ID</th>
                      <th>Category</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*  submission */}
                    <tr>
                      <td>1</td>
                      <td>Milk</td>
                      <td>submitted</td>
                    </tr>
                    {/* Repeat the above block for each submission */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="leaderboard-wrapper">
              <h3 className="leaderboard-title">Leaderboard</h3>
              <ul className="leaderboard-list">
                <li className="leaderboard-item">
                  <div className="leaderboard-item-details">
                    <img className="leaderboard-item-avatar" src="https://placehold.co/100x100" alt="Contributor profile picture" />
                    <span>Contributor Name</span>
                  </div>
                  <div className="leaderboard-item-badges">
                    <span className="badge">10 Badges</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  )};
  </div>
  );
};

export default Contribute;
