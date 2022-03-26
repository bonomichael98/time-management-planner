//time variables
const date = new Date();
const time = date.getHours();

let timeOfTasks = document.getElementsByClassName("time");

//display the date and time to the page
document.getElementById("currentDay").innerHTML = date;

//timeblocks selected
let nine = document.getElementById("input-9");
let ten = document.getElementById("input-10");
let eleven = document.getElementById("input-11");
let twelve = document.getElementById("input-12");
let onePm = document.getElementById("input-13");
let twoPm = document.getElementById("input-14");
let threePm = document.getElementById("input-15");
let fourPm = document.getElementById("input-16");
let fivePm = document.getElementById("input-17");




//date.toString().innerHTML = pageDate;

//if (time <= timeOfTasks) {
    
//}

//


$(document).ready(function(){

    //button click to save to local storage
    $("button").click(function() {
        //set input text as variable
        let description = $(this).parent("div").prev().children(".input-text").val();
        let taskTime = $(this).parent("div").prev().attr("id");
        localStorage.setItem(taskTime, description);
    })


    //for

    //if(time < )

});

//get local storage elements and display them to the page
let startPage = function() {
    let addNine = JSON.parse(localStorage.getItem("9"));
    nine.val(addNine);
    console.log(addNine);

    let addTen = JSON.parse(localStorage.getItem("10"));
    ten.val(addTen);

    let addEleven = JSON.parse(localStorage.getItem("11"));
    eleven.val(addEleven);

    let addTwelve = JSON.parse(localStorage.getItem("12"));
    twelve.val(addTwelve);

    let addOnePm = JSON.parse(localStorage.getItem("13"));
    onePm.val(addOnePm);

    let addTwoPm = JSON.parse(localStorage.getItem("14"));
    twoPm.val(addTwoPm);

    let addThreePm = JSON.parse(localStorage.getItem("15"));
    threePm.val(addThreePm);

    let addFourPm = JSON.parse(localStorage.getItem("16"));
    fourPm.val(addFourPm);

    let addFivePm = JSON.parse(localStorage.getItem("17"));
    fivePm.val(addFivePm);

}

startPage();