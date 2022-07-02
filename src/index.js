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

const getWeather = async (lat, lon) => {
  console.log(lat, lon);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`,
    { mode: "cors" },
  );
  const data = await response.json();
  console.log(data);
};

const renderWeather = () => {

};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGeocoding().then((object) => {
    console.log(object);
    const { lat } = object;
    const { lon } = object;
    getWeather(lat, lon);
  });
});
