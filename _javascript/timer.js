// Constants
const workingTimeTotal = 25*60;
const shortBreakTime = 5*60;
const workState = -1;
const sBreakState = -2;
const lBreakState = -3;


// Variables
var timeLeft = 25*60;
var timerRunning = false;
var currState = workState;

//Listeners
/*
const pomodoroTimer = document.querySelector('#pomodoro-timer');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
*/

function Affirm(){
    document.getElementById("Affirming").innerHTML = "You're doing great!";

}

document.querySelector('#stop').onclick = function(){
    currState = workState;
    timeLeft = workingTimeTotal;
    timerRunning = false;
    clearInterval(timerHandler);
    document.getElementById("mins").innerHTML = "25"
    document.getElementById("secs").innerHTML = "00"   
}

const displayCurrentTimeLeft = () => {
    var seconds = timeLeft%60;
    var minutes = Math.floor(timeLeft/60);

    function addLeadingZeros (time) {
        if (time < 10){
            return `0{time}`;
        }else{
            return time;
        }
    }

    minutes = addLeadingZeros(minutes);
    // trying two different methods to see if the addleadingzeros is the problem
    document.getElementById("mins").innerHTML = minutes.toString
    document.getElementById("secs").innerHTML = seconds.toString
    //let result = `${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}`;
    //pomodoroTimer.innerText = result.toString();


}

function stopTimer(){
    currState = workState;
    timeLeft = workingTimeTotal;
    timerRunning = false;
    clearInterval(timerHandler);
    document.getElementById("mins").innerHTML = "25"
    document.getElementById("secs").innerHTML = "00"
    //displayCurrentTimeLeft;
}

const toggleClock = (reset) => {
    if(reset){
        stopTimer();
    }else{
        // Toggle the state of the timer
        if(timerRunning){
            // stop timer
            clearInterval(timerHandler);
            timerRunning = !timerRunning;
        }else{
            // start timer
            timerRunning = !timerRunning;
            timerHandler = setInterval(() => {
                timeLeft--;
                displayCurrentTimeLeft();
            }, 1000)
        }
        
    }
}

/*
// Start
startButton.addEventListener('click', () => {
    toggleClock();
})

// Pause
pauseButton.addEventListener('click', () => {
    toggleClock();
})

// Stop
stopButton.addEventListener('click', () => {
    toggleClock(true);
})
*/