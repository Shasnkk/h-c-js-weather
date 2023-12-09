const apikey = "b3e4899557ec6eb889636ba1add1d4d1";//https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=&units=metric
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const imgebox = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");


async function checkWeather(cityName) {
    const response  = await fetch(apiUrl + cityName + `&appid=${apikey}`);
    const data = await response.json();

    if(response.status == 404) {
        error.style.display = "block";
        weather.style.display = "none"
    }

    if(data.weather[0].main==="cloud") {
        imgebox.src = "image/cloud.jpg";
    }

    if(data.weather[0].main==="rain") {
        imgebox.src = "image/rain.jpg";
    }

    if(data.weather[0].main==="clear") {
        imgebox.src = "image/sun.jpg";
    }

    else {
        imgebox.src = "image/cold.jpg";
    }
    
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h"

    weather.style.display = "block";
    error.style.display = "none";
}

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    checkWeather(searchBox.value);
})