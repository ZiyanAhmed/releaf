import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="nav-mobile">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Map</span>
        </Link>
        <Link to="/events" className={`nav-item ${isActive('/events') ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Events</span>
        </Link>
        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
          <span>Dashboard</span>
        </Link>
      </nav>

      {/* Desktop Top Navigation */}
      <nav className="nav-desktop">
        <div className="nav-desktop-container">
          <Link to="/" className="nav-logo">
            <Logo size={32} showText={true} />
          </Link>
          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Map
            </Link>
            <Link to="/events" className={`nav-link ${isActive('/events') ? 'active' : ''}`}>
              Events
            </Link>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation

