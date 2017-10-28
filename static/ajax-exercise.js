"use strict";


// PART 1: SHOW A FORTUNE

// THIS IS THE FLASK ROUTE:
// @app.route('/fortune')
// def fortune():
//     """Return a single fortune as a text string (*not* the whole HTML page!)"""

//     return random.choice(FORTUNES)

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get ('/fortune', function (result) {
        $('#fortune-text').html(result);
    }); // display in fortune-text

}

$('#get-fortune-button').on('click', showFortune);

    





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get (url, formData, function (result) {
        $("#weather-info").html(result.forecast); 
        // result is returned as a string/dictionary-type object. Extract and show
        // values from dictionary.
        // console.log(result['forecast'], result['temp']);
    });


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


