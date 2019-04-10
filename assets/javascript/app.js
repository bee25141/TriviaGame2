$("document").ready(function () {
    //Hides the questions and answers before game starts
    $(".qa").hide();
    $("#contentContainer").hide();
    var answersCorrect = 0;
    var answersIncorect = 0;

    //This function sets the question timer
    var n = 120;
    function questionTimer() {
        n--;
        if (n > 0) {
            setTimeout(questionTimer, 1000);
        }
        $("#timeLeft").text("Time Left: " + n);
        if (n === 0){
            console.log("timer 0");
        }
    }
    //This function starts the game when user clicks start
    $("#start").on("click", function () {
        $("#start").hide();
        $(".qa").show();
        $("#contentContainer").show();
        questionTimer();
    });

    $(".answers1").one("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 3){
            answersCorrect++;
        }
        else if (userGuess !== 3){
            answersIncorect++;
        }
    });
    $(".answers2").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 4){
            answersCorrect++;
        }
        else if (userGuess !== 4){
            answersIncorect++;
        }
    });
    $(".answers3").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 4){
            answersCorrect++;
        }
        else if (userGuess !== 4){
            answersIncorect++;
        }
    });
    $(".answers4").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 2){
            answersCorrect++;
        }
        else if (userGuess !== 2){
            answersIncorect++;
        }
    });
    $(".answers5").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 2){
            answersCorrect++;
        }
        else if (userGuess !== 2){
            answersIncorect++;
        }
    });
    $(".answers6").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 1){
            answersCorrect++;
        }
        else if (userGuess !== 1){
            answersIncorect++;
        }
    });
    $(".answers7").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 2){
            answersCorrect++;
        }
        else if (userGuess !== 2){
            answersIncorect++;
        }
    });
    $(".answers8").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 3){
            answersCorrect++;
        }
        else if (userGuess !== 3){
            answersIncorect++;
        }
    });
    $(".answers9").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 3){
            answersCorrect++;
        }
        else if (userGuess !== 3){
            answersIncorect++;
        }
    });
    $(".answers10").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 1){
            answersCorrect++;
        }
        else if (userGuess !== 1){
            answersIncorect++;
        }
        console.log(answersCorrect, answersIncorect);
    });

});