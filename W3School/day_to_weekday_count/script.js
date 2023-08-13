// Function to calculate the countdown
function countdown() {
    // Get the current date
    var currentDate = new Date();

    // Find the next Saturday
    var daysToSaturday = (6 - currentDate.getDay() + 7) % 7; // Number of days until the next Saturday
    var nextSaturday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + daysToSaturday);
    
    // Calculate the remaining time
    var timeRemaining = nextSaturday.getTime() - currentDate.getTime();
    var daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Display the countdown on the web page
    var countdownElement = document.getElementById("weekend_countdown");
    countdownElement.innerHTML = daysRemaining + " days and " + hoursRemaining + " hours";
  }

  // Call the countdown function when the page loads
  window.onload = function() {
    countdown();
  };