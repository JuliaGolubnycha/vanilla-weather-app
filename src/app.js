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

//let nameFirst = prompt("What do you to be your name in this example?");
//firstName(nameFirst);
//dateOfTheWeek();
function dateOfTheWeek(){
  let now = new Date();
  let day_of_the_week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let first = document.querySelector("#dotwsun");
  first.innerHTML = day_of_the_week[now.getDay()+1];
  let second = document.querySelector("#dotwmon");
  second.innerHTML = day_of_the_week[now.getDay()+2];
  let third = document.querySelector("#dotwtue");
  third.innerHTML = day_of_the_week[now.getDay()+3];
  let fourth = document.querySelector("#dotwwed");
  fourth.innerHTML = day_of_the_week[now.getDay()+4];
  let fifth = document.querySelector("#dotwthur");
  fifth.innerHTML = day_of_the_week[now.getDay()+5];
}

dateOfTheWeek();


let convertedToFahrenheit = false;
let celsius = true;

function showFahrenheitTemperature(event) {
  event.preventDefault();
  let h1 = document.querySelector("#zaluzh");
  let first = document.querySelector("#temp_first");
  let second = document.querySelector("#temp_second");
  let third = document.querySelector("#temp_third");
  let fourth = document.querySelector("#temp_forth");
  let fifth = document.querySelector("#temp_fifth");
  let temperatureCelsius = parseFloat(h1.textContent);
  let temperatureCelsius1 = parseFloat(first.textContent);
  let temperatureCelsius2 = parseFloat(second.textContent);
  let temperatureCelsius3 = parseFloat(third.textContent);
  let temperatureCelsius4 = parseFloat(fourth.textContent);
  let temperatureCelsius5 = parseFloat(fifth.textContent);
  if (!convertedToFahrenheit) {
    let fahrenheitTemperature = (Math.round(temperatureCelsius) * 9) / 5 + 32;
    h1.innerHTML = Math.round(fahrenheitTemperature);
    let fahrenheitTemperature1 = (Math.round(temperatureCelsius1) * 9) / 5 + 32;
    first.innerHTML = Math.round(fahrenheitTemperature1);
    let fahrenheitTemperature2 = (Math.round(temperatureCelsius2) * 9) / 5 + 32;
    second.innerHTML = Math.round(fahrenheitTemperature2);
    let fahrenheitTemperature3 = (Math.round(temperatureCelsius3) * 9) / 5 + 32;
    third.innerHTML = Math.round(fahrenheitTemperature3);
    let fahrenheitTemperature4 = (Math.round(temperatureCelsius4) * 9) / 5 + 32;
    fourth.innerHTML = Math.round(fahrenheitTemperature4);
    let fahrenheitTemperature5 = (Math.round(temperatureCelsius5) * 9) / 5 + 32;
    fifth.innerHTML = Math.round(fahrenheitTemperature5);
    convertedToFahrenheit = true;
    celsius = false;
  }
}

function backToCelsius(event){
  event.preventDefault();
  let h1=document.querySelector("#zaluzh");
  let first = document.querySelector("#temp_first");
  let second = document.querySelector("#temp_second");
  let third = document.querySelector("#temp_third");
  let fourth = document.querySelector("#temp_forth");
  let fifth = document.querySelector("#temp_fifth");
  let tempF = parseFloat(h1.textContent);
  let tempF1 = parseFloat(first.textContent);
  let tempF2 = parseFloat(second.textContent);
  let tempF3 = parseFloat(third.textContent);
  let tempF4 = parseFloat(fourth.textContent);
  let tempF5 = parseFloat(fifth.textContent);
  if (!celsius) {
    let backTemp = (Math.round(tempF)-32)*5 / 9;
    h1.innerHTML = Math.round(backTemp);
    let backTemp1 = (Math.round(tempF1)-32)*5 / 9;
    first.innerHTML = Math.round(backTemp1);
    let backTemp2 = (Math.round(tempF2)-32)*5 / 9;
    second.innerHTML = Math.round(backTemp2);
    let backTemp3 = (Math.round(tempF3)-32)*5 / 9;
    third.innerHTML = Math.round(backTemp3);
    let backTemp4 = (Math.round(tempF4)-32)*5 / 9;
    fourth.innerHTML = Math.round(backTemp4);
    let backTemp5 = (Math.round(tempF5)-32)*5 / 9;
    fifth.innerHTML = Math.round(backTemp5);
    celsius = true;
    convertedToFahrenheit = false;
  }
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", backToCelsius);

function locating(){
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let city_name = document.getElementById("search-input").value;
  let apiUrl="https://api.openweathermap.org/geo/1.0/direct?q="+city_name+"&limit="+1+"&appid="+apiKey;
  axios
  .get(apiUrl)
  .then((response)=>{
    console.log(response.data); // Додайте цей рядок
    let latitude = response.data[0].lat;
    let longitude = response.data[0].lon;
    forecast(latitude, longitude);
  })
  .catch((error) => {
    console.log(error);
  });
}

function forecast(lat, lon){
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+apiKey;
  axios
  .get(apiUrl)
  .then((response) => {
    console.log(response.data);
    let first = document.querySelector("#temp_first");
    let firstCel= (((response.data.list[0].main.temp+response.data.list[1].main.temp+response.data.list[2].main.temp+response.data.list[3].main.temp+response.data.list[4].main.temp+response.data.list[5].main.temp+response.data.list[6].main.temp+response.data.list[7].main.temp)/8) - 273.15);
    first.innerHTML = Math.round(firstCel);
    let second = document.querySelector("#temp_second");
    let secondCel= (((response.data.list[8].main.temp+response.data.list[9].main.temp+response.data.list[10].main.temp+response.data.list[11].main.temp+response.data.list[12].main.temp+response.data.list[13].main.temp+response.data.list[14].main.temp+response.data.list[15].main.temp)/8) - 273.15);
    second.innerHTML = Math.round(secondCel);
    let third = document.querySelector("#temp_third");
    let thirdCel= (((response.data.list[16].main.temp+response.data.list[17].main.temp+response.data.list[18].main.temp+response.data.list[19].main.temp+response.data.list[20].main.temp+response.data.list[21].main.temp+response.data.list[22].main.temp+response.data.list[23].main.temp)/8) - 273.15);
    third.innerHTML = Math.round(thirdCel);
    let fourth = document.querySelector("#temp_forth");
    let fourthCel= (((response.data.list[24].main.temp+response.data.list[25].main.temp+response.data.list[26].main.temp+response.data.list[27].main.temp+response.data.list[28].main.temp+response.data.list[29].main.temp+response.data.list[30].main.temp+response.data.list[31].main.temp)/8) - 273.15);
    fourth.innerHTML = Math.round(fourthCel);
    let fifth = document.querySelector("#temp_fifth");
    let fifthCel= (((response.data.list[32].main.temp+response.data.list[33].main.temp+response.data.list[34].main.temp+response.data.list[35].main.temp+response.data.list[36].main.temp+response.data.list[37].main.temp+response.data.list[38].main.temp+response.data.list[39].main.temp)/8) - 273.15);
    fifth.innerHTML = Math.round(fifthCel);
    let icon1 = document.querySelector("#icon21");
      icon1.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png`
      );
      let icon2 = document.querySelector("#icon22");
      icon2.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.list[11].weather[0].icon}@2x.png`
      );
      let icon3 = document.querySelector("#icon23");
      icon3.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.list[19].weather[0].icon}@2x.png`
      );
      let icon4 = document.querySelector("#icon24");
      icon4.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.list[27].weather[0].icon}@2x.png`
      );
      let icon5 = document.querySelector("#icon25");
      icon5.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.list[35].weather[0].icon}@2x.png`
      );
  })
  .catch((error) => {
    console.log(error);
  });
}


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
    locating(); 
}


let trig = document.querySelector("#search-button");
trig.addEventListener("click", city);

function handlePosition(position) {
  //console.log(position.coords.latitude);
 //console.log(position.coords.longitude);
  getWeatherDataByCoords(position.coords.latitude, position.coords.longitude);
  forecast(position.coords.latitude, position.coords.longitude);
}

function getWeatherDataByCoords(lat, lon) {
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey +
    "&units=metric";

  axios
    .get(weatherUrl)
    .then((response) => {
      //console.log(response.data);
      //console.log(response.data.main.temp);
      //console.log(response.data.weather[0].description);
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

let triggerLocate = document.querySelector("#locate");
triggerLocate.addEventListener("click", triggerWeather);