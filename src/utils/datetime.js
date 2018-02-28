'use strict';

function formatDate(datetime) {
  if (datetime) {
    var date = new Date(datetime);
    return addZero(date.getDate()) + '/'
      + addZero(date.getMonth() + 1) + '/'
      + date.getFullYear();
  }
  return '';
}

function formatTime(datetime) {
  if (datetime) {
    var time = new Date(datetime);
    return time.getHours() + ':' + addZero(time.getMinutes());
  }
  return '';
}

function addZero(number) {
  if (number < 10 ) {
    number = '0' + number;
  }
  return number;
}

export { formatDate, formatTime };
