$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      // save in localStorage
      localStorage.setItem(time, value);
    });

    

    // load any saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    function timeUpdate() {
      // get current number of hours
      var currentTime = moment().hours();
      

      // loop over time blocks
      $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
  
        // check if we've moved past this time
        if (blockTime < currentTime) {
          $(this).addClass("past");
        } 
        else if (blockTime === currentTime) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    timeUpdate();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(timeUpdate);
  
    // display current day and time on page
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $("#time").text(moment().format("LT"));
  });