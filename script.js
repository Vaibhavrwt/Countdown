
const StartDate = new Date().getTime();
let timer;

function startCountdown() {
    clearInterval(timer);
  const inputDate = document.getElementById("targetDate").value;
  if (!inputDate) {
    alert("Please enter a valid date and time.");
    return;
  }
  const EndDate = new Date(inputDate).getTime();

  function UpdateCountdown() {
    const now = new Date().getTime();
    const dayinms = 24 * 60 * 60 * 1000;
    const hourinms = 60 * 60 * 1000;
    const minuteinms = 60 * 1000;
    const secondinms = 1000;

    const timeleft = EndDate - now;
    const timecoverered = now - StartDate;

    const days = Math.floor(timeleft / dayinms);
    const hours = Math.floor((timeleft % dayinms) / hourinms);
    const minutes = Math.floor((timeleft % hourinms) / minuteinms);
    const seconds = Math.floor((timeleft % minuteinms) / secondinms);

    const totaltime = EndDate - StartDate;
    const percentage = (timecoverered / totaltime) * 100;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    document.getElementById("progressFill").style.width = percentage + "%";

    if (EndDate - now < 0) {
      clearInterval(timer);
      document.getElementById("timerDisplay").innerHTML = "Countdown Over!";
      document.getElementById("timerDisplay").style.cssText = "color: green; font-size: 2rem; font-weight: bold;";
      document.getElementById("progressFill").style.width = "100%";
    }
  }
  timer = setInterval(UpdateCountdown, 1000);
}

function resetCountdown() {
    clearInterval(timer);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("progressFill").style.width = "0%";
}


function pauseCountdown() {
    clearInterval(timer);
}