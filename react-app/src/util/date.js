export const dateToISOStr = (date) => {
  const newDate = new Date(date);
  return newDate.toISOString().substring(0, 10);
};
