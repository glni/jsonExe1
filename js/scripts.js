
/*
*
* Print everything from the JSON data in json.js
* to the screen and use your awesome CSS skills to make it look
* BEAUTIFUL!
*
* */

$(document).ready(function (){

    //Get the JSON data with an AJAX call
    $.ajax({
        dataType: "json",
        url: "js/data.json"
    }).done(function (data) {

        //Loop through the data with .each()
        $(data).each(function(i){

            //Print the titles from the JSON data
            $("section").append(data[i].title + "<br>");

        });

    });



});

