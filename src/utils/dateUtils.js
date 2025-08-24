//   src\utils\dateUtils.js
//   helper functions for date utilities

export const formatUnix = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};
// example outputs for different users
// New York : "4/26/2024, 10:05:32 AM"
// Berlin : "26.04.2024, 16:05:32"
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