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
    document.getElementById("computerChoiceScreen").style.display = "inline-block"
    document.getElementById(computerChoice + "Computer").style.display = "inline-block"
    document.getElementById("winnerScreen").style.display = "block"
    winLose();
  }, 1000);
});

function winLose() {
  if (playerChoice[0] == computerChoice[0]) {
    document.getElementById("results").innerHTML = "DRAW"
  } else if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      document.getElementById("results").innerHTML = "YOU WIN"
      score++;
      $("#score-points").text(score);
    } else {
      document.getElementById("results").innerHTML = "YOU LOSE"
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      document.getElementById("results").innerHTML = "YOU WIN"
      score++;
      $("#score-points").text(score);
    } else {
      document.getElementById("results").innerHTML = "YOU LOSE"
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      document.getElementById("results").innerHTML = "YOU WIN"
      score++;
      $("#score-points").text(score);
    } else {
      document.getElementById("results").innerHTML = "YOU LOSE"
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
  document.getElementById(playerChoice + "Choice").style.display = "none";
  document.getElementById(computerChoice + "Computer").style.display = "none"
  document.getElementById("computerChoiceScreen").style.display = "none"
  document.getElementById("winnerScreen").style.display = "none"
  playAgain();
})
