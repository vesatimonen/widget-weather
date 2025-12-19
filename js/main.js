const strorageName = "widget-weather";


/*****************************************************************************
* Get location address
*****************************************************************************/
async function getLocationAddress(latitude, longitude) {
    try {
        const response = await fetch('https://nominatim.openstreetmap.org/reverse?lat=' + latitude + '&lon=' + longitude + '&format=json');
        locationInfo = await response.json();

        const addressParts = [
            locationInfo?.address?.quarter,
            locationInfo?.address?.suburb,
            locationInfo?.address?.city,
            locationInfo?.address?.country
        ];
        const name = addressParts.filter(part => part).join(" • ");

        return name;
    } catch (err) {
        console.error(err);
    }
    return null;
}

/*****************************************************************************
* Get current location
*****************************************************************************/
async function getCurrentLocation() {
    try {
        if (!("geolocation" in navigator)) {
            throw new Error("Geolocation is not supported by this browser.");
        }

        // Wrap getCurrentPosition in a Promise so we can use await
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        // Extract latitude and longitude
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        return { latitude, longitude }; // return as object
    } catch (err) {
        console.warn("Failed to get current location:", err);
        return null; // or handle it in another way
    }
}


/*****************************************************************************
* Get weather data
*****************************************************************************/
let weatherData = undefined;
async function getWeatherData(latitude, longitude) {
    try {
        const query = "https://api.open-meteo.com/v1/forecast" +
                      "?latitude=" + latitude + "&longitude=" + longitude +
                      "&timezone=auto&temperature_unit=celsius&wind_speed_unit=ms&precipitation_unit=mm" +
                      "&forecast_days=2" +
                      "&current=is_day,uv_index,temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,apparent_temperature,relative_humidity_2m,cloud_cover,surface_pressure,precipitation_probability" +
                      "&hourly=is_day,uv_index,temperature_2m,precipitation_probability,relative_humidity_2m,apparent_temperature,precipitation,weather_code,surface_pressure,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m" +
                      "&daily=sunrise,sunset,sunshine_duration,daylight_duration,temperature_2m_min,temperature_2m_max,relative_humidity_2m_min,relative_humidity_2m_max,precipitation_sum,precipitation_hours,visibility_min,visibility_max";

        const response = await fetch(query);
        weatherData = await response.json();
    } catch (err) {
        console.error(err);
    }
}


/*****************************************************************************
* Get weather data
*****************************************************************************/
// https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=1&language=en&format=json


/*****************************************************************************
* Parse URL options
*****************************************************************************/
function getParams() {
    /* Get URL */
    const url = new URL(window.location.href);

    /* Name parameter */
    const name = url.searchParams.get("name");

    /* Location parameter */
    const latitude  = url.searchParams.get("latitude");
    const longitude = url.searchParams.get("longitude");

    return {name: name, location: {latitude, longitude}};
}

/*****************************************************************************
* Main
*****************************************************************************/

function redraw() {
    // Draw header information
    drawHeader();

    // Fix canvas sizes
    const canvases = [
        ".wind-widget-canvas",
        ".precipitation-canvas",
        ".temperature-canvas",
        ".wind-canvas",
        ".uv-canvas"
    ];
    for (let index = 0; index < canvases.length; index++) {
        resizeCanvas(document.querySelector(canvases[index]));
    }

    // Draw current information into small widgets
    drawCurrentWeather();
    drawCurrentTemperature();
    drawCurrentWind();
    drawCurrentUVIndex();

    // Draw forecast graphs
    drawGraphs();
}

window.onload = async function() {
    try {
        // Parse options
        let {name, location} = getParams();
console.log(name, location.latitude, location.longitude);

        if (location == null) {
            // Get current location if needed (wait for result)
            document.getElementById("header-title").innerHTML = "Get current location...";
            location = await getCurrentLocation();
            if (location == null) {
                location = {latitude: 60.1699, longitude: 24.9384};
            }
        }

        // Get weather data (wait for results)
        document.getElementById("header-title").innerHTML = "Loading weather data...";
        await getWeatherData(location.latitude, location.longitude);

        // Get location address (wait for result)
        document.getElementById("header-title").innerHTML = "Loading location address...";
        let address = await getLocationAddress(location.latitude, location.longitude);
        if (address == null) {
            address = "UNKNOWN PLACE";
        }

        document.getElementById("header-title").innerHTML = address;
    } catch (err) {
        console.error("Error initializing page:", err);
    }

    window.addEventListener("resize", redraw);
    redraw();

    // Show data widgets
    document.getElementById("data-widgets").style.visibility = "visible";

//    document.getElementById("header-title").innerHTML = "WIDGET WEATHER";
}


