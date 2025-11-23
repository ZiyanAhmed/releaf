import { useState } from 'react'
import './SearchFilter.css'

const SearchFilter = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false)

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, searchQuery: e.target.value })
  }

  const handleFilterChange = (filterType, value) => {
    onFilterChange({ ...filters, [filterType]: value })
  }

  return (
    <div className="search-filter-container">
      <div className="search-bar">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search parks or locations..."
          value={filters.searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
          aria-label="Toggle filters"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          {Object.values(filters).some(v => v !== 'all' && v !== '') && (
            <span className="filter-badge"></span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div className="filter-group">
            <label>Shade Coverage</label>
            <div className="filter-options">
              <button
                className={`filter-option ${filters.shadeLevel === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('shadeLevel', 'all')}
              >
                All
              </button>
              <button
                className={`filter-option ${filters.shadeLevel === 'high' ? 'active' : ''}`}
                onClick={() => handleFilterChange('shadeLevel', 'high')}
              >
                High (70%+)
              </button>
              <button
                className={`filter-option ${filters.shadeLevel === 'medium' ? 'active' : ''}`}
                onClick={() => handleFilterChange('shadeLevel', 'medium')}
              >
                Medium (50-70%)
              </button>
              <button
                className={`filter-option ${filters.shadeLevel === 'low' ? 'active' : ''}`}
                onClick={() => handleFilterChange('shadeLevel', 'low')}
              >
                Low (&lt;50%)
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label>Park Size</label>
            <div className="filter-options">
              <button
                className={`filter-option ${filters.size === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('size', 'all')}
              >
                All
              </button>
              <button
                className={`filter-option ${filters.size === 'large' ? 'active' : ''}`}
                onClick={() => handleFilterChange('size', 'large')}
              >
                Large
              </button>
              <button
                className={`filter-option ${filters.size === 'medium' ? 'active' : ''}`}
                onClick={() => handleFilterChange('size', 'medium')}
              >
                Medium
              </button>
              <button
                className={`filter-option ${filters.size === 'small' ? 'active' : ''}`}
                onClick={() => handleFilterChange('size', 'small')}
              >
                Small
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchFilter

