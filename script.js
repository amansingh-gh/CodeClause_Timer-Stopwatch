// JS for Stopwatch

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    var hrstring = hr;
    var minstring = min;
    var secstring = sec;
    var countstring = count;

    if (hr < 10) {
      hrstring = "0" + hrstring;
    }
    if (min < 10) {
      minstring = "0" + minstring;
    }
    if (sec < 10) {
      secstring = "0" + secstring;
    }
    if (count < 10) {
      countstring = "0" + countstring;
    }

    document.getElementById("hr").innerHTML = hrstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("count").innerHTML = countstring;

    setTimeout("stopwatch()", 10);
  }
}

// JS for timer

var countdownInterval;
var totalSeconds = 0;

function startCountdown() {
  var hoursInput = document.getElementById("hours");
  var minutesInput = document.getElementById("minutes");
  var secondsInput = document.getElementById("seconds");

  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;

  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds > 0) {
    countdownInterval = setInterval(updateCountdown, 1000);
    disableInputs();
  }
}

function stopCountdown() {
  clearInterval(countdownInterval);
  enableInputs();
}

function resetCountdown() {
  clearInterval(countdownInterval);
  totalSeconds = 0;
  updateCountdown();
  enableInputs();
}

function updateCountdown() {
  if (totalSeconds <= 0) {
    clearInterval(countdownInterval);
    enableInputs();
    return;
  }

  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var seconds = totalSeconds % 60;

  var timeString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.querySelector(".timer-cnt").textContent = timeString;
  totalSeconds--;
}

function disableInputs() {
  document.getElementById("hours").disabled = true;
  document.getElementById("minutes").disabled = true;
  document.getElementById("seconds").disabled = true;
}

function enableInputs() {
  document.getElementById("hours").disabled = false;
  document.getElementById("minutes").disabled = false;
  document.getElementById("seconds").disabled = false;
}
