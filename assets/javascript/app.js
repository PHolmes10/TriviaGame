var questions = [
    {
        "question": "Who was Henry McCarty better known as?",
        "allAnswers": ["Billy the Kid ", "Kid Curry ", "Black Bart ", "Butch Cassidy "],
        "correctAnswer": "Billy the Kid"
    },
    {
        "question": "Which ex sheriff of Dodge City ended his working career as a sports writer for a New York newspaper?",
        "allAnswers": ["Pat Garret", "Bat Masterson", "Wyatt Earp", "Bill Tilghman"],
        "correctAnswer": "Bat Masterson"
    },
    {
        "question": "How did Jesse James die?",
        "allAnswers": ["executed by hanging", "shot dead", "died in a knife fight", "natural causes"],
        "correctAnswer": "shot dead"
    },
    {
        "question": "Which Indian Chief, who was victorious in the Battle of the Little Big Horn which led to the defeat of Lieutenant Colonel Custer, also found fame as a member of Buffalo Bill's Wild West Show?",
        "allAnswers": ["Chief Crazy Horse", "Chief Two Moons", "Chief Rain in the Face", "Chief Sitting Bull"],
        "correctAnswer": "Chief Sitting Bull"
    },
    {
        "question": "7. Who was shot dead during a game of poker, holding what is now termed 'The Dead Man's Hand?'",
        "allAnswers": ["Wild Bill Hickok", "Doc Holliday", "Pat Garrett", "Frank James"],
        "correctAnswer": "Wild Bill Hickok"
    },
    {
        "question": "Which is the correct name for a famous cattle trail?",
        "allAnswers": ["Goodnight-Loving", "Goodbye-Lover", "Goodluck-Loving", "Goodnight-Love"],
        "correctAnswer": "Goodnight-Loving"
    },
    {
        "question": " Members of which Indian Nation were massacred at Wounded Knee?",
        "allAnswers": ["Navajo", "Apache", "Sioux", "Comanche"],
        "correctAnswer": "Sioux"
    },
    {
        "question": "If, after being robbed, you found a poem at the scene of the crime, who would have been the robber?",
        "allAnswers": ["Black Bart", "Butch Cassidy", "Sundance Kid", "Cherokee Bill"],
        "correctAnswer": "Black Bart"
    },
    {
        "question": "Who was Harvey Logan better known as?",
        "allAnswers": ["45 spoons", "62 spoons", "31 spoons", "91 spoons"],
        "correctAnswer": "Kid Curry"
    },
    {
        "question": "Who is considered to be the first 'mountain man'?",
        "allAnswers": ["Forrest Hancock", "Manuel Lisa", "Joseph Dickson", "John Colter"],
        "correctAnswer": "John Colter"
    }];



var correct = 0
var incorrect = 0



// starts the game when user clicks the start div
$("#start").on("click", function () {

    for (i = 0; i < questions.length; i++) {

        var questionDiv = $("<div class='questions'>");
        var answerDiv = $("<div class='answers'>");


        // var letter;
        // var txt = "";
        // for (letter in questions[i].allAnswers[i]) {
        //     txt += questions[i].allAnswers[letter] + radio;
        // };


        var radio = $("<input>");
        radio.attr("type", "radio");
        questions[i].allAnswers.push(radio);

        questionDiv.html(questions[i].question);
        answerDiv.html(questions[i].allAnswers);

        (questionDiv).append(answerDiv);

        $("#question-list").append(questionDiv);
    }

    // hides start button
    $("#start").hide();
    $("#done").text("Submit");
});




