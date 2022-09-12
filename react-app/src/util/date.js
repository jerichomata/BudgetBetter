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

// Convert GMT date to readable date
export const gmtToDate = (gmtDate) => {
  let months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const dateObject = new Date(gmtDate);
  const date = dateObject.getUTCDate();
  const month = months[dateObject.getUTCMonth()];
  const year = dateObject.getUTCFullYear();
  return `${month} ${date}, ${year}`;
};
