// Game variables
var score = 0;
var interval = 2000; // Initial hopping interval in milliseconds
var bug = document.getElementById("bug");
var gameArea = document.getElementById("gameArea");
var scoreElement = document.getElementById("score");
var resetSpeedButton = document.getElementById("resetSpeedButton");

// Set up the initial position of the bug
var areaWidth = gameArea.clientWidth - bug.offsetWidth;
var areaHeight = gameArea.clientHeight - bug.offsetHeight;
bug.style.left = Math.floor(Math.random() * areaWidth) + "px";
bug.style.top = Math.floor(Math.random() * areaHeight) + "px";

// Function to handle bug click event
bug.onclick = function() {
  score++;
  scoreElement.innerHTML = "Score: " + score;
  clearInterval(bugInterval);
  decreaseSpeed();
};

// Function to move the bug to a random position
function moveBug() {
  var newX = Math.floor(Math.random() * areaWidth);
  var newY = Math.floor(Math.random() * areaHeight);
  bug.style.left = newX + "px";
  bug.style.top = newY + "px";
}

// Function to increase the hopping speed
function increaseSpeed() {
  clearInterval(bugInterval);
  interval = interval / 2; // Increase the speed by decreasing the interval
  bugInterval = setInterval(moveBug, interval);
}

// Function to decrease the hopping speed
function decreaseSpeed() {
  clearInterval(bugInterval);
  interval = interval * 2; // Decrease the speed by increasing the interval
  bugInterval = setInterval(moveBug, interval);
}

// Function to reset the hopping interval to the initial value
function resetSpeed() {
  clearInterval(bugInterval);
  interval = 2000;
  bugInterval = setInterval(moveBug, interval);
}

// Function to reset the score
function resetScore() {
  score = 0;
  scoreElement.innerHTML = "Score: " + score;
}

// Start the bug hopping
var bugInterval = setInterval(moveBug, interval);
