//   src\views\Dashboard.js
//   main views

import React, { useState, useEffect } from 'react';
import DashboardCard from '../components/DashboardCard';
import ProgressRing from '../components/ProgressRing';
import { 
  getUnixTime, 
  getWeek, 
  getLeapYear,
  getProgress 
} from '../services/digidates';
import { formatUnix, getCurrentYear } from '../utils/dateUtils';
import './Dashboard.css';

const Dashboard = () => {
  const [timeData, setTimeData] = useState({
    unixTime: null,
    week: null,
    isLeapYear: null,
    progress: null,
    loading: true,
    error: null
  });

  const currentYear = getCurrentYear();

  useEffect(() => {
    const fetchData = async () => {
      setTimeData(prev => ({ ...prev, loading: true }));
      
      try {
        const [unixTime, week, isLeapYear, progress] = await Promise.all([
          getUnixTime(),
          getWeek(new Date().toISOString().split('T')[0]),
          getLeapYear(currentYear),
          getProgress(`${currentYear}-01-01`, `${currentYear}-12-31`)
        ]);

        setTimeData({
          unixTime,
          week,
          isLeapYear,
          progress,
          loading: false,
          error: null
        });
      } catch (error) {
        setTimeData({
          unixTime: null,
          week: null,
          isLeapYear: null,
          progress: null,
          loading: false,
          error: 'Failed to load time data. Please try again later.'
        });
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, [currentYear]);

  // Loading skeleton
  if (timeData.loading) {
    return (
      <div className="dashboard-grid">
        {[...Array(4)].map((_, i) => (
          <DashboardCard key={i} title="Loading...">
            <div className="skeleton-loader" />
          </DashboardCard>
        ))}
      </div>
    );
  }

  // Error state
  if (timeData.error) {
    return (
      <div className="error-state">
        <div>⚠️</div>
        <p>{timeData.error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="dashboard-grid">
      {/* Cards remain the same */}
    </div>
  );
};

export default Dashboard;