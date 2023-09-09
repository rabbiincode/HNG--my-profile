// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

// Update the current day of the week and UTC time in the HTML
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Week Day: ${getCurrentDayOfWeek()}`;

function getCurrentUTCTimeInMilliseconds() {
  const utcTimeMilliseconds = new Date().getTime();
  return utcTimeMilliseconds;
}

function displayCurrentUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const currentUTCTime = getCurrentUTCTimeInMilliseconds();
  document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC Time: ${getCurrentUTCTimeInMilliseconds()}ms`;
}

// Update the time initially
displayCurrentUTCTime();

// Update the time every second (1000 milliseconds)
setInterval(displayCurrentUTCTime, 1000);