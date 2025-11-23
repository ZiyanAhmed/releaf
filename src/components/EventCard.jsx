import './EventCard.css'

const EventCard = ({ event }) => {
  const volunteerPercentage = (event.volunteers / event.maxVolunteers) * 100
  const isFull = event.volunteers >= event.maxVolunteers

  return (
    <div className="event-card">
      <div className="event-image-container">
        <img src={event.image} alt={event.title} className="event-image" />
        <div className={`event-type-badge ${event.type === 'Volunteer' ? 'volunteer' : 'gathering'}`}>
          {event.type}
        </div>
      </div>

      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        
        <div className="event-meta">
          <div className="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {event.time}</span>
          </div>
          <div className="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{event.location}</span>
          </div>
          <div className="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>{event.organizer}</span>
          </div>
        </div>

        <p className="event-description">{event.description}</p>

        <div className="volunteer-progress">
          <div className="progress-header">
            <span className="volunteer-count">
              {event.volunteers} / {event.maxVolunteers} volunteers
            </span>
            {isFull && <span className="full-badge">Full</span>}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: `${Math.min(volunteerPercentage, 100)}%`,
                backgroundColor: isFull ? '#f44336' : '#10B981'
              }}
            />
          </div>
        </div>

        <div className="event-actions">
          <button className={`action-button ${isFull ? 'disabled' : 'primary'}`} disabled={isFull}>
            {isFull ? 'Event Full' : 'Join Event'}
          </button>
          <button className="action-button secondary">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard

