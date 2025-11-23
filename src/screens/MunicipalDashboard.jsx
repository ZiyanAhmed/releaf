import { useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Bar, Line, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import './MunicipalDashboard.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

// Sample data
const kpiData = {
  treeCanopy: 28.5,
  totalGreenSpaces: 142,
  accessibilityScore: 76,
  heatIslandReduction: 3.2
}

const neighborhoodData = {
  labels: ['Downtown', 'Back Bay', 'South End', 'Charlestown', 'Jamaica Plain'],
  treeCoverage: [15, 35, 42, 28, 38],
  population: [45000, 32000, 28000, 38000, 25000]
}

const timeSeriesData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
  treeCoverage: [22, 23.5, 25, 26.5, 27.5, 28.5]
}

const greenSpaceTypes = {
  labels: ['Parks', 'Community Gardens', 'Trails', 'Pocket Parks'],
  data: [85, 32, 18, 7]
}

function MapController({ center }) {
  const map = useMap()
  return null
}

const MunicipalDashboard = () => {
  const [selectedLayer, setSelectedLayer] = useState('treeCanopy')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Login simulation
  if (!isAuthenticated) {
    return (
      <div className="dashboard-login">
        <div className="login-card">
          <div className="login-header">
            <span className="login-icon">🏛️</span>
            <h2>Municipal Dashboard</h2>
            <p>Access restricted to authorized city officials</p>
          </div>
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault()
              setIsAuthenticated(true)
            }}
          >
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="official@boston.gov" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <button type="submit" className="login-button">
              Access Dashboard
            </button>
            <p className="login-note">
              Demo Mode: Any username and password will work<br/>
              Try: <strong>admin@boston.gov</strong> / <strong>password</strong>
            </p>
          </form>
        </div>
      </div>
    )
  }

  const barChartData = {
    labels: neighborhoodData.labels,
    datasets: [
      {
        label: 'Tree Coverage %',
        data: neighborhoodData.treeCoverage,
        backgroundColor: '#10B981',
        borderRadius: 8
      }
    ]
  }

  const lineChartData = {
    labels: timeSeriesData.labels,
    datasets: [
      {
        label: 'Urban Tree Canopy %',
        data: timeSeriesData.treeCoverage,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  }

  const pieChartData = {
    labels: greenSpaceTypes.labels,
    datasets: [
      {
        data: greenSpaceTypes.data,
        backgroundColor: [
          '#10B981',
          '#34D399',
          '#6EE7B7',
          '#A7F3D0'
        ]
      }
    ]
  }

  return (
    <div className="municipal-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Municipal Dashboard</h1>
          <p>City-wide Green Space Analytics</p>
        </div>
        <button className="logout-button" onClick={() => setIsAuthenticated(false)}>
          Logout
        </button>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: '#D1FAE5' }}>
            🌳
          </div>
          <div className="kpi-content">
            <h3>Urban Tree Canopy</h3>
            <p className="kpi-value">{kpiData.treeCanopy}%</p>
            <span className="kpi-change positive">+1.0% from last year</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: '#D1FAE5' }}>
            🏞️
          </div>
          <div className="kpi-content">
            <h3>Total Green Spaces</h3>
            <p className="kpi-value">{kpiData.totalGreenSpaces}</p>
            <span className="kpi-change positive">+8 new spaces</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: '#D1FAE5' }}>
            🚶
          </div>
          <div className="kpi-content">
            <h3>Accessibility Score</h3>
            <p className="kpi-value">{kpiData.accessibilityScore}%</p>
            <span className="kpi-change positive">+5% improvement</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: '#D1FAE5' }}>
            🌡️
          </div>
          <div className="kpi-content">
            <h3>Heat Island Reduction</h3>
            <p className="kpi-value">{kpiData.heatIslandReduction}°F</p>
            <span className="kpi-change positive">Cooling effect</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="charts-section">
          <div className="chart-card">
            <h3>Tree Coverage by Neighborhood</h3>
            <Bar
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.parsed.y}% coverage`
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 50,
                    ticks: {
                      callback: (value) => `${value}%`
                    }
                  }
                }
              }}
            />
          </div>

          <div className="chart-card">
            <h3>Tree Canopy Growth Over Time</h3>
            <Line
              data={lineChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.parsed.y}% canopy`
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 35,
                    ticks: {
                      callback: (value) => `${value}%`
                    }
                  }
                }
              }}
            />
          </div>

          <div className="chart-card">
            <h3>Green Space Type Distribution</h3>
            <Pie
              data={pieChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="map-section">
          <div className="map-card">
            <div className="map-controls">
              <h3>City Map with Data Layers</h3>
              <div className="layer-toggles">
                <button
                  className={`layer-button ${selectedLayer === 'treeCanopy' ? 'active' : ''}`}
                  onClick={() => setSelectedLayer('treeCanopy')}
                >
                  Tree Canopy
                </button>
                <button
                  className={`layer-button ${selectedLayer === 'heat' ? 'active' : ''}`}
                  onClick={() => setSelectedLayer('heat')}
                >
                  Heat Island
                </button>
                <button
                  className={`layer-button ${selectedLayer === 'population' ? 'active' : ''}`}
                  onClick={() => setSelectedLayer('population')}
                >
                  Population Density
                </button>
              </div>
            </div>
            <div className="dashboard-map">
              <MapContainer
                center={[42.3601, -71.0589]}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController center={[42.3601, -71.0589]} />
              </MapContainer>
            </div>
            <div className="map-legend">
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#10B981' }}></span>
                <span>High Coverage (40%+)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#34D399' }}></span>
                <span>Medium Coverage (25-40%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#A7F3D0' }}></span>
                <span>Low Coverage (&lt;25%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="priority-zones">
        <h3>Priority Zones for Green Space Development</h3>
        <div className="zones-grid">
          <div className="zone-card priority-high">
            <h4>Downtown Boston</h4>
            <p>15% tree coverage • 45,000 residents</p>
            <p className="zone-note">Highest priority: Low coverage, high population density</p>
          </div>
          <div className="zone-card priority-medium">
            <h4>South End</h4>
            <p>28% tree coverage • 38,000 residents</p>
            <p className="zone-note">Medium priority: Below city average</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MunicipalDashboard

