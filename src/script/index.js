const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "34eb46cf27msh7166df608a6238cp161b5ejsn0f643a99bbf7",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
};

const link = "https://weatherapi-com.p.rapidapi.com/current.json?q=";

window.onload = async function() {
    const result = await fetch(`${link}Saratov`, options);
    const data = await result.json();

    let iconWeather = document.querySelector(".weather_icon");
    let icon = `${data.current.condition.icon}`    
        if (data.current.is_day == 1) {
            iconWeather.src = `./src/image/day/${icon.slice(icon.length - 7)}`
        } else {
            iconWeather.src = `./src/image/night/${icon.slice(icon.length - 7)}`
        }

    let currentCity = document.querySelector(".city_current");
    currentCity.innerHTML = `${data.location.name}`;

    let currentCountry = document.querySelector(".country_current");
    currentCountry.innerHTML = `${data.location.country}`;

    let currentTemp = document.querySelector(".temp_c");
    let rightTemp = `${data.current.temp_c}`;
    currentTemp.innerHTML = `${rightTemp[0]}` == "-" ?
        `${rightTemp} °С` :
        `+${rightTemp} °С`;

    let currentFeelsTemp = document.querySelector(".feelslike_c");
    let rightFeelsTemp = `${data.current.feelslike_c}`;
    currentFeelsTemp.innerHTML = `${rightFeelsTemp[0]}` == "-" ?
        `Feels Like: ${rightFeelsTemp} °С` :
        `Feels Like: +${rightFeelsTemp} °С`;

    let weatherText = document.querySelector(".weather_text");
    weatherText.innerHTML = `${data.current.condition.text}`

    let currentTime = document.querySelector(".lastUpdate");
    currentTime.innerHTML = `Last Update: ${data.current.last_updated}`;

    let appIcon = document.querySelector(".app_weather-icon");
    appIcon.append(iconWeather, weatherText)

    let appFirstData = document.querySelector(".app_city-country");
    appFirstData.append(currentCity, currentCountry);

    let appTempData = document.querySelector(".app_temperature");
    appTempData.append(currentTemp, currentFeelsTemp);

    let appUpdateData = document.querySelector(".app_temperature-info");
    appUpdateData.append(currentTime);

    let currentHumidity = document.querySelector(".humidity");
    currentHumidity.innerHTML = `${data.current.humidity}%`; 

    let currentCloud = document.querySelector(".cloud");
    let cloud = data.current.cloud
    currentCloud.innerHTML = `${cloud}%(${
        0 < cloud && cloud < 25 ? 'clear sky' :
        25 <= cloud && cloud < 50 ? 'partly cloudy' :
        50 <= cloud && cloud < 75 ? 'overcast' :
        'cloudy'})`;

    let currentWind = document.querySelector(".wind_kph");
    currentWind.innerHTML = `${data.current.wind_kph} kph`;

    let appHumidity = document.querySelector(".app_humidity-data");
    appHumidity.append(currentHumidity);

    let appCloud = document.querySelector(".app_cloud-data");
    appCloud.append(currentCloud);

    let appWind = document.querySelector(".app_wind-data");
    appWind.append(currentWind);

    sessionStorage.setItem('name', data.location.name)
}

async function fetchData() {

    let city = document.querySelector(".header-input").value

    const result = await fetch(`${link}${city}`, options);
    const data = await result.json();
    
    console.log(data)

    let iconWeather = document.querySelector(".weather_icon");
    let icon = `${data.current.condition.icon}`    
        if (data.current.is_day == 1) {
            iconWeather.src = `./src/image/day/${icon.slice(icon.length - 7)}`
        } else {
            iconWeather.src = `./src/image/night/${icon.slice(icon.length - 7)}`
        }

    let currentCity = document.querySelector(".city_current");
    currentCity.innerHTML = `${data.location.name}`;

    let currentCountry = document.querySelector(".country_current");
    currentCountry.innerHTML = `${data.location.country}`;

    let currentTemp = document.querySelector(".temp_c");
    let rightTemp = `${data.current.temp_c}`;
    currentTemp.innerHTML = `${rightTemp[0]}` == "-" ?
        `${rightTemp} °С` :
        `+${rightTemp} °С`;

    let currentFeelsTemp = document.querySelector(".feelslike_c");
    let rightFeelsTemp = `${data.current.feelslike_c}`;
    currentFeelsTemp.innerHTML = `${rightFeelsTemp[0]}` == "-" ?
        `Feels Like: ${rightFeelsTemp} °С` :
        `Feels Like: +${rightFeelsTemp} °С`;

    let weatherText = document.querySelector(".weather_text");
    weatherText.innerHTML = `${data.current.condition.text}`

    let currentTime = document.querySelector(".lastUpdate");
    currentTime.innerHTML = `Last Update: ${data.current.last_updated}`;

    let appIcon = document.querySelector(".app_weather-icon");
    appIcon.append(iconWeather, weatherText)

    let appFirstData = document.querySelector(".app_city-country");
    appFirstData.append(currentCity, currentCountry);

    let appTempData = document.querySelector(".app_temperature");
    appTempData.append(currentTemp, currentFeelsTemp);

    let appUpdateData = document.querySelector(".app_temperature-info");
    appUpdateData.append(currentTime);

    let currentHumidity = document.querySelector(".humidity");
    currentHumidity.innerHTML = `${data.current.humidity}%`; 

    let currentCloud = document.querySelector(".cloud");
    let cloud = data.current.cloud
    currentCloud.innerHTML = `${cloud}%(${
        0 < cloud && cloud < 25 ? 'clear sky' :
        25 <= cloud && cloud < 50 ? 'partly cloudy' :
        50 <= cloud && cloud < 75 ? 'overcast' :
        'cloudy'})`;

    let currentWind = document.querySelector(".wind_kph");
    currentWind.innerHTML = `${data.current.wind_kph} kph`;

    let appHumidity = document.querySelector(".app_humidity-data");
    appHumidity.append(currentHumidity);

    let appCloud = document.querySelector(".app_cloud-data");
    appCloud.append(currentCloud);

    let appWind = document.querySelector(".app_wind-data");
    appWind.append(currentWind);

    sessionStorage.setItem('name', data.location.name)
}

const btnFunc = document.querySelector(".header-btn")

btnFunc.addEventListener('click', function() {
    console.log(sessionStorage.name)
    // if (sessionStorage.name !== 'undefined') {
        let divRenderStore = document.querySelector('.oldResult')
        let localName = document.createElement('h2')
        localName.innerHTML = `${sessionStorage.name}`
        divRenderStore.append(localName)
    // }
})