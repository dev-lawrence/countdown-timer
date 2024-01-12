const countDown = () => {
  const launchTime = new Date('28 February, 2024 00:00:00').getTime();
  const presentTime = new Date().getTime();
  const gap = launchTime - presentTime;

  //   how time works
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  //   maths
  const dayText = Math.floor(gap / day);
  const hourText = Math.floor((gap % day) / hour);
  const minuteText = Math.floor((gap % hour) / minute);
  const secondText = Math.floor((gap % minute) / second);

  // add text to the html
  document.querySelector('.day').textContent = dayText;
  document.querySelector('.hour').textContent = hourText;
  document.querySelector('.minute').textContent = minuteText;
  document.querySelector('.second').textContent = secondText;
};

setInterval(countDown, 1000);
