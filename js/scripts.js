
/*
*
* Print everything from the JSON data in json.js
* to the screen and use your awesome CSS skills to make it look
* BEAUTIFUL!
*
* */


$(document).ready(function (){

    //Array with JSON logged in console
    console.log(articles);

    //Loop through articles with .each()
    $(articles).each(function(i){

        //Print the titles from the JSON data
        $("section").append(articles[i].title + "<br>");


    });

});

