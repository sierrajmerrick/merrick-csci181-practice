let is_loading = false;
let error_message = "";
let weather_data = null;

output_element = document.getElementById("weather-output")

function renderWeather() {

    if (is_loading) {
        output_element.className = "weather-output--loading";
        output_element.innerHTML = "Loading...";
    }
    else if (error_message) {
        output_element.className = "weather-output--error";
        output_element.innerHTML =  error_message;
    }
    else if (weather_data) {
        const temp = weather_data.properties.periods[0].temperature;
        const forecast = weather_data.properties.periods[0].shortForecast;
        output_element.className = "weather-output--data";
        output_element.innerHTML = "<div id='weather-output--temp'>" + temp + "°F</div><br><div id='weather-output--forecast'>" + forecast + "</div>";
    }
    else{
    output_element.className = "weather-output--fallback";
    output_element.innerHTML = "weather data not available...";
    }
}

renderWeather();

async function getWeatherData() {
    is_loading = true;
    error_message = "";
    renderWeather();

    try {
        const response = await fetch("https://api.weather.gov/gridpoints/MSO/105,131/forecast");
        if (!response.ok) {
        throw new Error(`HTTP error. status: ${response.status}`);
    }
        weather_data = await response.json();
        console.log("Success:", weather_data);
        renderWeather();
    } 
    
    catch (error) {
        error_message = error.message;
        console.error(error_message);
        renderWeather();

    } 
    
    finally {
        is_loading = false;
        console.log("Request finished");
        renderWeather();
    }
}

getWeatherData();