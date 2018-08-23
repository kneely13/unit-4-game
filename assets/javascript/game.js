var random_number;
var lost =0;
var win = 0;
var total = 0;

var startGame = function () {

    random_number = Math.floor(Math.random() * 99) +19;

    $('#randomNumberContainer').html('' + random_number);

    for(var i=0; i<4; i++){

        var random = Math.floor(Math.random()*12) + 1;
        //console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                'class': 'crystal',
                "data-random": random
            });

        $(".crystalsContainer").append(crystal);
    }
}

startGame();



$(".crystal").on('click', function () {

    var crystalNumber = parseInt($(this).attr('data-random'));
    total += crystalNumber;

    console.log(total);

    if(total > random_number){
        lost++;

    }
    else if(total === random_number ){
        win ++;
        $('.scoreContainer').html();
        $('#winCounter').text(win);
    }
});



$(document).ready(function() {

    $('.titleContainer').append("Crystals Collector");


    $('.totalContainer').append("Your total score is: ");


$(".scoreContainer").append();


}); //end of method