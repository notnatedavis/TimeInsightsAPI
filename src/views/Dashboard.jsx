//   src\views\Dashboard.jsx
//   main views

import React, { useState, useEffect } from 'react';
import DashboardCard from '../components/DashboardCard.jsx';
import ProgressRing from '../components/ProgressRing.jsx';
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

        // handle progress API response
        setTimeData({
          unixTime,
          week,
          isLeapYear,
          progress: {
            percent: Math.round(progress.float * 100) // convert to %
          },
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

  // loading skeleton
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

  // error state
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
      <DashboardCard title="Current Unix Time">
        <div className="unix-time">
          {timeData.unixTime && formatUnix(timeData.unixTime)}
        </div>
        <div className="timestamp">{timeData.unixTime}</div>
      </DashboardCard>

      <DashboardCard title="Week Number">
        <div className="week-number">{timeData.week}</div>
        <div>ISO Week</div>
      </DashboardCard>

      <DashboardCard title="Leap Year">
        <div className="leap-year">
          {timeData.isLeapYear ? 'Yes' : 'No'}
        </div>
        <div>{currentYear}</div>
      </DashboardCard>

      <DashboardCard title="Year Progress">
        <ProgressRing percent={timeData.progress?.percent || 0} />
        <div className="progress-text">
          {timeData.progress?.percent || 0}% complete
        </div>
      </DashboardCard>
    </div>
  );
};

export default Dashboard;