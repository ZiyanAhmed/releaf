# ReLeaf - Urban Green Space Discovery Platform

A comprehensive web application for discovering, managing, and analyzing urban green spaces. Built with React, Leaflet maps, and Chart.js for data visualization.

## 🌐 Live Demo

**Live Application:** [https://ziyan-liart.vercel.app](https://ziyan-liart.vercel.app)

## Features

### 🗺️ Interactive Map Screen
- Real-time green space visualization with color-coded markers
- Search and filter functionality (shade coverage, park size)
- Park detail cards with amenities, crowd levels, and safety ratings
- Responsive design for mobile and desktop

### 📅 Community Events
- Browse upcoming volunteer events and community gatherings
- Create new events (for NGOs and community groups)
- Event filtering by type
- Volunteer registration tracking

### 📊 Municipal Dashboard
- City-wide analytics and KPIs
- Data visualizations (bar charts, line charts, pie charts)
- Interactive map with data layers
- Priority zone identification for green space development
- Access-controlled dashboard for city officials

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Mobile/Desktop navigation
│   ├── SearchFilter.jsx # Search and filter controls
│   ├── ParkCard.jsx    # Park detail card (mobile)
│   ├── ParkListSidebar.jsx # Park list (desktop)
│   ├── EventCard.jsx   # Event display card
│   └── CreateEventModal.jsx # Event creation form
├── screens/            # Main application screens
│   ├── HomeScreen.jsx  # Map view with parks
│   ├── CommunityEvents.jsx # Events listing
│   └── MunicipalDashboard.jsx # Analytics dashboard
├── App.jsx            # Main app component with routing
└── main.jsx           # Application entry point
```

## Technology Stack

- **React 18** - UI framework
- **React Router** - Client-side routing
- **Leaflet** - Interactive maps
- **Chart.js** - Data visualizations
- **Vite** - Build tool and dev server

## Key User Flows

1. **Finding Shaded Green Spaces**: Search → Filter by shade → View park details → Get directions
2. **Creating Community Events**: Navigate to Events → Create Event → Fill form → Publish
3. **Municipal Analytics**: Login → View KPIs → Analyze charts → Identify priority zones

## Responsive Design

- **Mobile**: Bottom navigation, full-screen map, slide-up park cards
- **Desktop**: Top navigation, map with sidebar, expanded layouts

## Demo Data

The application includes sample data for:
- 5 green spaces with varying shade scores and amenities
- 4 community events
- Municipal dashboard metrics and visualizations

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

