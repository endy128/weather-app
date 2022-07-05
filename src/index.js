const APIKEY = '3c7beccb5e8b340ec043b464fc73af2f';
const form = document.getElementById('form');

const getGeocoding = async () => {
  const location = document.getElementById('location');
  const locValue = location.value.trim();
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${locValue}&limit=1&appid=${APIKEY}`,
    { mode: 'cors' },
  );
  const data = await response.json();
  const { lat } = data[0];
  const { lon } = data[0];
  const { name } = data[0];

  return { lat, lon, name };
};

const getUnits = () => {
  const isChecked = document.getElementById('isMetric').checked;
  return isChecked;
};

const getWeekDay = (utc) => {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(utc * 1000);
  return weekday[date.getDay()];
};

const getOneCallWeather = async (lat, lon) => {
  let units;
  if (getUnits() === true) {
    units = 'metric';
  } else {
    units = 'imperial';
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,&appid=${APIKEY}&units=${units}`,
    { mode: 'cors' },
  );
  const data = await response.json();
  return { data };
};

const renderDay = (data, day) => {
  let windSpeed;
  if (getUnits() === true) {
    windSpeed = 'm/s';
  } else {
    windSpeed = 'mph';
  }
  const descEl = document.querySelector(`#day${day} .day-desc`);
  const iconEl = document.getElementById(`day${day}Icon`);
  const tempEl = document.querySelector(`#day${day} .day-temp`);
  const humEl = document.querySelector(`#day${day} .day-hum p`);
  const windEl = document.querySelector(`#day${day} .day-wind p`);
  const pressEl = document.querySelector(`#day${day} .day-press p`);
  const fileName = data.data.daily[`${day}`].weather[0].icon;
  const weekdayEl = document.querySelector(`#day${day} .weekday`);
  const weekday = getWeekDay(`${data.data.daily[`${day}`].dt}`);

  descEl.textContent = data.data.daily[`${day}`].weather[0].description;
  iconEl.src = `img/${fileName}.svg`;
  tempEl.textContent = `${Math.round(data.data.daily[`${day}`].temp.day)}°`;
  humEl.textContent = `${data.data.daily[`${day}`].humidity} %`;
  windEl.textContent = `${data.data.daily[`${day}`].wind_speed} ${windSpeed}`;
  pressEl.textContent = `${data.data.daily[`${day}`].pressure} hPa`;
  weekdayEl.textContent = weekday;
};

const renderWeather = (data, name) => {
  console.log(name);
  console.log(data);
  let windSpeed;
  if (getUnits() === true) {
    windSpeed = 'm/s';
  } else {
    windSpeed = 'mph';
  }
  const locEl = document.getElementById('loc');
  const descEl = document.querySelector('.desc');
  const iconEl = document.getElementById('currIcon');
  const tempEl = document.querySelector('.temp');
  const humEl = document.querySelector('.hum p');
  const windEl = document.querySelector('.wind p');
  const pressEl = document.querySelector('.press p');

  locEl.textContent = name;
  descEl.textContent = data.data.current.weather[0].description;
  iconEl.src = `img/${data.data.current.weather[0].icon}.svg`;
  tempEl.textContent = `${Math.round(data.data.current.temp)}°`;
  humEl.textContent = `${data.data.current.humidity} %`;
  windEl.textContent = `${data.data.current.wind_speed} ${windSpeed}`;
  pressEl.textContent = `${data.data.current.pressure} hPa`;

  for (let i = 0; i < 7; i++) {
    renderDay(data, i);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getGeocoding().then((object) => {
    const { name } = object;
    const { lat } = object;
    const { lon } = object;
    getOneCallWeather(lat, lon, name).then((data) => {
      console.log(lat, lon);
      renderWeather(data, name);
      document.getElementById('location').value = '';
    });
  });
});

const input = document.getElementById('location');

// Execute a function when the user presses a key on the keyboard
input.addEventListener('keypress', (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('search').click();
    document.getElementById('location').value = '';
  }
});

// set default weather for when page first loads
getOneCallWeather(51.5073219, -0.1276474, 'London').then((data) => {
  // console.log(lat, lon);
  renderWeather(data, 'London');
});
