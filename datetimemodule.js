exports.myDateTime = function () {
  return Date();
};

exports.currentDay = function () {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  return day;
};
