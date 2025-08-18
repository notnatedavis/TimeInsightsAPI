//   src\utils\dateUtils.js
//   helper functions for date utilities

export const formatUnix = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

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