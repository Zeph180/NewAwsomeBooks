import { DateTime } from './Luxon.js';

const TimeAndDate = () => {
  // const time = document.getElementById('time');
  const now = DateTime.now();
  const dt = now.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  return dt;
};

export default TimeAndDate;