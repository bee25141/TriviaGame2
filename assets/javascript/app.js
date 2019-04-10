$("document").ready(function () {
    var questionObject = [{
            question: "Guy Fieri got his first job in the food industry at what age?",
            answers: ["16", "8", "10", "18"],
            correctAnswer: 3,
        },
        {
            question: "Guy Fieri's original name is: ",
            answers: ["Gordon Martin Fieri", "Gerald Fernandez", "Guy Martin Fieri", "Guy Ramsey Ferry", ],
            correctAnswer: 4,
        },
        {
            question: "Guy Fieri attended culinary school at: ?",
            answers: ["The Culinary Institute of America", "International Culinary Center", "Joliet Junior College", "Guy didn't attend culinary school", ],
            correctAnswer: 4,
        },
        {
            question: "Guy is the owner of how many restaurants?",
            answers: ["4", "11", "13", "16"],
            correctAnswer: 2,
        },
        {
            question: "Guy has a pet _____ ?",
            answers: ["donkey", "tortoise", "cheetah", "horse"],
            correctAnswer: 2,
        },
        {
            question: "What is the name of Guy's winery?",
            answers: ["Hunter-Ryde", "Grape-Town", "Fieri's Vineyard", "none of the above", ],
            correctAnswer: 1,
        },
        {
            question: "'Fieri' is Latin for: ",
            answers: ["fire", "to be made", "1968 Camaro", "jalapeno poppers", ],
            correctAnswer: 2,
        },
        {
            question: "What is Guy Fieri's estimated net worth?",
            answers: ["4.5 million", "7.5 million", "8.5 million", "10.5 million", ],
            correctAnswer: 3,
        },
        {
            question: "Guy was once run over by a: ",
            answers: ["car", "semi truck", "horse", "zamboni", ],
            correctAnswer: 3,
        },
        {
            question: "Where does Guy buy his shirts from?",
            answers: ["Cubavara", "Tommy Bahamma", "Bonobos", "Reyn Spooner", ],
            correctAnswer: 1,
        },


    ];

    $(".qa").hide();


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
            questionSelect();
        }
    }
    //This function starts the game when user clicks start
    $("#start").on("click", function () {
        $("#start").hide();
        $(".qa").show();
        questionTimer();
    });

});