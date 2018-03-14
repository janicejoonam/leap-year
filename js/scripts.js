//jQuery Business logic here.

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !=== 0)) {
    return true;
  } else {
    return false;
  }
  debugger
};

//jQuery user interface (UI) logic here.
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $("#result").text(result);
  });
});
