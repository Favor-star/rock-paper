
const items = ["Rock", "Paper", "Scissors"];
function playerSelection(callback) {
    var choice;
    document.getElementById("rock").addEventListener("click", function() {
        choice = "Rock";
        callback(choice);
    });
    document.getElementById("paper").addEventListener("click", function() {
        choice = "Paper";
        callback(choice);
    });
    document.getElementById("scissors").addEventListener("click", function(){
        choice = "Scissors";
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
let pcMarks = 0;
let yourMarks = 0;
function resultPrint(choice){
    let text;
    let pcChoice = getComputerChoice();
    if (choice == "Rock" && pcChoice == "Paper") {
        text = `Computer win, ${pcChoice} beat ${choice}`;
        pcMarks += 1;  
    }
    else if (choice == "Rock" && pcChoice === "Scissors") {
        text = `You win! ${choice} beat ${pcChoice}`;
        yourMarks +=1;
    }

    else if (choice == "Paper" && pcChoice == "Rock"){
        text = `You win! ${choice} beat ${pcChoice}`;
        yourMarks +=1;
    }

    else if (choice == "Paper" && pcChoice == "Scissors"){
       text = `Computer won! ${pcChoice} beat ${choice}`;
       pcMarks += 1;
    //    alert(`COMPUTER: ${pcChoice} and YOUR CHOICE: ${choice}`);
    }

    else if(choice == "Scissors" && pcChoice == "Rock") {
        text = `Computer won! ${pcChoice} beat ${choice}`;
        pcMarks += 1;
        // alert(`COMPUTER: ${pcChoice} and YOUR CHOICE: ${choice}`);
    }

    else if (choice == "Scissors" && pcChoice == "Paper"){
        text = `You win! ${choice} beat ${pcChoice}`;
        yourMarks +=1;
        // alert(`COMPUTER: ${pcChoice} and YOUR CHOICE: ${choice}`);
    }
    else if (choice === pcChoice){
        text =`It's a tie! ${choice} equals ${pcChoice}`;
     }

     else {
        text = "Press again!";
     }

    document.getElementById("statusText").innerHTML = text;
    document.getElementById("yourscore").innerHTML = yourMarks;
    document.getElementById("pcscore").innerHTML = pcMarks;
}


