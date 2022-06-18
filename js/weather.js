const API_KEY = "a6ff2371fcb60339eca59e777887420a";

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp.toFixed(
        1
      )}`;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you ⛅️");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
