const strorageName = "widget-weather";

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


var weatherData = undefined;
async function getWeatherData() {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=60.15031&longitude=24.88248&timezone=auto&temperature_unit=celsius&wind_speed_unit=ms&precipitation_unit=mm&forecast_days=2&current=is_day,uv_index,temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,apparent_temperature,relative_humidity_2m,cloud_cover,surface_pressure&hourly=is_day,uv_index,temperature_2m,precipitation_probability,relative_humidity_2m,apparent_temperature,precipitation,weather_code,surface_pressure,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&daily=sunrise,sunset');
    weatherData = await response.json();

    console.log(weatherData);
  } catch (err) {
    console.error(err);
  }
}


// Convert liquid variables to JS
const current_units = {
    "time": "iso8601",
    "interval": "seconds",
    "is_day": "",
    "uv_index": "",
    "temperature_2m": "°C",
    "precipitation": "mm",
    "weather_code": "wmo code",
    "wind_speed_10m": "m/s",
    "wind_direction_10m": "°",
    "wind_gusts_10m": "m/s",
    "apparent_temperature": "°C",
    "relative_humidity_2m": "%",
    "cloud_cover": "%",
    "surface_pressure": "hPa"
};
const current = {
    "time": "2025-12-15T10:30",
    "interval": 900,
    "is_day": 1,
    "uv_index": 0.05,
    "temperature_2m": 5.2,
    "precipitation": 0.0,
    "weather_code": 3,
    "wind_speed_10m": 5.7,
    "wind_direction_10m": 188,
    "wind_gusts_10m": 7.7,
    "apparent_temperature": 1.1,
    "relative_humidity_2m": 100,
    "cloud_cover": 100,
    "surface_pressure": 1004.8
};
const hourly_units  = {
    "time": "iso8601",
    "is_day": "",
    "uv_index": "",
    "temperature_2m": "°C",
    "precipitation_probability": "%",
    "relative_humidity_2m": "%",
    "apparent_temperature": "°C",
    "precipitation": "mm",
    "weather_code": "wmo code",
    "surface_pressure": "hPa",
    "cloud_cover": "%",
    "wind_speed_10m": "m/s",
    "wind_direction_10m": "°",
    "wind_gusts_10m": "m/s"
};
const hourly        = {
"time": [
  "2025-12-15T00:00",
  "2025-12-15T01:00",
  "2025-12-15T02:00",
  "2025-12-15T03:00",
  "2025-12-15T04:00",
  "2025-12-15T05:00",
  "2025-12-15T06:00",
  "2025-12-15T07:00",
  "2025-12-15T08:00",
  "2025-12-15T09:00",
  "2025-12-15T10:00",
  "2025-12-15T11:00",
  "2025-12-15T12:00",
  "2025-12-15T13:00",
  "2025-12-15T14:00",
  "2025-12-15T15:00",
  "2025-12-15T16:00",
  "2025-12-15T17:00",
  "2025-12-15T18:00",
  "2025-12-15T19:00",
  "2025-12-15T20:00",
  "2025-12-15T21:00",
  "2025-12-15T22:00",
  "2025-12-15T23:00",
  "2025-12-16T00:00",
  "2025-12-16T01:00",
  "2025-12-16T02:00",
  "2025-12-16T03:00",
  "2025-12-16T04:00",
  "2025-12-16T05:00",
  "2025-12-16T06:00",
  "2025-12-16T07:00",
  "2025-12-16T08:00",
  "2025-12-16T09:00",
  "2025-12-16T10:00",
  "2025-12-16T11:00",
  "2025-12-16T12:00",
  "2025-12-16T13:00",
  "2025-12-16T14:00",
  "2025-12-16T15:00",
  "2025-12-16T16:00",
  "2025-12-16T17:00",
  "2025-12-16T18:00",
  "2025-12-16T19:00",
  "2025-12-16T20:00",
  "2025-12-16T21:00",
  "2025-12-16T22:00",
  "2025-12-16T23:00"
],
"is_day": [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
],
"uv_index": [
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.1,
  0.1,
  0.1,
  0.05,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.05,
  0.3,
  0.35,
  0.25,
  0.05,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0
],
"temperature_2m": [
  3.8,
  3.3,
  3.5,
  3.6,
  3.8,
  3.8,
  4.0,
  4.1,
  4.2,
  4.8,
  5.2,
  5.2,
  5.4,
  5.5,
  5.7,
  5.9,
  5.9,
  5.8,
  5.8,
  5.9,
  5.9,
  5.8,
  5.9,
  6.0,
  6.1,
  6.1,
  6.2,
  6.2,
  6.1,
  6.1,
  6.1,
  6.1,
  6.1,
  6.3,
  6.2,
  6.3,
  6.4,
  6.7,
  6.7,
  6.5,
  6.4,
  6.2,
  6.1,
  6.0,
  6.1,
  6.1,
  6.2,
  6.3
],
"precipitation_probability": [
  70,
  30,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  4,
  10,
  20,
  33,
  45,
  56,
  66,
  69,
  61,
  46,
  33,
  23,
  14,
  8,
  6,
  6,
  6,
  6,
  5,
  6,
  8,
  11,
  12,
  10,
  7,
  4,
  2,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  2,
  2
],
"relative_humidity_2m": [
  98,
  100,
  100,
  98,
  97,
  99,
  98,
  97,
  96,
  97,
  99,
  100,
  99,
  98,
  98,
  98,
  98,
  96,
  96,
  96,
  95,
  95,
  95,
  94,
  95,
  95,
  96,
  97,
  97,
  98,
  97,
  97,
  98,
  98,
  98,
  97,
  95,
  93,
  91,
  92,
  91,
  94,
  94,
  86,
  91,
  89,
  90,
  94
],
"apparent_temperature": [
  -0.7,
  0.0,
  -0.2,
  0.4,
  0.6,
  0.9,
  1.6,
  1.8,
  1.6,
  1.6,
  1.1,
  1.1,
  1.0,
  1.1,
  1.1,
  0.9,
  1.3,
  1.1,
  1.9,
  2.4,
  2.1,
  2.2,
  2.5,
  2.7,
  2.7,
  2.8,
  2.7,
  2.9,
  2.9,
  2.6,
  2.8,
  3.3,
  3.1,
  3.2,
  2.7,
  2.9,
  2.9,
  2.2,
  1.0,
  2.0,
  2.5,
  2.8,
  2.6,
  1.9,
  1.9,
  1.9,
  1.4,
  1.5
],
"precipitation": [
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.2,
  0.2,
  0.3,
  1.6,
  0.8,
  0.1,
  0.1,
  0.2,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.1,
  1.5,
  0.1,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.1,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.1
],
"weather_code": [
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  51,
  51,
  51,
  61,
  53,
  51,
  51,
  51,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  51,
  61,
  51,
  3,
  3,
  3,
  3,
  3,
  3,
  51,
  3,
  3,
  3,
  3,
  3,
  51
],
"surface_pressure": [
  1002.9,
  1003.4,
  1003.9,
  1004.6,
  1005.0,
  1004.9,
  1004.9,
  1004.4,
  1004.4,
  1004.8,
  1004.8,
  1004.8,
  1004.9,
  1004.7,
  1004.6,
  1004.5,
  1004.5,
  1004.7,
  1004.8,
  1005.0,
  1005.2,
  1005.4,
  1005.8,
  1006.6,
  1007.2,
  1007.6,
  1007.9,
  1008.1,
  1008.3,
  1008.6,
  1009.1,
  1009.5,
  1010.0,
  1010.5,
  1011.1,
  1011.6,
  1011.7,
  1012.0,
  1012.2,
  1012.6,
  1012.8,
  1012.8,
  1012.8,
  1012.7,
  1012.8,
  1012.8,
  1013.1,
  1013.2
],
"cloud_cover": [
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  99,
  100,
  100,
  100,
  100
],
"wind_speed_10m": [
  5.7,
  3.5,
  4.1,
  3.1,
  3.1,
  2.8,
  1.7,
  1.5,
  2.2,
  3.5,
  5.4,
  5.7,
  6.2,
  6.1,
  6.6,
  7.6,
  6.8,
  6.8,
  5.4,
  4.5,
  4.9,
  4.6,
  4.2,
  4.1,
  4.2,
  4.2,
  4.5,
  4.1,
  4.0,
  4.5,
  4.2,
  3.3,
  3.7,
  4.2,
  4.8,
  4.5,
  4.8,
  6.4,
  8.7,
  6.4,
  5.1,
  4.2,
  4.3,
  5.0,
  5.5,
  5.5,
  6.7,
  6.9
],
"wind_direction_10m": [
  251,
  280,
  277,
  264,
  246,
  253,
  237,
  179,
  166,
  188,
  188,
  203,
  213,
  213,
  214,
  218,
  225,
  235,
  240,
  233,
  238,
  250,
  251,
  248,
  250,
  250,
  250,
  252,
  249,
  242,
  250,
  240,
  230,
  241,
  234,
  235,
  241,
  244,
  240,
  230,
  238,
  239,
  245,
  230,
  229,
  238,
  243,
  239
],
"wind_gusts_10m": [
  11.5,
  7.6,
  6.1,
  5.6,
  4.3,
  4.7,
  3.9,
  2.3,
  2.8,
  4.7,
  7.2,
  7.8,
  8.4,
  8.6,
  8.9,
  10.4,
  10.3,
  9.3,
  9.1,
  7.3,
  6.6,
  6.6,
  6.3,
  5.8,
  5.7,
  5.7,
  6.1,
  6.1,
  5.6,
  6.1,
  6.4,
  5.7,
  5.0,
  5.7,
  6.5,
  6.8,
  6.5,
  8.7,
  11.8,
  11.8,
  8.9,
  6.8,
  7.0,
  6.8,
  7.4,
  7.9,
  9.1,
  9.5
]
};
const daily_units   = {
"time": "iso8601",
"sunrise": "iso8601",
"sunset": "iso8601"
};
const daily         = {
"time": [
  "2025-12-15",
  "2025-12-16"
],
"sunrise": [
  "2025-12-15T09:19",
  "2025-12-16T09:20"
],
"sunset": [
  "2025-12-15T15:12",
  "2025-12-16T15:12"
]
};


// Set canvas size
function fixCanvasSize(canvas) {
    const dpi = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpi;
    canvas.height = canvas.clientHeight * dpi;
}


// *** Current weather *******************************************************
const weatherIconsURL = "https://nrkno.github.io/yr-weather-symbols/symbols/darkmode/";
const weatherIcons = {
     0: ["01n.svg", "01d.svg"],     // Clear sky
     1: ["02n.svg", "02d.svg"],     // Mainly clear
     2: ["03n.svg", "03d.svg"],     // Partly cloudy
     3: ["04.svg" , "04.svg" ],     // Overcast
    45: ["14.svg" , "14.svg" ],     // Fog
    48: ["12.svg" , "12.svg" ],     // Depositing rime fog
    51: ["46.svg" , "46.svg" ],     // Drizzle: Light
    53: ["09.svg" , "09.svg" ],     // Drizzle: Moderate
    55: ["10.svg" , "10.svg" ],     // Drizzle: Dense
    56: ["47.svg" , "47.svg" ],     // Freezing Drizzle: Light
    57: ["12.svg" , "12.svg" ],     // Freezing Drizzle: Dense
    61: ["46.svg" , "46.svg" ],     // Rain: Slight
    63: ["09.svg" , "09.svg" ],     // Rain: Moderate
    65: ["10.svg" , "10.svg" ],     // Rain: Heavy
    66: ["47.svg" , "47.svg" ],     // Freezing Rain: Light
    67: ["48.svg" , "48.svg" ],     // Freezing Rain: Heavy
    71: ["49.svg" , "49.svg" ],     // Snow fall: Slight
    73: ["13.svg" , "13.svg" ],     // Snow fall: Moderate
    75: ["50.svg" , "50.svg" ],     // Snow fall: Heavy
    77: ["13.svg" , "13.svg" ],     // Snow grains
    80: ["05n.svg", "05d.svg"],     // Rain showers: Slight
    81: ["40n.svg", "40d.svg"],     // Rain showers: Moderate
    82: ["41n.svg", "41d.svg"],     // Rain showers: Heavy
    85: ["42n.svg", "42d.svg"],     // Snow showers: Slight
    86: ["08n.svg", "08d.svg"],     // Snow showers: Heavy
    95: ["30.svg" , "30.svg" ],     // Thunderstorm: Slight
    96: ["22.svg" , "22.svg" ],     // Thunderstorm: Moderate
    99: ["23.svg" , "23.svg" ]      // Thunderstorm with slight and heavy hail
};
function getWeatherIcon(code, is_day)  {
    var fileName = weatherIcons[code][is_day] || "01d.svg";

    return weatherIconsURL + fileName;
}
function drawCurrentWeather() {
    document.getElementById("weather-header").innerHTML = "HELSINKI";
    document.getElementById("daily-sunrise").innerHTML  = daily.sunrise[0].split("T")[1];
    document.getElementById("daily-sunset").innerHTML   = daily.sunset[0].split("T")[1];
    document.getElementById("current-weather-img").src = getWeatherIcon(current.weather_code, current.is_day);
}


// *** Current temperature *******************************************************
function drawCurrentTemperature() {
    document.getElementById("temperature-header").innerHTML           = "TEMPERATURE";
    document.getElementById("current-temperature").innerHTML          = current.temperature_2m;
    document.getElementById("current-apparent-temperature").innerHTML = current.apparent_temperature;
    document.getElementById("current-temperature-unit").innerHTML     = current_units.temperature_2m;
}


// *** Current wind *******************************************************
function drawCurrentWindArrow(canvas) {
    const ctx = canvas.getContext("2d");

    const arrowAngle = Math.PI * 2 * ((current.wind_direction_10m + 180)/ 360);
    const sin = Math.sin(arrowAngle);
    const cos = Math.cos(arrowAngle);

    var points = [
        {x:  0.00, y:  0.45},
        {x: -0.13, y: -0.30},
        {x:  0.13, y: -0.30}
    ];

    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    for (let index = 0; index < points.length; index++) {
        // Rotate with angle (clockwise)
        var x =  points[index].x * cos + points[index].y * sin;
        var y = -points[index].x * sin + points[index].y * cos;

        // Convert to canvas coordinates
        x = x * canvas.height;
        y = y * canvas.height;

        if (index == 0) {
            ctx.moveTo(canvas.width / 2 + x, canvas.height / 2 - y);
        } else {
            ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 - y);
        }
    }
    ctx.fill();
}

function drawCurrentWind() {
    document.getElementById("wind-header").innerHTML       = "WIND";
    document.getElementById("current-wind").innerHTML      = current.wind_speed_10m;
    document.getElementById("current-gusts").innerHTML     = current.wind_gusts_10m;
    document.getElementById("current-wind-unit").innerHTML = current_units.wind_speed_10m;
    drawCurrentWindArrow(document.querySelector(".wind-widget-canvas"));
}


// *** Current UV index *******************************************************
function drawCurrentUVIndex() {
    document.getElementById("uv-index-header").innerHTML     = "UV INDEX";
    document.getElementById("current-uv-index").innerHTML    = current.uv_index;
    document.getElementById("current-cloud-cover").innerHTML = current.cloud_cover + "%";
}

// *** Graph cursor *******************************************************
function drawGraphCurrentCursor(graph) {
    const canvas = graph.canvas;

    // Findout current hour
    const date = new Date(current.time);
    const hour = date.getHours() + date.getMinutes() / 60;

    // Convert current hour to canvas x-value
    const canvasX      = Math.round(graph.xOffset + graph.xCoeff * hour) + 0.5;
    const canvasYStart = Math.round(graph.marginTop);
    const canvasYEnd   = Math.round(canvas.height - graph.marginBottom);

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000";
    ctx.lineWidth   = 1;
    ctx.setLineDash([1, 5]);

    ctx.beginPath();
    ctx.moveTo(canvasX, canvasYStart);
    ctx.lineTo(canvasX, canvasYEnd);
    ctx.stroke();

}


// *** Graph x-axis *******************************************************
function drawGraphXAxis(graph = {}, minorTick, majorTick) {
    const canvas = graph.canvas;
    const ctx = canvas.getContext("2d");

    if (graph !== undefined && graph !== null && Object.keys(graph).length > 0) {
        const canvasY = Math.round(canvas.height - graph.marginBottom) + 0.5;

        ctx.strokeStyle = graph.color;
        ctx.fillStyle   = graph.color;
        ctx.lineWidth   = 0.5;
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.moveTo(graph.xOffset, canvasY);
        ctx.lineTo(graph.xOffset + graph.xCoeff * (graph.xValueMax - graph.xValueMin),   canvasY);
        ctx.stroke();

        for (let hour = 0; hour <= graph.xValueMax; hour += minorTick) {
            // Convert value to x position
            const canvasX =  graph.xOffset + Math.round(hour * graph.xCoeff);

            // Normal tick
            ctx.beginPath();
            ctx.moveTo(canvasX, canvasY);
            ctx.lineTo(canvasX, canvasY + graph.tickLength);
            ctx.stroke();

            // Day tick
            if (hour > 0 && hour < graph.xValueMax && (hour % 24) == 0) {
                ctx.beginPath();
                ctx.moveTo(canvasX, graph.marginTop);
                ctx.lineTo(canvasX, canvas.height - graph.marginBottom);
                ctx.stroke();
            }

            var tickText = "";
            if (hour > 0 && (hour % majorTick) == 0) {
                tickText = String(hour % 24).padStart(2, "0");
            }
            ctx.textAlign    = "center";
            ctx.textBaseline = "middle";
            ctx.font         = "normal 400 " + graph.fontSize + "px 'Oswald'";
            ctx.fillText(tickText, canvasX, (canvasY + graph.tickLength + canvas.height) / 2);
        }
    }
}

// *** Graph y-axis *******************************************************
const YAxisType = Object.freeze({
  LEFT:  "LEFT",
  RIGHT: "RIGHT"
});

function drawGraphYAxis(graph = {}, unitText, yAxisType, minorTick, majorTick) {
    const canvas = graph.canvas;
    const ctx = canvas.getContext("2d");

    if (graph !== undefined && graph !== null && Object.keys(graph).length > 0) {
        var canvasX = 0;
        var tickLength = 0;
        var textShift = 0;
        switch (yAxisType) {
            case YAxisType.LEFT:
                canvasX    = Math.round(graph.marginLeft) + 0.5;
                tickLength = -graph.tickLength;
                textShift  = -(graph.tickLength + 1);
                textAlign  = "right";
                break;
            case YAxisType.RIGHT:
                canvasX    = Math.round(canvas.width - graph.marginRight) + 0.5;
                tickLength = graph.tickLength;
                textShift  = graph.fontSize * 1.8;
                textAlign  = "right";
                break;
        }

        ctx.strokeStyle = graph.color;
        ctx.fillStyle   = graph.color;
        ctx.lineWidth   = 0.5;
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.moveTo(canvasX, graph.marginTop);
        ctx.lineTo(canvasX, canvas.height - graph.marginBottom);
        ctx.stroke();

        // Minor ticks
        for (let yValue = graph.yValueMin; yValue <= graph.yValueMax; yValue += minorTick) {
            // Convert value to y position
            const canvasY =  graph.yOffset + Math.round(yValue * graph.yCoeff);

            ctx.beginPath();
            ctx.moveTo(canvasX, canvasY);
            ctx.lineTo(canvasX + tickLength, canvasY);
            ctx.stroke();
        }

        // Major ticks (labels)
        for (let yValue = graph.yValueMin; yValue <= graph.yValueMax; yValue += majorTick) {
            // Convert value to y position
            const canvasY =  graph.yOffset + Math.round(yValue * graph.yCoeff);

            var tickText = "";
            if ((yValue % majorTick) == 0) {
                tickText = String(yValue)
            }

            ctx.textAlign    = textAlign;
            ctx.textBaseline = "middle";
            ctx.font         = "normal 400 " + graph.fontSize + "px 'Oswald'";
            ctx.fillText(tickText, canvasX + textShift, canvasY);
        }

        // Y-axis unit
        const canvasY = graph.marginTop / 2;

        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.font         = "normal 200 " + graph.fontSize + "px 'Oswald'";
        ctx.fillText(unitText, canvasX, canvasY);
    }
}


// *** Graph data *******************************************************
const GraphType = Object.freeze({
  BAR:         "BAR",
  LINE:        "LINE",
  LINE_DASHED: "LINE_DASHED"
});
function drawGraphData(graph, yValues, graphType) {
    const canvas = graph.canvas;
    const ctx = canvas.getContext("2d");

    switch (graphType) {
        case GraphType.BAR:
        default:
            for (let index = 0; index < yValues.length; index++) {
                const xValue = index - 0.5;
                const yValue = yValues[index];

                const canvasX = Math.round(graph.xOffset + graph.xCoeff * xValue);
                const canvasY = Math.round(graph.yOffset + graph.yCoeff * yValue);
                const canvasW = Math.round(graph.xCoeff * 1.0);
                const canvasH = Math.round(-graph.yCoeff * (yValue - graph.yValueMin));

                ctx.fillStyle   = "#888";
                ctx.fillRect(canvasX, canvasY,
                             canvasW, canvasH);
                ctx.fill();
            }

            break;
        case GraphType.LINE:
        case GraphType.LINE_DASHED:
            ctx.strokeStyle = "#000";
            ctx.lineWidth   = 1.0;
            if (graphType == GraphType.LINE_DASHED) {
                ctx.setLineDash([1, 3]);
            } else {
                ctx.setLineDash([]);
            }

            ctx.beginPath();
            for (let index = 0; index < yValues.length; index++) {
                const xValue = index;
                const yValue = yValues[index];

                const canvasX = Math.round(graph.xOffset + graph.xCoeff * xValue);
                const canvasY = Math.round(graph.yOffset + graph.yCoeff * yValue);

                if (index == 0) {
                    ctx.moveTo(canvasX, canvasY);
                } else {
                    ctx.lineTo(canvasX, canvasY);
                }
            }
            ctx.stroke();

            break;
    }

}


// *** Graph initialization *******************************************************
function initializeGraph(canvas, xValues, yVariables, yValueStep) {
    var graph = {
        canvas:         canvas,

        marginTop:      canvas.height * 0.13,
        marginBottom:   canvas.height * 0.13,
        marginLeft:     canvas.height * 0.20,
        marginRight:    canvas.height * 0.20,
        color:          "#000",

        tickLength:     canvas.height * 0.025,
        fontSize:       canvas.height * 0.083
    };

    // Initialize x-axis min/max values
    graph.xValueMin = 0;
    graph.xValueMax = xValues.length - 1;

    // Calculate x offset and coeff
    const axisXStart  = Math.round(graph.marginLeft) + 0.5;
    const axisXEnd    = Math.round(canvas.width - graph.marginRight) + 0.5;
    const valueXRange = graph.xValueMax - graph.xValueMin;
    const axisXRange  = axisXEnd - axisXStart;
    graph.xCoeff      = axisXRange / valueXRange;
    graph.xOffset     = axisXStart;

    // Initialize y min/max values
    graph.yValueMin = +10000000;
    graph.yValueMax = -10000000;

    for (let variable = 0; variable < yVariables.length; variable++) {
        const yValues = yVariables[variable];

        for (let index = 0; index < yValues.length; index++) {
            const yValue = yValues[index];

            if (graph.yValueMin > yValue) {
                graph.yValueMin = yValue;
            }
            if (graph.yValueMax < yValue) {
                graph.yValueMax = yValue;
            }
        }
    }

    // Round to the nearest
    graph.yValueMin = Math.floor(graph.yValueMin / yValueStep) * yValueStep;
    graph.yValueMax = Math.ceil(graph.yValueMax / yValueStep) * yValueStep;
    if (graph.yValueMin == graph.yValueMax) {
        graph.yValueMax += yValueStep;
    }

    // Calculate y offset and coeff
    const axisYStart  = Math.round(canvas.height - graph.marginBottom) + 0.5;
    const axisYEnd    = Math.round(graph.marginTop) + 0.5;

    const valueYRange = graph.yValueMax - graph.yValueMin;
    const axisYRange  = axisYEnd - axisYStart;
    graph.yCoeff      = axisYRange / valueYRange;
    graph.yOffset     = axisYStart - graph.yCoeff * graph.yValueMin;

    return graph;
}

function drawGraphs() {
    // Initialize graphs
    precipitationGraph     = initializeGraph(document.querySelector(".precipitation-canvas"), hourly.time, [hourly.precipitation],                               5);
    precipitationProbGraph = initializeGraph(document.querySelector(".precipitation-canvas"), hourly.time, [[0, 100]],                                           5);
    temperatureGraph       = initializeGraph(document.querySelector(".temperature-canvas"),   hourly.time, [hourly.temperature_2m, hourly.apparent_temperature], 5);
    windGraph              = initializeGraph(document.querySelector(".wind-canvas"),          hourly.time, [hourly.wind_speed_10m, hourly.wind_gusts_10m],       5);
    uvGraph                = initializeGraph(document.querySelector(".uv-canvas"),            hourly.time, [hourly.uv_index],                                    5);
    cloudCoverGraph        = initializeGraph(document.querySelector(".uv-canvas"),            hourly.time, [[0, 100]],                                           5);

    // Draw cursors
    drawGraphCurrentCursor(precipitationGraph);
    drawGraphCurrentCursor(temperatureGraph);
    drawGraphCurrentCursor(windGraph);
    drawGraphCurrentCursor(uvGraph);

    // Draw data
    drawGraphData(precipitationGraph,     hourly.precipitation,             GraphType.LINE);
//        drawGraphData(precipitationGraph,     hourly.precipitation,             GraphType.BAR);
    drawGraphData(precipitationProbGraph, hourly.precipitation_probability, GraphType.LINE_DASHED);
    drawGraphData(temperatureGraph,       hourly.temperature_2m,            GraphType.LINE);
    drawGraphData(temperatureGraph,       hourly.apparent_temperature,      GraphType.LINE_DASHED);
    drawGraphData(windGraph,              hourly.wind_speed_10m,            GraphType.LINE);
    drawGraphData(windGraph,              hourly.wind_gusts_10m,            GraphType.LINE_DASHED);
    drawGraphData(uvGraph,                hourly.uv_index,                  GraphType.LINE);
//        drawGraphData(uvGraph,                hourly.uv_index,                  GraphType.BAR);
    drawGraphData(cloudCoverGraph,        hourly.cloud_cover,               GraphType.LINE_DASHED);

    // Draw x-axis
    drawGraphXAxis(precipitationGraph, minorTick = 1, majorTick = Math.round(hourly.time.length / 12));
    drawGraphXAxis(temperatureGraph,   minorTick = 1, majorTick = Math.round(hourly.time.length / 12));
    drawGraphXAxis(windGraph,          minorTick = 1, majorTick = Math.round(hourly.time.length / 12));
    drawGraphXAxis(uvGraph,            minorTick = 1, majorTick = Math.round(hourly.time.length / 12));

    // Draw y-axis
    drawGraphYAxis(precipitationGraph,     hourly_units.precipitation,             YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(precipitationProbGraph, hourly_units.precipitation_probability, YAxisType.RIGHT, minorTick = 10, majorTick = 25);
    drawGraphYAxis(temperatureGraph,       hourly_units.temperature_2m,            YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(temperatureGraph,       hourly_units.apparent_temperature,      YAxisType.RIGHT, minorTick = 1,  majorTick = 5);
    drawGraphYAxis(windGraph,              hourly_units.wind_speed_10m,            YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(windGraph,              hourly_units.wind_gusts_10m,            YAxisType.RIGHT, minorTick = 1,  majorTick = 5);
    drawGraphYAxis(uvGraph,                hourly_units.uv_index,                  YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(cloudCoverGraph,        hourly_units.cloud_cover,               YAxisType.RIGHT, minorTick = 10, majorTick = 25);
}



// *** Main *******************************************************
window.onload = function() {
    // Parse options
    parseOptions();

    // Get weather data
    getWeatherData();

    // Fix canvas sizes
    fixCanvasSize(document.querySelector(".wind-widget-canvas"));
    fixCanvasSize(document.querySelector(".precipitation-canvas"));
    fixCanvasSize(document.querySelector(".temperature-canvas"));
    fixCanvasSize(document.querySelector(".wind-canvas"));
    fixCanvasSize(document.querySelector(".uv-canvas"));

    // Draw current information into small widgets
    drawCurrentWeather();
    drawCurrentTemperature();
    drawCurrentWind();
    drawCurrentUVIndex();

    // Draw forecast graphs
    drawGraphs();

    // Show window
    document.getElementById("screen").style.visibility = "visible";
}






