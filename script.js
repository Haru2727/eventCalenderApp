// var inputEl = document.querySelector(".form-control")
// var todaysDate = new Date();
// var rightNow = document.getElementById("currentDay").textContent = todaysDate;
// console.log(todaysDate);



// $(document).ready(function(){
//     $(".btn-outline-secondary").on("click",function(){
//         // alert("Whoa...this on click is working!");
//         var scheduleEvent = $(".form-control").val();
//         localStorage.setItem("form-control", JSON.stringify(scheduleEvent.value));
//         console.log(scheduleEvent);

//         var scheduleEvent2 = JSON.parse(localStorage.getItem("scheduleEvent"));
//         if (scheduleEvent2 !== null){
//             $(".form-control").textContent = scheduleEvent2

//         }
//     });

// });

$(document).ready(function () {

    // declaring variables 
    var todaysDate = moment().format("dddd, MMMM Do");
    var rightNow = moment().format("H A");

    // object array for work hours 
    var workdayHours = [
        { time: "9 AM", event: "" },
        { time: "10 AM", event: ""},
        { time: "11 AM", event: "" },
        { time: "12 PM", event: "" },
        { time: "1 PM", event: "" },
        { time: "2 PM", event: "" },
        { time: "3 PM", event: "" },
        { time: "4 PM", event: "" },
        { time: "5 PM", event: "" },
    ];
    // setting the current day to the html id
    $("#currentDay").text(todaysDate);

    console.log(todaysDate);
// creating the rows that will be repeated throughout the workdayHours object array
    workdayHours.forEach(function (timeBlock, index) {
        var timeLabel = timeBlock.time;
        var blocksColor = rowColor(timeLabel);
        var row =
          
      
            '<div class="time-block" id="' +
            index +
            '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
            timeLabel +
            '</div><textarea class="form-control ' +
            blocksColor +
            '">' +
            timeBlock.event +
            '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';
console.log(row);
$(".container").append(row);

// <tr id="row0">
// <td>9AM</td>
// <td>
//   <input type="text" class="form-control" placeholder="9 am timeblock" aria-label="9 am"
//    aria-describedby="button-addon2" />
// </td>
// <td>
//   <button class="btn btn-outline-secondary" type="button" id="button-addon2, saveBtn" >
//     <i class="fas fa-calendar-plus"></i>
//   </button>
// </td>
// </tr>
    });
// appending the rows to the html 
 


// returns the color code for the rows based on present time
    function rowColor(time){
        var now = moment(rightNow, "H A");
        var entry = moment(time, "H A");
        if(now.isBefore(entry)===true){
            return "future";
        }else if (now.isAfter(entry)===true){
            return "past";
        }else {
            return "present";
        }
    }






});