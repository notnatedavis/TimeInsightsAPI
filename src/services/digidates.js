//   src\services\digidates.js
//   API service layer
//   (https://digidates.de/)

const API_BASE = 'https://digidates.de/api/v1';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `API error: ${response.status}`);
  }

  try {
    const data = await response.json();

    // handle different response formats from different endpoints
    if (typeof data === 'object' && data !== null) {
      // if an object with a single key, return value
      const keys = Object.keys(data);
      if (keys.length === 1) {
        return data[keys[0]];
      }
      // for objects with multiple keys (like progress), return the whole object
      return data;
    }

    // for primitive responses
    return data;
    
  } catch (error) {
    throw new Error('Failed to parse API response');
  }
};

export const getUnixTime = async () => {
  const response = await fetch(`${API_BASE}/unixtime`);
  const data = await handleResponse(response);
  return data.time; // extract time value
};

export const getWeek = async (date) => {
  const response = await fetch(`${API_BASE}/week?date=${date}`);
  const data = await handleResponse(response);
  return data.week; // extract week value
};

export const getLeapYear = async (year) => {
  const response = await fetch(`${API_BASE}/leapyear?year=${year}`);
  const data = await handleResponse(response);
  return data.leap; // extract leap value
};

export const getProgress = async (start, end) => {
  const response = await fetch(
    `${API_BASE}/progress?start=${start}&end=${end}`
  );
  return handleResponse(response);
};

// additional API functions for future use
export const getCountdown = async (date) => {
  const response = await fetch(`${API_BASE}/countdown/${date}`);
  return handleResponse(response);
};

export const getAge = async (date) => {
  const response = await fetch(`${API_BASE}/age/${date}`);
  return handleResponse(response);
};