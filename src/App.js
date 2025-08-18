//   src\App.js
//   root component

import React from 'react';
import Dashboard from './views/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <header className="app-header">
          <h1>Time Insights Dashboard</h1>
        </header>
        <main>
          <Dashboard />
        </main>
        <footer className="app-footer">
          <p>Data from DigiDates.de API</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;