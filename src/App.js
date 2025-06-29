import React, { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import { fetchData } from './api';

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    fetchData(query);
  };

  return (
    <div className="container">
      <img src="/logo.jpg" alt="Logo" className="logo" />

      <div className="search-section">
        <div className="tagline">Vector Search</div>

        <div className="search-box">
          <div className="icon">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="triangle-right"></div>
      <div className="rectangle-top"></div>
      <div className="rectangle-bottom"></div>
    </div>
  );
}

export default App;
