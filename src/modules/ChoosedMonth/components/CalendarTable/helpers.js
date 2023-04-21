export function formattedDay(date) {
  const day = date.split('-')[2];

  return day.startsWith('0') ? day.slice(1) : day;
}
