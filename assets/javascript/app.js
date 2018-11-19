var questions = [
    {
        "question": "The next Playstation platform will be:",
        "allAnswers": ["PS5 ", "PS4K ", "PSX ", "PS8K "],
        "correctAnswer": "B"
    },
    {
        "question": "The Sloth's scientific name, Bradypus, is Greek for:",
        "allAnswers": ["Moving slowly", "Swiftly", "Slow feet", "Sleeping"],
        "correctAnswer": "C"
    },
    {
        "question": "Earth is how far away from the Sun:",
        "allAnswers": ["92.96 Million Miles", "82.96 Million Miles", "102.96 Million Miles", "72.96 Million Miles"],
        "correctAnswer": "A"
    },
    {
        "question": "The first issue of National Geographic was issued in:",
        "allAnswers": ["1901", "1874", "1888", "1926"],
        "correctAnswer": "C"
    },
    {
        "question": "It is approximitely how hot on the planet Venus:",
        "allAnswers": ["262 Degrees C", "162 Degrees C", "462 Degrees C", "862 Degrees C"],
        "correctAnswer": "C"
    },
    {
        "question": "What type of star is the Sun:",
        "allAnswers": ["White Dwarf", "Yellow Dwarf", "The sun is NOT a star", "Orange Dwarf"],
        "correctAnswer": "B"
    },
    {
        "question": "Approximitely how much of the ocean has been explored:",
        "allAnswers": ["12%", "23%", "38%", "5%"],
        "correctAnswer": "D"
    },
    {
        "question": "Approximitely how long did it take for the Apollo missions to reach the moon:",
        "allAnswers": ["36 hours", "24 hours", "72 hours", "96 hours"],
        "correctAnswer": "C"
    },
    {
        "question": "The world record for most spoons balanced on the face is:",
        "allAnswers": ["45 spoons", "62 spoons", "31 spoons", "91 spoons"],
        "correctAnswer": "C"
    },
    {
        "question": "The world record for most socks put on one foot in one minute is:",
        "allAnswers": ["12 socks", "28 socks", "48 socks", "67 socks"],
        "correctAnswer": "C"
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




