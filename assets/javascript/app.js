$("document").ready(function () {
    //Hides the questions and answers before game starts
    $(".qa").hide();
    $("#contentContainer").hide();
    $(".scoreboard").hide();
    var answersCorrect = 0;
    var answersIncorrect = 0;

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
            $(".qa").hide();
            $("#timeLeft").hide();
            $("#content").hide();
            $(".scoreboard").show();
            $(".scoreboard").text("TIME IS UP");
            $(".scoreboard").append("<br>" + "Answers Correct: " + answersCorrect)
            $(".scoreboard").append("<br>" + "Answers Wrong: " + answersIncorrect)
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
            answersIncorrect++;
        }
    });
    $(".answers2").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 4){
            answersCorrect++;
        }
        else if (userGuess !== 4){
            answersIncorrect++;
        }
    });
    $(".answers3").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 4){
            answersCorrect++;
        }
        else if (userGuess !== 4){
            answersIncorrect++;
        }
    });
    $(".answers4").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 2){
            answersCorrect++;
        }
        else if (userGuess !== 2){
            answersIncorrect++;
        }
    });
    $(".answers5").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 2){
            answersCorrect++;
        }
        else if (userGuess !== 2){
            answersIncorrect++;
        }
    });
    $(".answers6").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 1){
            answersCorrect++;
        }
        else if (userGuess !== 1){
            answersIncorrect++;
        }
    });
    $(".answers7").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 2){
            answersCorrect++;
        }
        else if (userGuess !== 2){
            answersIncorrect++;
        }
    });
    $(".answers8").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 3){
            answersCorrect++;
        }
        else if (userGuess !== 3){
            answersIncorrect++;
        }
    });
    $(".answers9").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 3){
            answersCorrect++;
        }
        else if (userGuess !== 3){
            answersIncorrect++;
        }
    });
    $(".answers10").on("click", function(){
        var userGuess = ($(this).val());
        if (userGuess == 1){
            answersCorrect++;
        }
        else if (userGuess !== 1){
            answersIncorrect++;
        }
        console.log(answersCorrect, answersIncorrect);
    });
    $("#submit").on("click", function(){
        n = 1;
    });

});