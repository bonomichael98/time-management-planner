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

let timeId = document.getElementsByClassName("time");


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
    $(".time").each(function () {
        let itemTime = $(this).attr("id");
        console.log(itemTime)
        if (itemTime < time) {
            $(this).addClass("bg-danger");
        } else if(itemTime > time) {
            $(this).css("background", "green");


        } else {
            $(this).css("background", "grey");

        }    
    })


    let timeBg = function(timeId, time) {
            
    }

timeBg()
    //set background colors
    // if (timeBackground < time) {
    //     $(".time").each(function() {
    //         let currentBlock = $(".time").attr("id");
    //         let timeBackground = $(".time").attr("id");
    //         timeBackground.addClass("bg-danger");
    //         })
    //     }
    // })
    
    // if (taskTime < time) {
    //     //let taskTime = $(this).parent("div").prev().attr("id");

    //     let background = $(this).parent().prev().children("textArea");
    //     background.addClass("bg-danger");
    // }


    //for

    //if(time < )

    //get local storage elements and display them to the page
    
    let startPage = function() {
        let addNine = localStorage.getItem("9");
        nine.textContent= addNine;

        let addTen = localStorage.getItem("10");
        ten.textContent = addTen;

        let addEleven = localStorage.getItem("11");
        eleven.textContent = addEleven;

        let addTwelve = localStorage.getItem("12");
        twelve.textContent  = addTwelve;

        let addOnePm = localStorage.getItem("13");
        onePm.textContent  = addOnePm;

        let addTwoPm = localStorage.getItem("14");
        twoPm.textContent  = addTwoPm;

        let addThreePm = localStorage.getItem("15");
        threePm.textContent = addThreePm;

        let addFourPm = localStorage.getItem("16");
        fourPm.textContent = addFourPm;

        let addFivePm = localStorage.getItem("17");
        fivePm.textContent  = addFivePm;

    }
    startPage();

})




