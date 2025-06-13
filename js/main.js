let weather = {
  'apiKey': "c65c4adace0b6461a36160defbebe06a",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity, pressure} = data.main;
    const {speed} = data.wind;
    const {visibility} = data;
    console.log(name,icon,description,temp,humidity,speed, visibility);
    //console.log(typeof visibility);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    document.querySelector(".description").innerText = description;
    document.querySelector('.humidity').innerText = "Humidity: " + humidity + " %";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".visibility").innerText = "Visibility: " + visibility / 1000 + " km";
    document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
    document.querySelector(".search-bar").value = "";
  },
  search: function () {
    this.fetchWeather(document.querySelector('.search-bar').value);
  },
  tempConversion: function () {
    console.log(this.fetchWeather(document.querySelector(".temp").value));
  }
};

document.querySelector('.search-button').addEventListener('click', () => {
  weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', (event) => {
  if(event.key == "Enter") {
    weather.search();
  }
});
document.querySelector('.fahrenheit').addEventListener('click', () => {
  weather.tempConversion();
});
