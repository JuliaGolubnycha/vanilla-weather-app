//unction hello() {
 // alert("You should have finished this much earlier!!!!!!");
//}

//let button = document.querySelector("#fahrenheit-link");
//button.addEventListener("click", hello);

//function firstName() {
//if(nameFirst.length>0){
  //alert("Hello, " + nameFirst.trim() + "!");
//} else {
  //alert("Don't you have a name?!?!?!?");
//}}

function dateOfTheWeek(){
  let now = new Date();
  let day_of_the_week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = day_of_the_week[now.getDay()];
  alert(day);
}
//let nameFirst = prompt("What do you to be your name in this example?");
//firstName(nameFirst);
//dateOfTheWeek();

//function showFahrenheitTemperature(event) {
  //fahrenheitLink.removeEventListener("click", showFahrenheitTemperature);
  //fahrenheitLink.style.color = 'maroon';
 // event.preventDefault();
  //let h1 = document.querySelector("#zaluzh");
  //let temperatureCelsius = parseFloat(h1.textContent);
  //if (!isNaN(temperatureCelsius)) {
   // let fahrenheitTemperature = (Math.round(temperatureCelsius) * 9) / 5 + 32;
   // h1.innerHTML = fahrenheitTemperature;
  //}
//}


//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", showFahrenheitTemperature);


function city(event) {
  event.preventDefault();
  let city_name = document.getElementById("search-input").value;
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city_name +
    "&appid=" +
    apiKey +
    "&units=metric";

  axios
    .get(apiUrl)
    .then((response) => {
     // console.log(response.data);
      //console.log(response.data.main.temp);
      //console.log(response.data.weather[0].description);
      let kyiv = document.querySelector("#kyiv");
      let newCity = city_name.charAt(0).toUpperCase() + city_name.slice(1);
      kyiv.innerHTML = newCity;
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




//function handlePosition(position) {
 // console.log(position.coords.latitude);
  //console.log(position.coords.longitude);
 // getWeatherDataByCoords(position.coords.latitude, position.coords.longitude);
//}

//function getWeatherDataByCoords(lat, lon) {
  //let apiKey = "ed238469f9b5e9d801834270e65449bc";
  //let weatherUrl =
    //"https://api.openweathermap.org/data/2.5/weather?lat=" +
    //lat +
    //"&lon=" +
    //lon +
    //"&appid=" +
    //apiKey +
    //"&units=metric";




  //axios
    //.get(weatherUrl)
    //.then((response) => {
      //console.log(response.data);
      //console.log(response.data.main.temp);
      //console.log(response.data.weather[0].description);
      //let city_name = response.data.name;
      //let h1 = document.querySelector("#zaluzh");
      //h1.textContent = Math.round(response.data.main.temp);
      //let kyiv = document.querySelector("#kyiv");
      //kyiv.innerHTML = city_name;
      //let desc = document.querySelector("#clouds");
      //desc.innerHTML =
        //"The mood of the day is the following: " +
        //response.data.weather[0].description;
      //let humid = document.querySelector("#humid");
      //humid.innerHTML = response.data.main.humidity + "%";
      //let wind = document.querySelector("#wind");
      //wind.innerHTML = response.data.wind.speed + " km/h";
      //let icon = document.querySelector("#icon");
      //icon.setAttribute(
        //"src",
        //`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      //);
    //})
    //.catch((error) => {
      //console.log(error);
    //});
//}


//function updateCurrentWeather(data) {
  //let kyiv = document.querySelector("#kyiv");
  //kyiv.innerHTML = data.name;

  //let h1 = document.querySelector("#zaluzh");
  //h1.textContent = Math.round(data.main.temp);

  //let desc = document.querySelector("#clouds");
  //desc.innerHTML = "The mood of the day is the following: " + data.weather[0].description;

  //let humid = document.querySelector("#humid");
  //humid.innerHTML = data.main.humidity + "%";

  //let wind = document.querySelector("#wind");
  //wind.innerHTML = data.wind.speed + " km/h";

  //let icon = document.querySelector("#icon");
  //icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//}
//function showForecast(response) {
  //let forecastRow = document.querySelector("#forecast-row");
  //forecastRow.innerHTML = ""; // Очистіть попередні дані перед виведенням нового прогнозу

  //let dailyForecasts = groupForecastsByDay(response.list);

  //dailyForecasts.forEach((dailyForecast) => {
    //let col = document.createElement("div");
    //col.classList.add("col");

    //let forecastElement = document.createElement("p");
    //forecastElement.classList.add("dotw", "day-forecast");

    // Виведення середньої температури для кожного дня
    //forecastElement.innerHTML = `<span class="day-name">${getDayName(dailyForecast[0].dt)}</span><br />
      //<span class="fortemp">${calculateAverageTemperature(dailyForecast)}</span>
      //<span class="colgradus">°C</span><br />
      //<img src="https://openweathermap.org/img/wn/${dailyForecast[0].weather[0].icon}.png"
      //alt="weather" class="icon2" />`;

    //col.appendChild(forecastElement);
    //forecastRow.appendChild(col);
  //});
//}

//function groupForecastsByDay(forecasts) {
  // Групування прогнозів за днями
  //let groupedForecasts = {};
  //forecasts.forEach((forecast) => {
    //let date = new Date(forecast.dt_txt);
    //let dayKey = date.toISOString().split("T")[0]; // Використовуйте дату як ключ

    //if (!groupedForecasts[dayKey]) {
      //groupedForecasts[dayKey] = [];
    //}

    //groupedForecasts[dayKey].push(forecast);
  //});

  //return Object.values(groupedForecasts);
//}

//function calculateAverageTemperature(forecasts) {
  // Обчислення середньої температури
  //let totalTemperature = forecasts.reduce((sum, forecast) => sum + forecast.main.temp, 0);
  //return Math.round(totalTemperature / forecasts.length);
//}

//function getDayName(timestamp) {
  // Отримання назви дня тижня за таймстемпом
  //const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //const date = new Date(timestamp * 1000);
  //return weekday[date.getDay()];
//}


