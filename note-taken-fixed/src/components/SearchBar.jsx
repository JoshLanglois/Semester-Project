import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [tempInput, setTempInput] = useState(searchTerm);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(tempInput);
    navigate('/browse');
  };

    useEffect(() => {
    setTempInput('');
    setSearchTerm('');
  }, [location, setSearchTerm]);

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search notes..."
        value={tempInput}
        onChange={(e) => setTempInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}