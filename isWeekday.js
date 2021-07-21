module.exports= function isWeekday(day)
{
  return day.startsWith('Mon') ||  day.startsWith('Tue') || day.startsWith('Wed') || day.startsWith('Thur') ||
    day.startsWith('Fri');
  
}