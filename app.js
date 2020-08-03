var playerChoice = [];
var computerChoice = [];
var score = 0;
const rockPaperScissors = ["rock", "paper", "scissors"];

function computerPicks() {
  var randomNumber = Math.floor(Math.random() * 3);
  computerChoice.push(rockPaperScissors[randomNumber]);
  console.log(computerChoice);
}

function playAgain() {
  playerChoice = [];
  computerChoice = [];
}

$(".icon").click(function() {
  var playerPicks = $(this).attr("id");
  playerChoice.push(playerPicks);
  console.log(playerChoice);
  computerPicks();
  document.getElementById('RPS-main').style.display = 'none';
  document.getElementById('versusScreen').style.display = 'block';
  document.getElementById(playerPicks + "Choice").style.display = "inline-block";
  setTimeout(function() {
    document.getElementById(computerChoice + "Computer").style.display = "inline-block"
    document.getElementById("winnerScreen").style.display = "inline-block"
    winLose();
  }, 1000);
});

function winLose() {
  if (playerChoice[0] == computerChoice[0]) {
    console.log('draw');
  } else if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      console.log("win");
      score++;
      $("#score-points").text(score);
      console.log(score);
    } else {
      console.log("lose");
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      console.log("win");
      score++;
      $("#score-points").text(score);
      console.log(score);
    } else {
      console.log("lose");
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("win");
      score++;
      $("#score-points").text(score);
      console.log(score);
    } else {
      console.log("lose");
    }
  }
}

$(".rules").click(function() {
  document.getElementById('ruleImage').style.display = 'block';
});

$(".closeButton").click(function() {
  document.getElementById('ruleImage').style.display = 'none';
});

$(".playAgain").click(function() {
  document.getElementById('RPS-main').style.display = 'block';
  document.getElementById('versusScreen').style.display = 'none';
  document.getElementById(playerChoice +"Choice").style.display = "none";
  document.getElementById(computerChoice + "Computer").style.display = "none"
  playAgain();
})
