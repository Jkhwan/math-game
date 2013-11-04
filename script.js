function Player(name) {
	this.name = name;
	this.life = 3;
	this.score = 0;
}
console.log("Welcome to the most exciting Math game ever!");
var name = prompt("Player 1: enter your name");
var player1 = new Player(name);
name = prompt("Player 2: enter your name");
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

while(player1.life > 0 && player2.life > 0) {
	var operator = randomOperator();
	var num1 = randomNumber();
	var num2 = randomNumber();
	var correct = 0;
	var ans = Number(prompt(player1.name + ": what is the value of " + num1 + " " + operator + " " + num2));
	if (operator === "+") {
		correct = num1 + num2;
	} else if (operator === "-") {
		correct = num1 - num2;
	} else {
		correct = num1 * num2;
	}
	if (correct === ans) {
		player1.score++;
	} else {
		player1.life--;
		console.log(player1.name + " has " + player1.life + " lives and " + player2.name + " has " + player2.life + " lives");
	}

	operator = randomOperator();
	num1 = randomNumber();
	num2 = randomNumber();
	correct = 0;
	ans = Number(prompt(player2.name + ": what is the value of " + num1 + " " + operator + " " + num2));
	if (operator === "+") {
		correct = num1 + num2;
	} else if (operator === "-") {
		correct = num1 - num2;
	} else {
		correct = num1 * num2;
	}
	if (correct === ans) {
		player2.score++;
	} else {
		player2.life--;
		//console.log(player1.name + "'s score is " + player1.score + " and " + player2.name + "'s score is " + player2.score);
		console.log(player1.name + " has " + player1.life + " lives and " + player2.name + " has " + player2.life + " lives");
	}

} 

console.log("Game Over!");
if (player1.life === 0) {
	console.log(player1.name + " has lost!");
} else {
	console.log(player2.name + " has lost!");
}
console.log(player1.name + "'s score is " + player1.score + " and " + player2.name + "'s score is " + player2.score);








