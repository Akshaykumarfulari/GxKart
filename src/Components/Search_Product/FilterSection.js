import React, { useState } from 'react';

/**
 * This component is for displaying filter section 
 */
export default function FilterSection({ onFilterChange }) {
  const [filters, setFilters] = useState({
    filter50: false,
    filter40: false,
    filter30: false,
    filter20: false,
    filter10: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const applyFilters = () => {
    const selectedFilters = Object.keys(filters).filter((filter) => filters[filter]);
    onFilterChange(selectedFilters);
  };

  return (
    <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
      <h4 style={{ marginTop: '10px' }}>Filters</h4>
      <hr></hr>
      {Object.entries(filters).map(([filter, checked]) => (
        <div className="form-check mb-2" key={filter}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={checked}
            onChange={() => handleFilterChange(filter)}
          />
          <label className="form-check-label" htmlFor={filter}>
            {filter.replace('filter', '')}% or more
          </label>
        </div>
      ))}
      <button className="btn btn-primary btn-sm" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
}