const playerChoice = "";
const computerChoice = "";
const score = "";
const rockPaperScissors = ["rock", "paper", "scissors"];


function computerPicks() {
  var randomNumber = Math.floor(Math.random() * 3);
  var computerChoice = rockPaperScissors[randomNumber];
  console.log(computerChoice);
}

computerPicks();

$(".icon").click(function() {
  var playerPicks = $(this).attr("id");
  var playerChoice = playerPicks
  console.log(playerChoice);
  winLose();
});

function winLose() {
  if (playerChoice == computerChoice) {
    console.log('draw');
  }
  else if(playerChoice == "rock") {
    if (computerChoice == "scissors") {
      console.log("win");
    } else {
      console.log("lose");
    }
  }
  else if(playerChoice == "scissors") {
    if (computerChoice == "paper") {
      console.log("win");
    } else {
      console.log("lose");
    }
  }
    else if(playerChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("win");
      } else {
        console.log("lose");
      }
    }
  }
