//Global Variables
var clueHoldTime = 1000;
var cluePauseTime = 333;
var nextClueWaitTime = 1000;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0
var addpat;
var patAmount = 5;
var mistakes = 0;

function startGame() {
  makePattern()
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("mistakesCount").classList.remove("hidden")
  document.getElementById("mistakesCount").innerHTML = "Mistakes: " + mistakes
  playClueSequence();
}

function settingsEasy(){
  patAmount = 5;
  document.getElementById("difhelp").innerHTML = "Difficulty: Easy (5) (Click the buttons to change)"
  clueHoldTime = 1000;
  cluePauseTime = 333;
  nextClueWaitTime = 1000;
}

function settingsMed(){
  patAmount = 10;
  document.getElementById("difhelp").innerHTML = "Difficulty: Medium (10) (Click the buttons to change)"
  clueHoldTime = 500;
  cluePauseTime = 200;
  nextClueWaitTime = 500;
}

function settingsHard(){
  patAmount = 15;
  document.getElementById("difhelp").innerHTML = "Difficulty: Hard (15) (Click the buttons to change)"
  clueHoldTime = 250;
  cluePauseTime = 100;
  nextClueWaitTime = 250;
}


function makePattern(){
  var i;
  pattern = [];
  //Random patterns
  for(i=0;i<patAmount;i++){
  addpat = Math.ceil(Math.random() * 4);
  pattern.push(addpat)
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("easyBtn").classList.remove("hidden");
  document.getElementById("medBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  document.getElementById("mistakesCount").classList.add("hidden")
}

function lightButton(btn) {
  document.getElementById("btn" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("btn" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    mistakes++
    document.getElementById("mistakesCount").innerHTML = "Mistakes: " + mistakes
    if (mistakes == 3){
      loseGame();
    } else {
      playClueSequence();
    }
  }
}

function winGame() {
  stopGame();
  alert("Game Over. You won.");
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);