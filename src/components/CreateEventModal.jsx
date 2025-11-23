import { useState } from 'react'
import './CreateEventModal.css'

const CreateEventModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    type: 'Volunteer',
    description: '',
    maxVolunteers: 50
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEvent = {
      id: Date.now(),
      ...formData,
      volunteers: 0,
      organizer: 'You',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400'
    }
    onCreate(newEvent)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Event</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label>Event Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Tree Planting Drive"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Park name or address"
            />
          </div>

          <div className="form-group">
            <label>Event Type *</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="Volunteer">Volunteer</option>
              <option value="Community Gathering">Community Gathering</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe the event, what volunteers will do, what to bring..."
            />
          </div>

          <div className="form-group">
            <label>Max Volunteers</label>
            <input
              type="number"
              name="maxVolunteers"
              value={formData.maxVolunteers}
              onChange={handleChange}
              min="1"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEventModal

