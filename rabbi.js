// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

// Function to get the current UTC time
function getCurrentUTCTime() {
  const currentDate = new Date();
  const utcTimeString = currentDate.toUTCString();
  return utcTimeString;
}

// Update the current day of the week and UTC time in the HTML
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Week Day: ${getCurrentDayOfWeek()}`;
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Time: ${getCurrentUTCTime()}`;