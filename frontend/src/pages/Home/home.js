import { useState } from "react";
import "./home.css";
import ReliableSources from '../../components/ReliableSources/ReliableSources';
import * as THREE from 'three';


function Home() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    window.history.pushState(null, "", `/search?q=${query}`);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="home">
      <div className="platform-info">
        <h1>BSI Emission Factors Database</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Emission Factors"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="additional-info">
        <h2>What is the BSI EF Database?</h2>
        <p>This is a comprehensive platform that allows you to access and contribute to a vast database of emission factors. </p>
        <br></br>
      </div>
      <div className="reliable-sources">
        <ReliableSources />
      </div>
    </div>
  );
}

export default Home;
