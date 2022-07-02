const APIKEY = "3c7beccb5e8b340ec043b464fc73af2f";

const getGeocoding = async () => {
  const location = document.getElementById("location");
  const locValue = location.value.trim();
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${locValue}&limit=1&appid=${APIKEY}`,
    { mode: "cors" },
  );
  const data = await response.json();
  const { lat } = data[0];
  const { lon } = data[0];

  return { lat, lon };
};

const getUnits = () => {
  const isChecked = document.getElementById("isMetric").checked;
  return isChecked;
};

const getWeather = async (lat, lon) => {
  let units;
  if (getUnits() === true) {
    units = "metric";
  } else {
    units = "imperial";
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${units}`,
    { mode: "cors" },
  );
  const data = await response.json();
  return { data };
};

const renderWeather = (loc, main, temp, maxTemp, minTemp) => {
  const locEl = document.getElementById("loc");
  const mainEl = document.getElementById("main");
  const tempEl = document.getElementById("temp");
  const maxTempEl = document.getElementById("maxTemp");
  const minTempEl = document.getElementById("minTemp");

  locEl.textContent = loc;
  mainEl.textContent = main;
  tempEl.textContent = `${temp}°`;
  maxTempEl.textContent = `${maxTemp}°`;
  minTempEl.textContent = `${minTemp}°`;
};

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGeocoding().then((object) => {
    const { lat } = object;
    const { lon } = object;
    getWeather(lat, lon).then((object) => {
      const loc = object.data.name;
      const { main } = object.data.weather[0];
      const { temp } = object.data.main;
      const maxTemp = object.data.main.temp_max;
      const minTemp = object.data.main.temp_min;
      renderWeather(loc, main, temp, maxTemp, minTemp);
    });
  });
});
