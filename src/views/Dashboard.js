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
        setTimeData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [currentYear]);

  if (timeData.loading) return <div className="loading">Loading time data...</div>;
  if (timeData.error) return <div className="error">Error: {timeData.error}</div>;

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