const strorageName = "widget-weather";


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
async function getWeatherData() {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=60.15031&longitude=24.88248&timezone=auto&temperature_unit=celsius&wind_speed_unit=ms&precipitation_unit=mm&forecast_days=2&current=is_day,uv_index,temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,apparent_temperature,relative_humidity_2m,cloud_cover,surface_pressure&hourly=is_day,uv_index,temperature_2m,precipitation_probability,relative_humidity_2m,apparent_temperature,precipitation,weather_code,surface_pressure,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&daily=sunrise,sunset');
    weatherData = await response.json();
  } catch (err) {
    console.error(err);
  }
}


/*****************************************************************************
* Parse URL options
*****************************************************************************/
function parseOptions() {
    /* Get URL */
    const url = new URL(window.location.href);

    /* Level option */
    const levelOption = url.searchParams.get("level");
    if (levelOption == null) {
    } else {
    }
}

/*****************************************************************************
* Main
*****************************************************************************/
window.onload = async function() {
    try {
        // Parse options
        parseOptions();

        // Get current location (wait for result)
        let location = await getCurrentLocation();

        if (location == null) {
            location = {latitude: 60.1699, longitude: 24.9384};
        }

        // Get weather data (wait for results)
        await getWeatherData(location.latitude, location.longitude);

        // Fix canvas sizes
        const canvases = [
            ".wind-widget-canvas",
            ".precipitation-canvas",
            ".temperature-canvas",
            ".wind-canvas",
            ".uv-canvas"
        ];
        canvases.forEach(selector => fixCanvasSize(document.querySelector(selector)));

        // Draw current information into small widgets
        drawCurrentWeather();
        drawCurrentTemperature();
        drawCurrentWind();
        drawCurrentUVIndex();

        // Draw forecast graphs
        drawGraphs();

        // Show window
        document.getElementById("screen").style.visibility = "visible";
    } catch (err) {
        console.error("Error initializing page:", err);
    }
}






