const weather_API_KEY = "fd88ad7f9c3b060c0dc1af85a1671720";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `- ${data.weather[0].main} ${data.main.temp}℃`;
    });
}
function onGeoError() {
  alert("can't find you..");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const logOutBtn = document.querySelector("#logOut");
function clear() {
  localStorage.clear();
}
logOutBtn.addEventListener("click", clear);
