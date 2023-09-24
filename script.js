
//step 1 - define some basic variable
let display = document.getElementById('clock');
const audio = new Audio('static/alarm-clock-short-6402.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

//step 2 - display the clock
function updateTime(){
    const date = new Date();
    // through the current date, fetching the current hour, minute and seconds
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
// this will run the clock at every second
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
      
      // here, alarmTime will always be greater than current time
      if (timeToAlarm > current) {
        // after how much time, this alarm should be set
        const timeout = timeToAlarm.getTime() - current.getTime();
        alarmTimeout = setTimeout(function() {
        // audio should be play at that time
          audio.play();
        }, timeout);
        alert("Alarm Set");
      }
    }
  }


//step 4 - clear the alarm
function clearAlarm(){
    // first will pause the audio
    audio.pause();

    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm Cleared!');
    }
}