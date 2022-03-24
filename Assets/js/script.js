//time variables
const date = new Date();
const time = date.getHours();

let timeOfTasks = document.getElementsByClassName("time");

//display the date and time to the page
document.getElementById("currentDay").innerHTML = date;

//timeblocks selected
let nine = document.getElementByID("9");
let ten = document.getElementByID("10");
let eleven = document.getElementByID("11");
let twelve = document.getElementByID("12");
let onePm = document.getElementByID("13");
let twoPm = document.getElementByID("14");
let threePm = document.getElementByID("15");
let fourPm = document.getElementByID("16");
let fivePm = document.getElementByID("17");



//pageDate.innerHTML = 'date';

//date.toString().innerHTML = pageDate;

//if (time <= timeOfTasks) {
    
//}

//


$(document).ready(function(){

    //button click to save
    $("button").click(function() {
        //set input text as variable
        let description = $(this).siblings(".input-text").val();
        localStorage.setItem(description);
    })
    //save time to local storage
    $("button").click(function() {
        let taskTime = $(this).parent().attr("id");
        localStorage.setItem(taskTime);
    })


    //for

    //if(time < )

});

