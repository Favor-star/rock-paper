
const items = ["rock", "paper", "scissors"];
function playerSelection(callback) {
    var choice;
    document.getElementById("rock").addEventListener("click", function() {
        choice = "rock";
        callback(choice);
    });
    document.getElementById("paper").addEventListener("click", function() {
        choice = "paper";
        callback(choice);
    });
    document.getElementById("scissors").addEventListener("click", function(){
        choice = "scissors";
        callback(choice);
    });
}
function getComputerChoice(){
    var choice = Math.floor(Math.random() * items.length);
    return items[choice];
}

playerSelection(function(choice) {
    resultPrint(choice);
    // alert(choice);
    // alert(getComputerChoice());
  });
function resultPrint(choice){
    if (choice === getComputerChoice()){
        alert("It's a tie");
    }
    else if (choice == "rock" && getComputerChoice() == "paper") {
        alert("Computer win, paper beat rock");
    }
    else if (choice == "rock" && getComputerChoice() === "scissors") {
        alert("you win! Rock beat scissors");
    }
    else if (choice == "paper" && getComputerChoice() == "rock"){
        alert("You won. Paper beat rock");
    }
    else if (choice == "paper" && getComputerChoice() == "scissors"){
        alert("computer won");
    }
    else if(choice == "scissors" && getComputerChoice() == "rock") {
        alert("Computer won");
    }
    else if (choice == "scissors" && getComputerChoice() == "paper"){
        alert("You win");
    }
}
resultPrint();
