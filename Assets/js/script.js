//time variables
const date = new Date();
const time = date.getHours();

let timeOfTasks = document.getElementsByClassName("time");

//display the date and time to the page
document.getElementById("currentDay").innerHTML = date;

//timeblocks selected
let nine = document.getElementById("9");
let ten = document.getElementById("10");
let eleven = document.getElementById("11");
let twelve = document.getElementById("12");
let onePm = document.getElementById("13");
let twoPm = document.getElementById("14");
let threePm = document.getElementById("15");
let fourPm = document.getElementById("16");
let fivePm = document.getElementById("17");



//pageDate.innerHTML = 'date';

//date.toString().innerHTML = pageDate;

//if (time <= timeOfTasks) {
    
//}

//


$(document).ready(function(){

    //button click to save to local storage
    $("button").click(function() {
        //set input text as variable
        let description = $(this).parent("div").prev("div").children("input-text").val();        
        let taskTime = $(this).parent("div").prev("id").val();
        localStorage.setItem(description, taskTime);
    })


    //for

    //if(time < )

});

// let startPage = function() {
//     let addNine = JSON.parse(localStorage.getItem())
//     let addTen = JSON.parse(localStorage.getItem())
//     let addEleven = JSON.parse(localStorage.getItem())
//     let addTwelve = JSON.parse(localStorage.getItem())
//     let addOnePm = JSON.parse(localStorage.getItem())
//     let addTwoPm = JSON.parse(localStorage.getItem())
//     let addThreePm = JSON.parse(localStorage.getItem())
//     let addFourPm = JSON.parse(localStorage.getItem())
//     let addFivePm = JSON.parse(localStorage.getItem())
// }