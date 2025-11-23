import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import ParkCard from '../components/ParkCard'
import SearchFilter from '../components/SearchFilter'
import ParkListSidebar from '../components/ParkListSidebar'
import './HomeScreen.css'

// Sample park data - Boston locations
const sampleParks = [
  {
    id: 1,
    name: 'Boston Common',
    lat: 42.3551,
    lng: -71.0656,
    shadeScore: 85,
    size: 'large',
    amenities: ['benches', 'water', 'playground'],
    crowdLevel: 'moderate',
    safetyRating: 4.5,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'
  },
  {
    id: 2,
    name: 'Charles River Esplanade',
    lat: 42.3601,
    lng: -71.0800,
    shadeScore: 72,
    size: 'medium',
    amenities: ['benches', 'water'],
    crowdLevel: 'low',
    safetyRating: 4.2,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400'
  },
  {
    id: 3,
    name: 'Community Garden - South End',
    lat: 42.3430,
    lng: -71.0750,
    shadeScore: 45,
    size: 'small',
    amenities: ['benches'],
    crowdLevel: 'high',
    safetyRating: 4.0,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400'
  },
  {
    id: 4,
    name: 'Arnold Arboretum',
    lat: 42.3000,
    lng: -71.1200,
    shadeScore: 92,
    size: 'medium',
    amenities: ['benches', 'water', 'playground', 'restroom'],
    crowdLevel: 'low',
    safetyRating: 4.8,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400'
  },
  {
    id: 5,
    name: 'Franklin Park',
    lat: 42.3100,
    lng: -71.0950,
    shadeScore: 78,
    size: 'large',
    amenities: ['benches', 'water', 'playground', 'restroom'],
    crowdLevel: 'moderate',
    safetyRating: 4.6,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'
  }
]

// Custom marker icons based on shade score
const createMarkerIcon = (shadeScore, size) => {
  const color = shadeScore >= 70 ? '#10B981' : shadeScore >= 50 ? '#34D399' : '#A7F3D0'
  const iconSize = size === 'large' ? 32 : size === 'medium' ? 24 : 16
  
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `)}`,
    iconSize: [iconSize, iconSize],
    iconAnchor: [iconSize / 2, iconSize],
    popupAnchor: [0, -iconSize]
  })
}

function MapController({ center }) {
  const map = useMap()
  useEffect(() => {
    map.setView(center, map.getZoom())
  }, [center, map])
  return null
}

const HomeScreen = () => {
  const [selectedPark, setSelectedPark] = useState(null)
  const [filteredParks, setFilteredParks] = useState(sampleParks)
  const [filters, setFilters] = useState({
    shadeLevel: 'all',
    size: 'all',
    searchQuery: ''
  })
  const [mapCenter, setMapCenter] = useState([42.3601, -71.0589])
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let filtered = [...sampleParks]

    // Filter by shade level
    if (filters.shadeLevel === 'high') {
      filtered = filtered.filter(park => park.shadeScore >= 70)
    } else if (filters.shadeLevel === 'medium') {
      filtered = filtered.filter(park => park.shadeScore >= 50 && park.shadeScore < 70)
    } else if (filters.shadeLevel === 'low') {
      filtered = filtered.filter(park => park.shadeScore < 50)
    }

    // Filter by size
    if (filters.size !== 'all') {
      filtered = filtered.filter(park => park.size === filters.size)
    }

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(park =>
        park.name.toLowerCase().includes(query)
      )
    }

    setFilteredParks(filtered)
  }, [filters])

  const handleParkClick = (park) => {
    setSelectedPark(park)
    setMapCenter([park.lat, park.lng])
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="home-screen">
      <SearchFilter filters={filters} onFilterChange={handleFilterChange} />
      
      <div className="map-container">
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController center={mapCenter} />
          {filteredParks.map((park) => (
            <Marker
              key={park.id}
              position={[park.lat, park.lng]}
              icon={createMarkerIcon(park.shadeScore, park.size)}
              eventHandlers={{
                click: () => handleParkClick(park)
              }}
            >
              <Popup>
                <div className="popup-content">
                  <h3>{park.name}</h3>
                  <p>Shade Score: {park.shadeScore}%</p>
                  <p>Crowd Level: {park.crowdLevel}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Desktop Sidebar */}
      {!isMobile && (
        <ParkListSidebar
          parks={filteredParks}
          onParkClick={handleParkClick}
          selectedPark={selectedPark}
        />
      )}

      {/* Mobile Park Card */}
      {isMobile && selectedPark && (
        <ParkCard park={selectedPark} onClose={() => setSelectedPark(null)} />
      )}
    </div>
  )
}

export default HomeScreen

