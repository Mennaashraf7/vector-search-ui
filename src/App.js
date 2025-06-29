import React, { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import { fetchData } from './api';

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      const data = await fetchData(query);
      setResults(data);
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
            onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
            disabled={loading}
          />
          <button onClick={handleSearch} disabled={loading || !query.trim()}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        {error && <div className="error">{error}</div>}
        {results && (
          <div className="results">
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="triangle-right"></div>
      <div className="rectangle-top"></div>
      <div className="rectangle-bottom"></div>
    </div>
  );
}

export default App;
