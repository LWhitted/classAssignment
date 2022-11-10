async function fetchWeather() {
    try {
        const results = await fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=398d9f85036ab66f822fd82148535c81&units=imperial");
        const weatherData = await results.json();
        console.log(weatherData);
        //now make const to create the data that you want to pull from API. It will always be above const.objectname
        const cityName= weatherData.name;
        const currentTemp= weatherData.main.temp;
        const weatherDescription= weatherData.weather[0].description;
        console.log({cityName, currentTemp, weatherDescription});
        const weatherElement= document.getElementById("weather");
        weatherElement.innerHTML = `<p>The current temperature in ${cityName} is ${currentTemp}. It is ${weatherDescription}.</p>`
        //in above console.log we are using curly brackets in the () so it shows as an object you don't have to do this though.
    } catch (e) {
        console.log("Something went wrong fetching the weather API", e)
    }
}

fetchWeather();
