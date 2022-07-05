/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const APIKEY = '3c7beccb5e8b340ec043b464fc73af2f';\nconst form = document.getElementById('form');\n\nconst getGeocoding = async () => {\n  const location = document.getElementById('location');\n  const locValue = location.value.trim();\n  const response = await fetch(\n    `https://api.openweathermap.org/geo/1.0/direct?q=${locValue}&limit=1&appid=${APIKEY}`,\n    { mode: 'cors' },\n  );\n  const data = await response.json();\n  const { lat } = data[0];\n  const { lon } = data[0];\n  const { name } = data[0];\n\n  return { lat, lon, name };\n};\n\nconst getUnits = () => {\n  const isChecked = document.getElementById('isMetric').checked;\n  return isChecked;\n};\n\nconst getWeekDay = (utc) => {\n  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  const date = new Date(utc * 1000);\n  return weekday[date.getDay()];\n};\n\nconst getOneCallWeather = async (lat, lon) => {\n  let units;\n  if (getUnits() === true) {\n    units = 'metric';\n  } else {\n    units = 'imperial';\n  }\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,&appid=${APIKEY}&units=${units}`,\n    { mode: 'cors' },\n  );\n  const data = await response.json();\n  return { data };\n};\n\nconst renderDay = (data, day) => {\n  let windSpeed;\n  if (getUnits() === true) {\n    windSpeed = 'm/s';\n  } else {\n    windSpeed = 'mph';\n  }\n  const descEl = document.querySelector(`#day${day} .day-desc`);\n  const iconEl = document.getElementById(`day${day}Icon`);\n  const tempEl = document.querySelector(`#day${day} .day-temp`);\n  const humEl = document.querySelector(`#day${day} .day-hum p`);\n  const windEl = document.querySelector(`#day${day} .day-wind p`);\n  const pressEl = document.querySelector(`#day${day} .day-press p`);\n  const fileName = data.data.daily[`${day}`].weather[0].icon;\n  const weekdayEl = document.querySelector(`#day${day} .weekday`);\n  const weekday = getWeekDay(`${data.data.daily[`${day}`].dt}`);\n\n  descEl.textContent = data.data.daily[`${day}`].weather[0].description;\n  iconEl.src = `img/${fileName}.svg`;\n  tempEl.textContent = `${Math.round(data.data.daily[`${day}`].temp.day)}°`;\n  humEl.textContent = `${data.data.daily[`${day}`].humidity} %`;\n  windEl.textContent = `${data.data.daily[`${day}`].wind_speed} ${windSpeed}`;\n  pressEl.textContent = `${data.data.daily[`${day}`].pressure} hPa`;\n  weekdayEl.textContent = weekday;\n};\n\nconst renderWeather = (data, name) => {\n  console.log(name);\n  console.log(data);\n  let windSpeed;\n  if (getUnits() === true) {\n    windSpeed = 'm/s';\n  } else {\n    windSpeed = 'mph';\n  }\n  const locEl = document.getElementById('loc');\n  const descEl = document.querySelector('.desc');\n  const iconEl = document.getElementById('currIcon');\n  const tempEl = document.querySelector('.temp');\n  const humEl = document.querySelector('.hum p');\n  const windEl = document.querySelector('.wind p');\n  const pressEl = document.querySelector('.press p');\n\n  locEl.textContent = name;\n  descEl.textContent = data.data.current.weather[0].description;\n  iconEl.src = `img/${data.data.current.weather[0].icon}.svg`;\n  tempEl.textContent = `${Math.round(data.data.current.temp)}°`;\n  humEl.textContent = `${data.data.current.humidity} %`;\n  windEl.textContent = `${data.data.current.wind_speed} ${windSpeed}`;\n  pressEl.textContent = `${data.data.current.pressure} hPa`;\n\n  for (let i = 0; i < 7; i++) {\n    renderDay(data, i);\n  }\n};\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  getGeocoding().then((object) => {\n    const { name } = object;\n    const { lat } = object;\n    const { lon } = object;\n    getOneCallWeather(lat, lon, name).then((data) => {\n      console.log(lat, lon);\n      renderWeather(data, name);\n      document.getElementById('location').value = '';\n    });\n  });\n});\n\nconst input = document.getElementById('location');\n\n// Execute a function when the user presses a key on the keyboard\ninput.addEventListener('keypress', (event) => {\n  // If the user presses the \"Enter\" key on the keyboard\n  if (event.key === 'Enter') {\n    // Cancel the default action, if needed\n    event.preventDefault();\n    // Trigger the button element with a click\n    document.getElementById('search').click();\n    document.getElementById('location').value = '';\n  }\n});\n\n// set default weather for when page first loads\ngetOneCallWeather(51.5073219, -0.1276474, 'London').then((data) => {\n  // console.log(lat, lon);\n  renderWeather(data, 'London');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSUtFWSA9ICczYzdiZWNjYjVlOGIzNDBlYzA0M2I0NjRmYzczYWYyZic7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcblxuY29uc3QgZ2V0R2VvY29kaW5nID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuICBjb25zdCBsb2NWYWx1ZSA9IGxvY2F0aW9uLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NWYWx1ZX0mbGltaXQ9MSZhcHBpZD0ke0FQSUtFWX1gLFxuICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHsgbGF0IH0gPSBkYXRhWzBdO1xuICBjb25zdCB7IGxvbiB9ID0gZGF0YVswXTtcbiAgY29uc3QgeyBuYW1lIH0gPSBkYXRhWzBdO1xuXG4gIHJldHVybiB7IGxhdCwgbG9uLCBuYW1lIH07XG59O1xuXG5jb25zdCBnZXRVbml0cyA9ICgpID0+IHtcbiAgY29uc3QgaXNDaGVja2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWV0cmljJykuY2hlY2tlZDtcbiAgcmV0dXJuIGlzQ2hlY2tlZDtcbn07XG5cbmNvbnN0IGdldFdlZWtEYXkgPSAodXRjKSA9PiB7XG4gIGNvbnN0IHdlZWtkYXkgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1dGMgKiAxMDAwKTtcbiAgcmV0dXJuIHdlZWtkYXlbZGF0ZS5nZXREYXkoKV07XG59O1xuXG5jb25zdCBnZXRPbmVDYWxsV2VhdGhlciA9IGFzeW5jIChsYXQsIGxvbikgPT4ge1xuICBsZXQgdW5pdHM7XG4gIGlmIChnZXRVbml0cygpID09PSB0cnVlKSB7XG4gICAgdW5pdHMgPSAnbWV0cmljJztcbiAgfSBlbHNlIHtcbiAgICB1bml0cyA9ICdpbXBlcmlhbCc7XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LCZhcHBpZD0ke0FQSUtFWX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7IGRhdGEgfTtcbn07XG5cbmNvbnN0IHJlbmRlckRheSA9IChkYXRhLCBkYXkpID0+IHtcbiAgbGV0IHdpbmRTcGVlZDtcbiAgaWYgKGdldFVuaXRzKCkgPT09IHRydWUpIHtcbiAgICB3aW5kU3BlZWQgPSAnbS9zJztcbiAgfSBlbHNlIHtcbiAgICB3aW5kU3BlZWQgPSAnbXBoJztcbiAgfVxuICBjb25zdCBkZXNjRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtkYXl9IC5kYXktZGVzY2ApO1xuICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF5JHtkYXl9SWNvbmApO1xuICBjb25zdCB0ZW1wRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtkYXl9IC5kYXktdGVtcGApO1xuICBjb25zdCBodW1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXkke2RheX0gLmRheS1odW0gcGApO1xuICBjb25zdCB3aW5kRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtkYXl9IC5kYXktd2luZCBwYCk7XG4gIGNvbnN0IHByZXNzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtkYXl9IC5kYXktcHJlc3MgcGApO1xuICBjb25zdCBmaWxlTmFtZSA9IGRhdGEuZGF0YS5kYWlseVtgJHtkYXl9YF0ud2VhdGhlclswXS5pY29uO1xuICBjb25zdCB3ZWVrZGF5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtkYXl9IC53ZWVrZGF5YCk7XG4gIGNvbnN0IHdlZWtkYXkgPSBnZXRXZWVrRGF5KGAke2RhdGEuZGF0YS5kYWlseVtgJHtkYXl9YF0uZHR9YCk7XG5cbiAgZGVzY0VsLnRleHRDb250ZW50ID0gZGF0YS5kYXRhLmRhaWx5W2Ake2RheX1gXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBpY29uRWwuc3JjID0gYGltZy8ke2ZpbGVOYW1lfS5zdmdgO1xuICB0ZW1wRWwudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGF0YS5kYWlseVtgJHtkYXl9YF0udGVtcC5kYXkpfcKwYDtcbiAgaHVtRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmRhdGEuZGFpbHlbYCR7ZGF5fWBdLmh1bWlkaXR5fSAlYDtcbiAgd2luZEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kYXRhLmRhaWx5W2Ake2RheX1gXS53aW5kX3NwZWVkfSAke3dpbmRTcGVlZH1gO1xuICBwcmVzc0VsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kYXRhLmRhaWx5W2Ake2RheX1gXS5wcmVzc3VyZX0gaFBhYDtcbiAgd2Vla2RheUVsLnRleHRDb250ZW50ID0gd2Vla2RheTtcbn07XG5cbmNvbnN0IHJlbmRlcldlYXRoZXIgPSAoZGF0YSwgbmFtZSkgPT4ge1xuICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGxldCB3aW5kU3BlZWQ7XG4gIGlmIChnZXRVbml0cygpID09PSB0cnVlKSB7XG4gICAgd2luZFNwZWVkID0gJ20vcyc7XG4gIH0gZWxzZSB7XG4gICAgd2luZFNwZWVkID0gJ21waCc7XG4gIH1cbiAgY29uc3QgbG9jRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jJyk7XG4gIGNvbnN0IGRlc2NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyk7XG4gIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJySWNvbicpO1xuICBjb25zdCB0ZW1wRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCBodW1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW0gcCcpO1xuICBjb25zdCB3aW5kRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCBwJyk7XG4gIGNvbnN0IHByZXNzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3MgcCcpO1xuXG4gIGxvY0VsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgZGVzY0VsLnRleHRDb250ZW50ID0gZGF0YS5kYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgaWNvbkVsLnNyYyA9IGBpbWcvJHtkYXRhLmRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb259LnN2Z2A7XG4gIHRlbXBFbC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYXRhLmN1cnJlbnQudGVtcCl9wrBgO1xuICBodW1FbC50ZXh0Q29udGVudCA9IGAke2RhdGEuZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcbiAgd2luZEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kYXRhLmN1cnJlbnQud2luZF9zcGVlZH0gJHt3aW5kU3BlZWR9YDtcbiAgcHJlc3NFbC50ZXh0Q29udGVudCA9IGAke2RhdGEuZGF0YS5jdXJyZW50LnByZXNzdXJlfSBoUGFgO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgcmVuZGVyRGF5KGRhdGEsIGkpO1xuICB9XG59O1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2V0R2VvY29kaW5nKCkudGhlbigob2JqZWN0KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBvYmplY3Q7XG4gICAgY29uc3QgeyBsYXQgfSA9IG9iamVjdDtcbiAgICBjb25zdCB7IGxvbiB9ID0gb2JqZWN0O1xuICAgIGdldE9uZUNhbGxXZWF0aGVyKGxhdCwgbG9uLCBuYW1lKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhsYXQsIGxvbik7XG4gICAgICByZW5kZXJXZWF0aGVyKGRhdGEsIG5hbWUpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJykudmFsdWUgPSAnJztcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcblxuLy8gRXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmRcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gIC8vIElmIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiRW50ZXJcIiBrZXkgb24gdGhlIGtleWJvYXJkXG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uLCBpZiBuZWVkZWRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFRyaWdnZXIgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggYSBjbGlja1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS5jbGljaygpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpLnZhbHVlID0gJyc7XG4gIH1cbn0pO1xuXG4vLyBzZXQgZGVmYXVsdCB3ZWF0aGVyIGZvciB3aGVuIHBhZ2UgZmlyc3QgbG9hZHNcbmdldE9uZUNhbGxXZWF0aGVyKDUxLjUwNzMyMTksIC0wLjEyNzY0NzQsICdMb25kb24nKS50aGVuKChkYXRhKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGxhdCwgbG9uKTtcbiAgcmVuZGVyV2VhdGhlcihkYXRhLCAnTG9uZG9uJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;