import { useState } from 'react'
import EventCard from '../components/EventCard'
import CreateEventModal from '../components/CreateEventModal'
import './CommunityEvents.css'

// Sample event data
const sampleEvents = [
  {
    id: 1,
    title: 'Tree Planting Drive - Boston Common',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'Boston Common',
    organizer: 'Green City Initiative',
    type: 'Volunteer',
    description: 'Join us for a community tree planting event. All tools and saplings provided.',
    volunteers: 45,
    maxVolunteers: 100,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400'
  },
  {
    id: 2,
    title: 'Park Cleanup Day',
    date: '2024-03-20',
    time: '9:00 AM',
    location: 'Charles River Esplanade',
    organizer: 'Community Cleanup Crew',
    type: 'Volunteer',
    description: 'Help keep our parks clean! Gloves and bags will be provided.',
    volunteers: 28,
    maxVolunteers: 50,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400'
  },
  {
    id: 3,
    title: 'Urban Gardening Workshop',
    date: '2024-03-18',
    time: '2:00 PM',
    location: 'South End Community Garden',
    organizer: 'Urban Growers',
    type: 'Community Gathering',
    description: 'Learn sustainable gardening techniques for urban spaces.',
    volunteers: 15,
    maxVolunteers: 30,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400'
  },
  {
    id: 4,
    title: 'Policy Discussion: Green Space Expansion',
    date: '2024-03-25',
    time: '6:00 PM',
    location: 'Boston City Hall',
    organizer: 'Environmental Advocacy Group',
    type: 'Community Gathering',
    description: 'Community meeting to discuss expanding green spaces in underserved neighborhoods.',
    volunteers: 62,
    maxVolunteers: 100,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'
  }
]

const CommunityEvents = () => {
  const [events, setEvents] = useState(sampleEvents)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter)

  const handleCreateEvent = (newEvent) => {
    setEvents([newEvent, ...events])
    setShowCreateModal(false)
  }

  return (
    <div className="community-events">
      <div className="events-header">
        <div className="header-content">
          <h1>Community Events</h1>
          <p>Discover and participate in green space initiatives</p>
        </div>
        <button 
          className="create-event-button"
          onClick={() => setShowCreateModal(true)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Create Event
        </button>
      </div>

      <div className="events-filters">
        <button
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Events
        </button>
        <button
          className={`filter-tab ${filter === 'Volunteer' ? 'active' : ''}`}
          onClick={() => setFilter('Volunteer')}
        >
          Volunteer
        </button>
        <button
          className={`filter-tab ${filter === 'Community Gathering' ? 'active' : ''}`}
          onClick={() => setFilter('Community Gathering')}
        >
          Community Gathering
        </button>
      </div>

      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="no-events">
            <p>No events found. Be the first to create one!</p>
          </div>
        )}
      </div>

      {showCreateModal && (
        <CreateEventModal
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateEvent}
        />
      )}
    </div>
  )
}

export default CommunityEvents

