/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
function catDog (animal) {
    if (animal === "Dogs") {
        return 10
    }
    else if (animal === "Cats") {
        return 5
    }
    else {
        return 0
    }
}
function cakePie (dessert) {
    if (dessert === "Cake") {
        return 10
    }
    else if (dessert === "Pie") {
        return 5
    }
    else {
        return 0
    }
}
function music (type) {
    if (type === "Alternative") {
        return 10
    }
    else if (type === "Jazz") {
        return 7
    }
    else if (type === "Rock") {
        return 5
    }
    else if (type === "Pop") {
        return 3
    }
    else {
        return 0
    }
}
function subject (favorite) {
    if (favorite === "English") {
        return 10
    }
    else if (favorite === "Science") {
        return 7
    }
    else if (favorite === "History") {
        return 5
    }
    else if (favorite === "Religion") {
        return 3
    }
    else if (favorite === "Music") {
        return 1
    }
    else {
        return 0
    }
}