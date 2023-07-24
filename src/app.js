function city(event) {
  event.preventDefault();
  let city_name = document.getElementById("search-input").value;
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city_name +
    "&appid=" +
    apiKey + "&units=metric";

  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
      console.log(response.data.main.temp);
      console.log(response.data.weather[0].description);
      let kyiv = document.querySelector("#kyiv");
      kyiv.innerHTML = city_name;
      let h1 = document.querySelector("#zaluzh");
      h1.textContent = Math.round(response.data.main.temp);
      let desc = document.querySelector("#clouds");
      desc.innerHTML =
        "The mood of the day is the following: " +
        response.data.weather[0].description;
      let humid = document.querySelector("#humid");
      humid.innerHTML = response.data.main.humidity + "%";
      let wind = document.querySelector("#wind");
      wind.innerHTML = response.data.wind.speed + " km/h";
      let icon = document.querySelector("#icon");
      icon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

let trig = document.querySelector("#search-button");
trig.addEventListener("click", city);

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  getWeatherDataByCoords(position.coords.latitude, position.coords.longitude);
}

function getWeatherDataByCoords(lat, lon) {
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey + "&units=metric";

  axios
    .get(weatherUrl)
    .then((response) => {
      console.log(response.data);
      console.log(response.data.main.temp);
      console.log(response.data.weather[0].description);
      let city_name = response.data.name;
      let h1 = document.querySelector("#zaluzh");
      h1.textContent = Math.round(response.data.main.temp);
      let kyiv = document.querySelector("#kyiv");
      kyiv.innerHTML = city_name;
      let desc = document.querySelector("#clouds");
      desc.innerHTML =
        "The mood of the day is the following: " +
        response.data.weather[0].description;
      let humid = document.querySelector("#humid");
      humid.innerHTML = response.data.main.humidity + "%";
      let wind = document.querySelector("#wind");
      wind.innerHTML = response.data.wind.speed + " km/h";
            let icon = document.querySelector("#icon");
      icon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

function triggerWeather() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let trigger = document.querySelector("#locate");
trigger.addEventListener("click", triggerWeather);
