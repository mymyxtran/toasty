// Constants
let workingTimeTotal = 25*60;
let shortBreakTime = 5*60;
let workState = -1;
let sBreakState = -2;
let lBreakState = -3;
let currState = workState;

// Variables
let timeLeft = 25*60;
let timerRunning = false;

//Listeners
const pomodoroTimer = document.querySelector('#pomodoro-timer');
const startButton = document.querySelector('#pomodoro-start');
const pauseButton = document.querySelector('#pomodoro-pause');
const stopButton = document.querySelector('#pomodoro-stop');

const displayCurrentTimeLeft = () => {
    const seconds = timeLeft%60;
    const minutes = Math.floor(timeLeft/60);

    function addLeadingZeros (time) {
        if (time < 10){
            return `0{time}`;
        }else{
            return time;
        }
    }

    let result = `${addLeadingZeros(minutes)} : ${addLeadingZeros(seconds)}`;


}
const toggleClock = (reset) => {
    if(reset){
        currState = workState;
        timeLeft = workingTimeTotal;
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