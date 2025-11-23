import './ParkListSidebar.css'

const ParkListSidebar = ({ parks, onParkClick, selectedPark }) => {
  return (
    <div className="park-list-sidebar">
      <div className="sidebar-header">
        <h2>Nearby Parks</h2>
        <span className="park-count">{parks.length} found</span>
      </div>
      <div className="park-list">
        {parks.map((park) => (
          <div
            key={park.id}
            className={`park-list-item ${selectedPark?.id === park.id ? 'selected' : ''}`}
            onClick={() => onParkClick(park)}
          >
            <img src={park.image} alt={park.name} className="park-thumbnail" />
            <div className="park-item-content">
              <h3 className="park-item-name">{park.name}</h3>
              <div className="park-item-details">
                <span className="shade-indicator" style={{ 
                  backgroundColor: park.shadeScore >= 70 ? '#10B981' : park.shadeScore >= 50 ? '#34D399' : '#A7F3D0' 
                }}>
                  {park.shadeScore}% Shade
                </span>
                <span className="crowd-indicator" style={{
                  color: park.crowdLevel === 'low' ? '#10B981' : park.crowdLevel === 'moderate' ? '#ff9800' : '#f44336'
                }}>
                  {park.crowdLevel}
                </span>
              </div>
              <div className="park-item-amenities">
                {park.amenities.slice(0, 3).map((amenity, index) => (
                  <span key={index} className="amenity-icon">
                    {amenity === 'benches' ? '🪑' : amenity === 'water' ? '💧' : amenity === 'playground' ? '🛝' : '🚻'}
                  </span>
                ))}
                {park.amenities.length > 3 && (
                  <span className="amenity-more">+{park.amenities.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ParkListSidebar

