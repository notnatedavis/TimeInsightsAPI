//   src\utils\dateUtils.js
//   helper functions for date utilities

export const formatUnix = (timestamp) => {
  const date = new Date(timestamp * 1000);

  // format date part
  const dateStr = date.toLocaleString(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  // format time part
  const timeStr = date.toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  return {
    date: dateStr,
    time: timeStr,
    full: `${dateStr}, ${timeStr}`
  };
};
// example outputs for different users
// New York: {date: "Aug 24, 2025", time: "02:14:38 PM", full: "Aug 24, 2025, 02:14:38 PM"}
// Berlin: {date: "24.08.2025", time: "14:14:38", full: "24.08.2025, 14:14:38"}
// both valid formats

export const getCurrentYear = () => {
  return new Date().getFullYear().toString();
};

export const calculateProgress = (start, end, current) => {
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  const currentTime = current || Date.now();
  
  const total = endTime - startTime;
  const elapsed = currentTime - startTime;
  
  return {
    float: elapsed / total,
    percent: Math.round((elapsed / total) * 100)
  };
};