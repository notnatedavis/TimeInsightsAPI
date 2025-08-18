//   src\services\digidates.js
//   API service layer
//   (https://digidates.de/)

export const getUnixTime = async () => {
  const res = await fetch('https://digidates.de/api/v1/unixtime');
  return await res.json();
};