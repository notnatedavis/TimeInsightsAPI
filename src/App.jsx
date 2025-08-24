//   src\App.jsx
//   root component

import React from 'react';
import Dashboard from './views/Dashboard.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <header className="app-header">
          <h1>Time Insights Dashboard (v1)</h1>
        </header>
        <main>
          <Dashboard />
        </main>
        <footer className="app-footer">
          <p>Open source data from DigiDates.de API</p>
          <p>@notenatedavis on github</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

// critical - must keep to allow importing in other files
export default App;