import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../../Products/Products';
import Recommond from '../../Recommond/Recommond';
import Sidebar from '../../Sidebar/Sidebar';
import TableElement from '../../components/tableelement';
import Spinner from '../../components/spinner'
import './search.css';

// this the refactored code related to searching and filtering results that was in app.js
// put the css for the table in search.css ?
function Search() {

  const [loading, setLoading] = useState(false);
  const [emissionFactors, setEmissionFactors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetching emission factors asynchronously
  useEffect(() => {
    async function fetchEmissionFactors() {
      try {
        const axiosInstance = axios.create({
          baseURL: 'https://ec2-54-226-167-211.compute-1.amazonaws.com',
          httpsAgent: {
            rejectUnauthorized: false, // Ignore SSL certificate validation errors
          },
        });
        const response = await axiosInstance.get("/api/emissionfactor/?format=json");
        const data = JSON.parse(JSON.stringify(response.data.data));
        setEmissionFactors(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchEmissionFactors();
  }, []);

  // const preloader = document.querySelector('.preloader');
  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   }
  // }, [loading]);

  // if (loading) return <Spinner />
  
  // ----------- Input Filter -----------
  const params = new URLSearchParams(window.location.search)
  let query = params.get('q') ? params.get('q') : '';

  const filteredItems = emissionFactors.filter(
    (product) => emissionFactors?.product_name?.toLowerCase().indexOf(query.toLowerCase())!== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredDataBeta(emissionFactors, selected, query) {
    let filteredProducts = emissionFactors;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ pollutant, emission_quantity_units, product_name, date_recorded_year, title }) =>
          pollutant === selected ||
          emission_quantity_units === selected ||
          product_name === selected ||
          date_recorded_year == selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({product_name, emission_quantity, emission_quantity_units, pollutant, date_recorded_year, additional_information, technical_refrence }) => (
        <TableElement
          key={Math.random()}
          title={product_name}
          star={emission_quantity}
          reviews={emission_quantity_units}
          prevPrice={pollutant}
          yearRecorded={date_recorded_year}
          newPrice={additional_information}
          technicalReference={technical_refrence}
        />
      )
    );
  }
  
  const resultBeta = filteredDataBeta(emissionFactors, selectedCategory, query);
  const resultsBetaLength = resultBeta.length

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Recommond handleClick={handleClick} length = {resultsBetaLength}/>
      <Products result={resultBeta} />
    </>
  );
}

export default Search;
