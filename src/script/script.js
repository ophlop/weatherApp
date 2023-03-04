const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "34eb46cf27msh7166df608a6238cp161b5ejsn0f643a99bbf7",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
};

const link = "https://weatherapi-com.p.rapidapi.com/current.json?q=";

let city = `${document.querySelector("#country").value}`;

const store = {
    city: city,
};

async function fetchData() {
    let city = `${document.querySelector("#country").value}`;

    const store = {
        city: city,
    };

    const result = await fetch(`${link}${store.city}`, options);
    const data = await result.json();

    let iconWeather = document.querySelector(".weather_icon");
    let weatherText = data.current.condition.text;
    iconWeather.src = `src/image/${weatherText}.png`;

    let currentTemp = document.querySelector(".temp_c");
    let rightTemp = `${data.current.temp_c}`;

    currentTemp.innerHTML =
        `${rightTemp[0]}` == "-" ? `${rightTemp} °С` : `+${rightTemp} °С`;

    let currentCity = document.querySelector(".city_current");
    currentCity.innerHTML = `${data.location.name}`;

    let currentTime = document.querySelector(".time_current");
    currentTime.innerHTML = `${data.current.last_updated}`;

    let app = document.querySelector(".app");
    app.append(iconWeather, currentTemp, currentCity, currentTime);

    console.log(data);
}
