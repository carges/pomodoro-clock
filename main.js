$(document).ready(function(){
  var lessBreak = document.getElementById("btnLessBreak");
  var moreBreak = document.getElementById("btnMoreBreak");
  var lessSession = document.getElementById("btnLessSession");
  var moreSession = document.getElementById("btnMoreSession");
  var breakString = document.getElementById("myBreak");
  var sessionString = document.getElementById("mySession");
  var countDownString = document.getElementById("myCountDown");
  var reset = document.getElementById("myReset");

  lessBreak.addEventListener("click",setLessBreak);
  moreBreak.addEventListener("click",setMoreBreak);
  lessSession.addEventListener("click",setLessSession);
  moreSession.addEventListener("click",setMoreSession);
  countDownString.addEventListener("click",startCountDown);
  reset.addEventListener("click",resetCnt);

  var breakVal = 5;
  var sessionVal = 25;
  var i = 0;
  var countdownTimer = 0;

  function setLessBreak() {
    if (breakVal !== 1) {
      breakString.innerHTML = breakVal - 1;
      breakVal--;
    } else breakString.innerHTML = 1;
  }
  function setMoreBreak() {
    breakString.innerHTML = breakVal + 1;
    breakVal++;
  }
  function setLessSession() {
    if (sessionVal !== 1) {
      sessionString.innerHTML = sessionVal - 1;
      sessionVal--;
    } else sessionString.innerHTML = 1;
    countDownString.innerHTML = sessionVal;
  }
  function setMoreSession() {
    sessionString.innerHTML = sessionVal + 1;
    sessionVal++;
    countDownString.innerHTML = sessionVal;
  }

  function startCountDown() {
    countDownString.innerHTML = "Session!";
    $("span").css("pointer-events", "none");
    $("button").css("pointer-events", "none");
    $("#myCountDown").css("background", "#286b25");

    var seconds = 60 * sessionVal;
    i++;
    countdownTimer = setInterval(secondPassed, 1000);

    function secondPassed() {
        var minutes = Math.round((seconds - 30)/60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        countDownString.innerHTML = minutes + ":" + remainingSeconds;

        if (seconds === 0) {
          if (i%2 === 1) {
            clearInterval(countdownTimer);
            countDownString.innerHTML = "Break!";
            $("#myCountDown").css("background", "#bf7607");
            seconds = 60 * breakVal;
            i++;
            countdownTimer = setInterval(secondPassed, 1000);
          } else {
            clearInterval(countdownTimer);
            countDownString.innerHTML = "Session!";
            $("#myCountDown").css("background", "#286b25");
            seconds = 60 * sessionVal;
            i++;
            countdownTimer = setInterval(secondPassed, 1000);
          }
        } else {
            seconds--;
        }
    }
  }

  function resetCnt() {
    clearInterval(countdownTimer);
    breakVal = 5;
    sessionVal = 25;
    i = 0;
    countdownTimer = 0;
    countDownString.innerHTML = sessionVal;
    breakString.innerHTML = breakVal;
    sessionString.innerHTML = sessionVal;
    $("#myCountDown").css("background", "#171b3c");
    $("span").css("pointer-events", "auto");
    $("button").css("pointer-events", "auto");
  }
});
