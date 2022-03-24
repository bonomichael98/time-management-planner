//time variables
const date = new Date();
const time = date.getHours();

let timeOfTasks = document.getElementsByClassName("time");

//display the date and time to the page
document.getElementById("currentDay").innerHTML = date;



//pageDate.innerHTML = 'date';

//date.toString().innerHTML = pageDate;

// if (time <= ) {
    
// }

//


$(document).ready(function(){

    //button click to save
    $("button").click(function() {
        //set input text as variable
        let description = $(this).siblings(".input-text").val();
        localStorage.setItem(description);
    })

    //for

    //if(time < )

});

