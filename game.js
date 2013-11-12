function Player(name) {
	this.name = name;
	this.lives = 3;
	this.score = 0;
	this.reset = function() {
		this.lives = 3;
		this.score = 0;
	}
	this.isAlive = function() {
		return (this.lives > 0);
	}
}
console.log("Welcome to the most exciting Math game ever!");
var name = prompt("Player 1: What's your name");
var player1 = new Player(name);
name = prompt("Player 2: What's your name");
var player2 = new Player(name);

var randomNumber = function() {
	return Math.floor(Math.random() * 20 + 1);
};

var randomOperator = function() {
	switch (Math.floor(Math.random() * 3 + 1)) {
		case 1:
		 	return '+';
		 	break;
	 	case 2:
	 		return '-';
	 		break;
 		case 3:
 		  return '*';
 		  break;
	};
};

do {
	var currentPlayer = 1;
	player1.reset();
	player2.reset();

	while(player1.isAlive() && player2.isAlive()) {
		var player;
		if (currentPlayer === 1) {
			player = player1;
		} else {
			player = player2;
		}
		
		var operator = randomOperator();
		var num1 = randomNumber();
		var num2 = randomNumber();
		var correct = 0;
		var ans = Number(prompt(player.name + ": what is the value of " + num1 + " " + operator + " " + num2));
		if (operator === "+") {
			correct = num1 + num2;
		} else if (operator === "-") {
			correct = num1 - num2;
		} else {
			correct = num1 * num2;
		}

		if (correct === ans) {
			player.score++;
		} else {
			player.lives--;
			console.log(player1.name + " has " + player1.lives + " lives and " + player2.name + " has " + player2.lives + " lives");
		}

		currentPlayer = (currentPlayer + 1) % 2;
	} 

	if (player1.lives === 0) {
		console.log(player1.name + " has lost!");
	} else {
		console.log(player2.name + " has lost!");
	}
	console.log(player1.name + "'s score is " + player1.score + " and " + player2.name + "'s score is " + player2.score);
} while (prompt("Do you want to play again? yes to restart or any other response to terminate the game") === "yes");

console.log("Game Over!");

