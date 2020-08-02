var playerChoice = [];
var computerChoice = [];
var score = 0;
const rockPaperScissors = ["rock", "paper", "scissors"];


function computerPicks() {
  var randomNumber = Math.floor(Math.random() * 3);
  computerChoice.push(rockPaperScissors[randomNumber]);
  console.log(computerChoice);
}

function playAgain(){
  playerChoice = [];
  computerChoice = [];
  computerPicks();
}

computerPicks();

$(".icon").click(function() {
  var playerPicks = $(this).attr("id");
  playerChoice.push(playerPicks);
  console.log(playerChoice);
  winLose();
  playAgain();
});

function winLose() {
  if (playerChoice[0] == computerChoice[0]) {
    console.log('draw');
  }
  else if(playerChoice == "rock") {
    if (computerChoice == "scissors") {
      console.log("win");
      score++;
      $("#score-points").text(score);
      console.log(score);
    } else {
      console.log("lose");
    }
  }
  else if(playerChoice == "scissors") {
    if (computerChoice == "paper") {
      console.log("win");
      score++;
      $("#score-points").text(score);
      console.log(score);
    } else {
      console.log("lose");
    }
  }
    else if(playerChoice == "paper") {
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
