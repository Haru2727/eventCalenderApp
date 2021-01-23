$(document).ready(function () {

    // declaring variables 
    // moment and formant allows what you can view for ex. (MM is the 2 digit code for the month)

    var todaysDate = moment().format("dddd, MMMM Do");
    var rightNow = moment().format("H A");

    // object array for work hours 
    var workdayHours = [
        { time: "9 AM", event: "" },
        { time: "10 AM", event: "" },
        { time: "11 AM", event: "" },
        { time: "12 PM", event: "" },
        { time: "1 PM", event: "" },
        { time: "2 PM", event: "" },
        { time: "3 PM", event: "" },
        { time: "4 PM", event: "" },
        { time: "5 PM", event: "" },
    ];

    //    grabbing the information from the user input area 
    // i originally had this right above the save button function but it didn't work
    // it took me some tinkering to try to figure out its scope maynbe why it does not work.  
    // moved it around the page a bit, then realized it should be between the workdayHours & the rows created.
    var schedEvents = JSON.parse(localStorage.getItem("workdayEvent"));
    if (schedEvents) {
        workdayHours = schedEvents;
    }

    // setting the current day to the html id
    $("#currentDay").text(todaysDate);

    console.log(todaysDate);

    // creating the rows that will be repeated throughout the workdayHours object array
    workdayHours.forEach(function (timeBlock, index) {
        var timeLabel = timeBlock.time;
        var blocksColor = rowColor(timeLabel);
        var row =
            // tried to use a table like we learned in this last week but it wouldn't come out correctly

            '<div class="time-block" id="' +
            index +
            '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
            timeLabel +
            '</div><textarea class="form-control ' +
            blocksColor +
            '">' +
            timeBlock.event +
            '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-calendar-plus"></i></button></div></div></div>';


        // appending the rows to the html 
        $(".container").append(row);

    });

    // returns the color code for the rows based on present time 
    // lets user see where in the day they are
    function rowColor(time) {
        var now = moment(rightNow, "H A");
        var entry = moment(time, "H A");
        if (now.isBefore(entry) === true) {
            return "future";
        } else if (now.isAfter(entry) === true) {
            return "past";
        } else {
            return "present";
        }
    }

    // setting the save button funtion to record the information we grabbed from above
    $(".saveBtn").on("click", function () {
        var timeBlEl = parseInt(
            $(this).closest(".time-block")
                .attr("id")
        );

        var userEntry = $.trim(
            $(this).parent()
                .siblings("textarea")
                .val()
        );

        workdayHours[timeBlEl].event = userEntry;

        localStorage.setItem("workdayEvent", JSON.stringify(workdayHours));
    });

});