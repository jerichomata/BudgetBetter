// For prepopulating edit forms with the old date
export const dateToISOStr = (date) => {
  const newDate = new Date(date);
  return newDate.toISOString().substring(0, 10);
};

// Convert unix timestamp to readable date
export const unixToDate = (unixTime) => {
  const milliseconds = unixTime * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  return humanDateFormat;
};
