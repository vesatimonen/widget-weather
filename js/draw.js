// Set canvas size
function resizeCanvas(canvas) {
    const parent     = canvas.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const rect       = canvas.getBoundingClientRect();

    const dpr = window.devicePixelRatio || 1;

    // Round CSS pixels to nearest integer
    const cssWidth  = parentRect.width;
    const cssHeight = parentRect.height;

    // Backing store size (physical pixels)
    const width  = cssWidth * dpr;
    const height = cssHeight * dpr;

    if (canvas.width !== width || canvas.height !== height) {
        canvas.width  = Math.round(width);
        canvas.height = Math.round(height);

        const ctx = canvas.getContext("2d");

        // CSS size (unchanged)
        canvas.style.width  = Math.round(cssWidth) + "px";
        canvas.style.height = Math.round(cssHeight) + "px";

//        console.log("Parent: ", parentRect.width, parentRect.height);
//        console.log("CSS: ", cssWidth, cssHeight);
    }
}


// *** Header *******************************************************
function drawHeader() {

    const sunshine_hours   = Math.round(weatherData.daily.sunshine_duration[0] / 3600);
    const sunshine_minutes = Math.floor((weatherData.daily.sunshine_duration[0] % 3600) / 60);

    const daylight_hours   = Math.round(weatherData.daily.daylight_duration[0] / 3600);
    const daylight_minutes = Math.floor((weatherData.daily.daylight_duration[0] % 3600) / 60);

    const sunshine_str = sunshine_hours.toString().padStart(2, '0')
                       + ":"
                       + sunshine_minutes.toString().padStart(2, '0');
    const daylight_str = daylight_hours.toString().padStart(2, '0')
                       + ":"
                       + daylight_minutes.toString().padStart(2, '0');


    document.getElementById("header-data").innerHTML = "Day: "
                                                       + weatherData.daily.sunrise[0].split("T")[1]
                                                       + ".."
                                                       + weatherData.daily.sunset[0].split("T")[1]
                                                       + " • "
                                                       + "Sunshine: "
                                                       + sunshine_str
                                                       + "/"
                                                       + daylight_str
/*
                                                       + " <br>Precipitation: "
                                                       + weatherData.daily.precipitation_sum[0] + weatherData.daily_units.precipitation_sum
                                                       + " ("
                                                       + weatherData.daily.precipitation_hours[0] + weatherData.daily_units.precipitation_hours
                                                       + ")"
*/
/*
                                                       + " • "
                                                       + " Temperature: "
                                                       + weatherData.daily.temperature_2m_min[0]
                                                       + ".."
                                                       + weatherData.daily.temperature_2m_max[0] + weatherData.daily_units.temperature_2m_max
*/
                                                       + " • "
                                                       + " Humidity: "
                                                       + weatherData.daily.relative_humidity_2m_min[0]
                                                       + ".."
                                                       + weatherData.daily.relative_humidity_2m_max[0] + weatherData.daily_units.relative_humidity_2m_max
/*
                                                       + "  <br>Visibility: "
                                                       + weatherData.daily.visibility_min[0]
                                                       + ".."
                                                       + weatherData.daily.visibility_max[0] + weatherData.daily_units.visibility_max
*/
                                                       ;
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
    document.getElementById("precipitation-header").innerHTML       = "PRECIPITATION";
    document.getElementById("current-weather-img").src              = getWeatherIcon(weatherData.current.weather_code, weatherData.current.is_day);
    document.getElementById("current-precipitation").innerHTML      = weatherData.current.precipitation;
    document.getElementById("current-precipitation-unit").innerHTML = weatherData.current_units.precipitation;
    document.getElementById("current-probability").innerHTML        = weatherData.current.precipitation_probability  + "%";
}


// *** Current temperature *******************************************************
function drawCurrentTemperature() {
    document.getElementById("temperature-header").innerHTML           = "TEMPERATURE";
    document.getElementById("current-temperature").innerHTML          = weatherData.current.temperature_2m;
    document.getElementById("current-apparent-temperature").innerHTML = weatherData.current.apparent_temperature;
    document.getElementById("current-temperature-unit").innerHTML     = weatherData.current_units.temperature_2m;
}


// *** Current wind *******************************************************
function drawCurrentWindArrow(canvas) {
    const ctx = canvas.getContext("2d");

    const arrowAngle = Math.PI * 2 * ((weatherData.current.wind_direction_10m + 180)/ 360);
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
    document.getElementById("current-wind").innerHTML      = weatherData.current.wind_speed_10m;
    document.getElementById("current-gusts").innerHTML     = weatherData.current.wind_gusts_10m;
    document.getElementById("current-wind-unit").innerHTML = weatherData.current_units.wind_speed_10m;
    drawCurrentWindArrow(document.querySelector(".wind-widget-canvas"));
}


// *** Current UV index *******************************************************
function drawCurrentUVIndex() {
    document.getElementById("uv-index-header").innerHTML     = "UV INDEX";
    document.getElementById("current-uv-index").innerHTML    = weatherData.current.uv_index;
    document.getElementById("current-cloud-cover").innerHTML = weatherData.current.cloud_cover + "%";
}

// *** Graph cursor *******************************************************
function drawGraphCurrentCursor(graph) {
    const canvas = graph.canvas;

    // Findout current hour
    const date = new Date(weatherData.current.time);
    const hour = date.getHours() + date.getMinutes() / 60;

    // Convert current hour to canvas x-value
    const canvasX      = Math.round(graph.xOffset + graph.xCoeff * hour) + 0.5;
    const canvasYStart = Math.round(graph.marginTop);
    const canvasYEnd   = Math.round(canvas.height - graph.marginBottom);

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#0002";
    ctx.lineWidth   = canvas.height * 0.015;
    ctx.setLineDash([]);

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
        const canvasY = graph.yOffset + Math.round(graph.yValueMin * graph.yCoeff);

        ctx.strokeStyle = graph.color;
        ctx.fillStyle   = graph.color;
        ctx.lineWidth   = 1.0;
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
                ctx.moveTo(canvasX, canvas.height / 2);
                ctx.lineTo(canvasX, canvas.height - graph.marginBottom);
                ctx.stroke();
            }

            var tickText = "";
            if (hour > 0 && (hour % majorTick) == 0) {
                tickText = String(hour % 24).padStart(2, "0");
            }
            ctx.textAlign    = "center";
            ctx.textBaseline = "bottom";
            ctx.font         = "normal 400 " + graph.fontSize + "px 'Oswald'";
            ctx.fillText(tickText, canvasX, canvas.height);
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
                canvasX    = graph.xOffset;
                tickLength = -graph.tickLength;
                textShift  = -(graph.tickLength + 2);
                textAlign  = "right";
                break;
            case YAxisType.RIGHT:
                canvasX    = graph.xOffset + Math.round(graph.xValueMax * graph.xCoeff);
                tickLength = graph.tickLength;
                textShift  = graph.fontSize * 1.8;
                textAlign  = "right";
                break;
        }

        ctx.strokeStyle = graph.color;
        ctx.fillStyle   = graph.color;
        ctx.lineWidth   = 1.0;
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
        const canvasY = Math.round(graph.marginTop / 2);

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
  LINE_DASHED: "LINE_DASHED",
  LINE_GRAYED: "LINE_GRAYED"
});
function drawGraphData(graph, yValues, graphType) {
    const canvas = graph.canvas;
    const ctx = canvas.getContext("2d");

    const dataColor       = "#0008";
    const dataColorGrayed = "#0002";

    switch (graphType) {
        case GraphType.BAR:
        default:
            for (let index = 0; index < yValues.length; index++) {
                let   xValueStart = index - 0.5;
                let   xValueEnd   = index + 0.5;
                const yValue      = yValues[index];

                if (xValueStart < 0) {
                    xValueStart = 0;
                }
                if (xValueEnd > yValues.length - 1) {
                    xValueEnd = yValues.length - 1;
                }

                const canvasX = Math.round(graph.xOffset + graph.xCoeff * xValueStart);
                const canvasW = Math.round(graph.xOffset + graph.xCoeff * xValueEnd) - canvasX;

                const canvasY = graph.yOffset + Math.round(graph.yCoeff * graph.yValueMin + 0.5) - 0.5;
                const canvasH = Math.round(graph.yCoeff * yValue);

                ctx.fillStyle   = dataColor;
                ctx.fillRect(canvasX, canvasY,
                             canvasW, canvasH);
                ctx.fill();
            }

            break;
        case GraphType.LINE:
        case GraphType.LINE_DASHED:
        case GraphType.LINE_GRAYED:
            ctx.lineWidth   = canvas.height * 0.015;

            if (graphType == GraphType.LINE) {
                ctx.strokeStyle = dataColor;
                ctx.setLineDash([]);
            }
            if (graphType == GraphType.LINE_DASHED) {
                ctx.strokeStyle = dataColor;
                ctx.setLineDash([ctx.lineWidth, 2 * ctx.lineWidth]);
            }
            if (graphType == GraphType.LINE_GRAYED) {
                ctx.strokeStyle = dataColorGrayed;
                ctx.setLineDash([]);
            }

            ctx.beginPath();
            for (let index = 0; index < yValues.length; index++) {
                const xValue = index;
                const yValue = yValues[index];

                const canvasX = graph.xOffset + Math.round(graph.xCoeff * xValue);
                const canvasY = graph.yOffset + Math.round(graph.yCoeff * yValue);

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

        marginTop:      canvas.height * 0.15,
        marginBottom:   canvas.height * 0.15,
        marginLeft:     canvas.height * 0.21,
        marginRight:    canvas.height * 0.21,
        color:          "#000",

        tickLength:     canvas.height * 0.030,
        fontSize:       canvas.height * 0.100
    };

    const canvasRect = canvas.getBoundingClientRect();

    // Initialize x-axis min/max values
    graph.xValueMin = 0;
    graph.xValueMax = xValues.length - 1;

    // Calculate x offset and coeff
    const axisXStart  = graph.marginLeft;
    const axisXEnd    = canvas.width - graph.marginRight;
    const valueXRange = graph.xValueMax - graph.xValueMin;
    const axisXRange  = axisXEnd - axisXStart;
    graph.xCoeff      = axisXRange / valueXRange;
    graph.xOffset     = axisXStart;

    // Snap x-offset to closest half pixel
    const xCorrection = (Math.round(graph.xOffset + 0.5) - 0.5) - graph.xOffset;
    graph.xOffset += xCorrection;

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
    const axisYStart  = canvas.height - graph.marginBottom;
    const axisYEnd    = graph.marginTop;
    const valueYRange = graph.yValueMax - graph.yValueMin;
    const axisYRange  = axisYEnd - axisYStart;
    graph.yCoeff      = axisYRange / valueYRange;
    graph.yOffset     = axisYStart - graph.yCoeff * graph.yValueMin;

    // Snap y-offset to closest half pixel
    const yCorrection = (Math.round(graph.yOffset + 0.5) - 0.5) - graph.yOffset;
    graph.yOffset += yCorrection;

    return graph;
}

function drawGraphs() {
    // Initialize graphs
    precipitationGraph     = initializeGraph(document.querySelector(".precipitation-canvas"), weatherData.hourly.time, [weatherData.hourly.precipitation],                               5);
    precipitationProbGraph = initializeGraph(document.querySelector(".precipitation-canvas"), weatherData.hourly.time, [[0, 100]],                                           5);
    temperatureGraph       = initializeGraph(document.querySelector(".temperature-canvas"),   weatherData.hourly.time, [weatherData.hourly.temperature_2m, weatherData.hourly.apparent_temperature], 5);
    windGraph              = initializeGraph(document.querySelector(".wind-canvas"),          weatherData.hourly.time, [weatherData.hourly.wind_speed_10m, weatherData.hourly.wind_gusts_10m],       5);
    uvGraph                = initializeGraph(document.querySelector(".uv-canvas"),            weatherData.hourly.time, [weatherData.hourly.uv_index],                                    5);
    cloudCoverGraph        = initializeGraph(document.querySelector(".uv-canvas"),            weatherData.hourly.time, [[0, 100]],                                           5);

    // Draw cursors
    drawGraphCurrentCursor(precipitationGraph);
    drawGraphCurrentCursor(temperatureGraph);
    drawGraphCurrentCursor(windGraph);
    drawGraphCurrentCursor(uvGraph);

    // Draw data
//    drawGraphData(precipitationGraph,     weatherData.hourly.precipitation,             GraphType.LINE);
        drawGraphData(precipitationGraph,     weatherData.hourly.precipitation,             GraphType.BAR);
    drawGraphData(precipitationProbGraph, weatherData.hourly.precipitation_probability, GraphType.LINE_GRAYED);
    drawGraphData(temperatureGraph,       weatherData.hourly.temperature_2m,            GraphType.LINE);
    drawGraphData(temperatureGraph,       weatherData.hourly.apparent_temperature,      GraphType.LINE_GRAYED);
    drawGraphData(windGraph,              weatherData.hourly.wind_speed_10m,            GraphType.LINE);
    drawGraphData(windGraph,              weatherData.hourly.wind_gusts_10m,            GraphType.LINE_GRAYED);
//    drawGraphData(uvGraph,                weatherData.hourly.uv_index,                  GraphType.LINE);
        drawGraphData(uvGraph,                weatherData.hourly.uv_index,                  GraphType.BAR);
    drawGraphData(cloudCoverGraph,        weatherData.hourly.cloud_cover,               GraphType.LINE_GRAYED);

    // Draw x-axis
    drawGraphXAxis(precipitationGraph, minorTick = 1, majorTick = Math.round(weatherData.hourly.time.length / 12));
    drawGraphXAxis(temperatureGraph,   minorTick = 1, majorTick = Math.round(weatherData.hourly.time.length / 12));
    drawGraphXAxis(windGraph,          minorTick = 1, majorTick = Math.round(weatherData.hourly.time.length / 12));
    drawGraphXAxis(uvGraph,            minorTick = 1, majorTick = Math.round(weatherData.hourly.time.length / 12));

    // Draw y-axis
    drawGraphYAxis(precipitationGraph,     weatherData.hourly_units.precipitation,             YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(precipitationProbGraph, weatherData.hourly_units.precipitation_probability, YAxisType.RIGHT, minorTick = 10, majorTick = 25);
    drawGraphYAxis(temperatureGraph,       weatherData.hourly_units.temperature_2m,            YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(temperatureGraph,       weatherData.hourly_units.apparent_temperature,      YAxisType.RIGHT, minorTick = 1,  majorTick = 5);
    drawGraphYAxis(windGraph,              weatherData.hourly_units.wind_speed_10m,            YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(windGraph,              weatherData.hourly_units.wind_gusts_10m,            YAxisType.RIGHT, minorTick = 1,  majorTick = 5);
    drawGraphYAxis(uvGraph,                weatherData.hourly_units.uv_index,                  YAxisType.LEFT,  minorTick = 1,  majorTick = 5);
    drawGraphYAxis(cloudCoverGraph,        weatherData.hourly_units.cloud_cover,               YAxisType.RIGHT, minorTick = 10, majorTick = 25);
}
