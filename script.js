
//step 1 - define some basic variable
let display = document.getElementById('clock');
const audio = new Audio('static/alarm-clock-short-6402.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

//step 2 - display the clock
function updateTime(){
    const date = new Date();
    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    display.innerText = hour + " : " + minutes + " : " + seconds;
}


function formatTime(time){
    if(time < 10 ){
        return "0" + time;
    }else{
        return time;
    }
}
setInterval(updateTime, 1000);

//step 3 - set the alarm

// Get the alarm time from input box
function setAlarmTime(value) {
    alarmTime = value;
  }

function setAlarm() {
    if (alarmTime) {
      const current = new Date();
      const timeToAlarm = new Date(alarmTime);
  
      if (timeToAlarm > current) {
        const timeout = timeToAlarm.getTime() - current.getTime();
        alarmTimeout = setTimeout(function() {
          audio.play();
        }, timeout);
        alert("Alarm set");
      }
    }
  }

  
//step 4 - clear the alarm
function clearAlarm(){
    audio.pause();

    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm Cleared!');
    }
}