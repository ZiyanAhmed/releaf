import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomeScreen from './screens/HomeScreen'
import CommunityEvents from './screens/CommunityEvents'
import MunicipalDashboard from './screens/MunicipalDashboard'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/events" element={<CommunityEvents />} />
          <Route path="/dashboard" element={<MunicipalDashboard />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  )
}

export default App

