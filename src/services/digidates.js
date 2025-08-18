//   src\services\digidates.js
//   API service layer
//   (https://digidates.de/)

const API_BASE = 'https://digidates.de/api/v1';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `API error: ${response.status}`);
  }
  return response.json();
};

export const getUnixTime = async () => {
  const response = await fetch(`${API_BASE}/unixtime`);
  return handleResponse(response);
};

export const getWeek = async (date) => {
  const response = await fetch(`${API_BASE}/week?date=${date}`);
  return handleResponse(response);
};

export const getLeapYear = async (year) => {
  const response = await fetch(`${API_BASE}/leapyear?year=${year}`);
  return handleResponse(response);
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