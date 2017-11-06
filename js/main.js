// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

function kelvinToCelsius (temp) {
    var zeroCelsiusInKelvin = 273.15;
    var tempInCelsius = parseInt(temp - zeroCelsiusInKelvin, 10);
    return tempInCelsius < 0 ? tempInCelsius : '+' + tempInCelsius;
}

function setWeather (data) {
    var temperature = kelvinToCelsius(data.main.temp);
    var description = (data.weather[0] && data.weather[0].main) || 'Snowing';
    $('#header-weather_current-temperature').text(temperature);
    $('#header-weather_current-status').text(description);
}

$(function () {
   var API_KEY = 'ee2053684c5ec49069115510aeb5d883';
   var CITY_ID = 658226;
   var API_URL = 'https://api.openweathermap.org/data/2.5/weather?id=' + CITY_ID + '&appid=' + API_KEY;

   $.get(API_URL).done(setWeather).fail(console.error);
});
