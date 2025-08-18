//   src\utils\dateUtils.js
//   helper functions for date utilities

export const formatUnix = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString();
};