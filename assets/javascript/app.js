var questions = [{
    q: "Is the sky blue?",
    a: "t"
},
{
    q: "Is water wet?",
    a: "t"
},
{
    q: "is this a windows computer?",
    a: "f"
}];

var scores = 0;
var counter = 0;

function displayQuestions() {
    document.getElementById("question").textContent = questions[counter].q;
}

displayQuestions();

document.onkeyup = function (event) {
    if (event.key === "t" || event.key === "f") {
        if (event.key === questions[counter].a) {
            alert("correct");
            scores++;
            document.getElementById("score").textContent = scores;
        } else {
            alert("wrong");
        }
        // alert("You can play");
        counter++;
        if (counter === questions.length) {
            alert("Game Over");
        };
        displayQuestions();

    } else {
        alert("enter the right key");
    };
};