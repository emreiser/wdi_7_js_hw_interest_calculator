var number, guess;
number = Math.floor(Math.random() * 10) + 1;
guess = parseInt(prompt("Guess a number between 1 and 10"));

if(guess === number) {
	alert("Correct!");
} else if (guess > number) {
	alert("Too high");
} else {
	alert("Too low.");
}
