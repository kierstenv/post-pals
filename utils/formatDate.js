const luxon = require('luxon');
const { DateTime } = luxon;

const formatDate = (date) => {
  const formattedDate = DateTime.fromJSDate(date).toFormat('LLLL d, yyyy');
  return formattedDate;
}

const formatTime = (date) => {
  const formattedTime = DateTime.fromJSDate(date).toFormat('h:mm a');
  return formattedTime;
}

module.exports = { formatDate, formatTime };