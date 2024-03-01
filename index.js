var die1, die2, dieSum, balance, outcome, banner;
var die1Image = document.querySelectorAll(".img1")[0];
var die2Image = document.querySelectorAll(".img2")[0];

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    var die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    var die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    if (dieSum <= 5) {
        outcome = "You lose, please pay me $5.";
        balance -= 5;
    } else if (dieSum >= 9) {
        outcome = "You win, I pay you $5.";
        balance += 5;
    } else {
        outcome = "It's a draw, nobody wins or loses.";
    }

    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;

    document.getElementById("moneyBalance").innerHTML = "<h4>Current Money Balance: $" + balance + "</h4>";
}

function letsPlay() {

    // Roll the dice and play the game
    rollDice();
    whoWon();
    }
    

async function playGame() {
    var numPlays = parseInt(document.getElementById("numPlays").value);
    balance = 0;

    for (var i = 0; i < numPlays; i++) {
        rollDice();
        whoWon();

        // Introduce a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    document.getElementById("moneyBalance").innerHTML = "<h4>Final Money Balance: $" + balance + "</h4>";
}

