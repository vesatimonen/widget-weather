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



window.onload = function () {
    /* Parse options */
    parseOptions();

    /* Show window */
    document.getElementById("screen").style.visibility = "visible";
}




