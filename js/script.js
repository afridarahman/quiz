/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var name = $("#nameQuestion").val()
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        var q1Score = catDog(q1Result);
        var q2Score = cakePie(q2Result);
        var q3Score = music(q3Result);
        var q4Score = subject(q4Result);
        var q5Score= adjective(q5Result);
        var totalScore = q1Score + q2Score + q3Score + q4Score + q5Score;
        var finalResult = teacher(totalScore);
        $(".result").html(totalScore);
        $(".result").html(finalResult);
    });

});
function catDog (animal) {
    if (animal === "Dogs") {
        return 10;
    }
    else if (animal === "Cats") {
        return 5;
    }
    else {
        return 0;
    }
}
function cakePie (dessert) {
    if (dessert === "Cake") {
        return 10;
    }
    else if (dessert === "Pie") {
        return 5;
    }
    else {
        return 0;
    }
}
function music (type) {
    if (type === "Alternative") {
        return 10;
    }
    else if (type === "Jazz") {
        return 7;
    }
    else if (type === "Rock") {
        return 5;
    }
    else if (type === "Pop") {
        return 3;
    }
    else {
        return 0;
    }
}
function subject (favorite) {
    if (favorite === "English") {
        return 10;
    }
    else if (favorite === "Science") {
        return 7;
    }
    else if (favorite === "History") {
        return 5;
    }
    else if (favorite === "Religion") {
        return 3;
    }
    else if (favorite === "Music") {
        return 1;
    }
    else {
        return 0;
    }
}
function adjective (describe) {
    if (describe === "Moody") {
        return 10;
    }
    else if (describe === "Humorous") {
        return 9;
    }
    else if (describe === "Kind") {
        return 7;
    }
    else if (describe === "Loud") {
        return 5;
    }
    else if (describe === "Intelligent") {
        return 3;
    }
    else if (describe === "Witty") {
        return 1;
    }
    else {
        return 0;
    }
}
function teacher (num){
    if (num >= 0 && num <=25) {
        return "Kostelc";
    }
    else if (num >= 26 && num <=29) {
        return "Cooper";
    }
    else if (num >= 30 && num <=35) {
        return "Fonseca";
    }
    else if (num >=36 && num <=39){
        return "Scheb";
    }
    if (num >= 40 && num <=50)
    return "McQuarrie";
}