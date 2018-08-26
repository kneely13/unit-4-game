var random_number;
var lost =0;
var win = 0;
var total = 0;



var resetAndStartGame = function () {

    $(".crystalsContainer").empty();

    random_number = Math.floor(Math.random() * 99) +19;

    $('.randomNumberContainer').html('' + random_number);

    for(var i=0; i<4; i++){

        var random = Math.floor(Math.random()*12) + 1;
        console.log(random);


        var crystal = $("<div>");
            crystal.attr({
                'class': 'crystal',
                "data-random": random
            });

         

        $(".crystalsContainer").append(crystal);
    }

    $(".scoreCounter").html(total);
}

resetAndStartGame();


$(document).on('click', ".crystal",function () {

    var crystalNumber = parseInt($(this).attr('data-random'));
    
    total += crystalNumber;
    
    $('.scoreCounter').html(total);
    console.log(total)

    if(total > random_number){
        lost++;
        $('#lost').html('Losses: ' + lost);
        total=0;
        resetAndStartGame();

    }
    else if(total === random_number ){
        win ++;
        $('#win').html('Wins: ' + win);
        total=0;
        resetAndStartGame();
    }
});// 



$(document).ready(function() {

    $('.titleContainer').append("Crystals Collector");


    // $('#win').text("Wins: " + win);
    // $('#lost').text( "Losses: " + lost);

    $('.totalContainer').append("Your total score is: ");
    
    $(".bg").css("background-image", "url('/css/images/css.jpg')");
   
}); //end of method