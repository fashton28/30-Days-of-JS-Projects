
const API_KEY = '1PXQx6HYtaeTNqyt0ATMW4TrUvBIsBsZ';
const BASE_URL = 'http://dataservice.accuweather.com';

// GET API functions
const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

const getCity = (city) => 
    fetchData(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)
        .then(data => data[0]?.Key);

const getWeather = (code) => 
    fetchData(`${BASE_URL}/currentconditions/v1/${code}?apikey=${API_KEY}`)
        .then(data => data[0]);

//UPDATING UI
// DOM elements
const form = document.querySelector("form");
const tempElement = document.getElementById("temp");
const titleElement = document.querySelector("h5");
const conditionElement = document.querySelector(".condition");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");


const updateUI = (city, weather) => {
    conditionElement.textContent = weather.WeatherText;
    tempElement.textContent = weather.Temperature.Metric.Value;
    titleElement.textContent = city;
};

// Event handler
const handleSubmit = async (e) => {
    e.preventDefault();
    const city = form.city.value.trim();

    try {
        const cityCode = await getCity(city);
        if (!cityCode) throw new Error('City not found');

        const weatherData = await getWeather(cityCode);
        updateUI(city, weatherData);
        form.reset();
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        // You might want to show this error to the user in the UI
    }
};

// Event listener
form.addEventListener("submit", handleSubmit);
