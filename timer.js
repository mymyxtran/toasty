// Constants
const workingTimeTotal = 25*60;
const shortBreakTime = 5*60;
const workState = -1;
const sBreakState = -2;
const lBreakState = -3;
//const pauseState = -4;


// Variables
var timeLeft = workingTimeTotal;
var timerRunning = false;
var currState = workState;
let affirmOn = false;
var numberSessions = 0;

//Listeners

const pomodoroTimer = document.querySelector('#pomodoro-timer');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');


function Affirm(){
    if(!affirmOn){
        document.getElementById("Affirming").innerHTML = "You're doing great!";
    }else{
        document.getElementById("Affirming").innerHTML = "Stay strong :)";
    }
    affirmOn = !affirmOn;

}


/*
document.querySelector('#stop').onclick = function(){
    currState = workState;
    timeLeft = workingTimeTotal;
    timerRunning = false;
    clearInterval(timerHandler);
    document.getElementById("mins").innerHTML = "25"
    document.getElementById("secs").innerHTML = "00"   
}
*/

const displayCurrentTimeLeft = () => {
    var seconds = timeLeft%60;
    var minutes = Math.floor(timeLeft/60);

    function addLeadingZeros (time) {
        return (time < 10) ? `0${time}` : time
    }

    //minutes = addLeadingZeros(minutes);
    // trying two different methods to see if the addleadingzeros is the problem
    //document.getElementById("mins").innerHTML = minutes.toString
   // document.getElementById("secs").innerHTML = seconds.toString
    //let result = `${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}`;
    let result = `${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}`;
    document.getElementById("pomodoro-timer").innerHTML = result.toString();


}

function stopTimer(){
    clearInterval(timerHandler);
    currState = workState;
    timeLeft = workingTimeTotal;
    timerRunning = false;
    displayCurrentTimeLeft();
}




function toggleClock (reset){
    if(reset){
        stopTimer();
    }else{
        // Toggle the state of the timer
        if(!timerRunning){
            // start timer
            timerRunning = !timerRunning;
            //currState = workState;
            document.getElementById("start").innerHTML = "Keep Working!";
            timerHandler = setInterval(() => {
                timeLeft--;
                displayCurrentTimeLeft();
                if(timeLeft == 0){
                    // stop the timer
                    clearInterval(timerHandler);
                    timerRunning = false;
                    // Swap states!
                    if(currState == workState){
                        numberSessions ++;
                        document.getElementById("numSessions").innerHTML = `Sessions completed so far: ${numberSessions}`;
                        currState = sBreakState;
                        timeLeft = shortBreakTime;
                        document.getElementById("start").innerHTML = "Start Break!";
                    }else if(currState == sBreakState){
                        currState = workState;
                        timeLeft = workingTimeTotal;
                        document.getElementById("start").innerHTML = "Start Working";
                    }
                }
            }, 1000)
            
        }else{
            // stop timer
            clearInterval(timerHandler);
            timerRunning = !timerRunning;
            //currState = pauseState;
        }
        
    }
}


// Start
startButton.addEventListener('click', () => {
    toggleClock(false);
})

// Pause
pauseButton.addEventListener('click', () => {
    toggleClock(false);
})

// Stop
stopButton.addEventListener('click', () => {
    toggleClock(true);
})
