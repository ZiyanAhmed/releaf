import './ParkCard.css'

const ParkCard = ({ park, onClose }) => {
  const getCrowdColor = (level) => {
    switch (level) {
      case 'low': return '#10B981'
      case 'moderate': return '#ff9800'
      case 'high': return '#f44336'
      default: return '#666'
    }
  }

  const getAmenityIcon = (amenity) => {
    const icons = {
      benches: '🪑',
      water: '💧',
      playground: '🛝',
      restroom: '🚻'
    }
    return icons[amenity] || '✓'
  }

  return (
    <div className="park-card">
      <button className="close-button" onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="park-image-container">
        <img src={park.image} alt={park.name} className="park-image" />
        <div className="park-badge" style={{ backgroundColor: park.shadeScore >= 70 ? '#10B981' : park.shadeScore >= 50 ? '#34D399' : '#A7F3D0' }}>
          {park.shadeScore}% Shade
        </div>
      </div>

      <div className="park-content">
        <h2 className="park-name">{park.name}</h2>

        <div className="park-stats">
          <div className="stat-item">
            <span className="stat-label">Crowd Level</span>
            <span className="stat-value" style={{ color: getCrowdColor(park.crowdLevel) }}>
              {park.crowdLevel.charAt(0).toUpperCase() + park.crowdLevel.slice(1)}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Safety Rating</span>
            <span className="stat-value">
              ⭐ {park.safetyRating}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Size</span>
            <span className="stat-value">
              {park.size.charAt(0).toUpperCase() + park.size.slice(1)}
            </span>
          </div>
        </div>

        <div className="amenities-section">
          <h3 className="section-title">Amenities</h3>
          <div className="amenities-list">
            {park.amenities.map((amenity, index) => (
              <span key={index} className="amenity-tag">
                {getAmenityIcon(amenity)} {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="park-actions">
          <button className="action-button primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get Directions
          </button>
          <button className="action-button secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            Save
          </button>
          <button className="action-button secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default ParkCard

