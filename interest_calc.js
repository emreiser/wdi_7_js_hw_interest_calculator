var loan, rate, years, solution;

loan = parseFloat(prompt("How much is your initial loan amount?"));
years = parseFloat(prompt("How many years is the loan for?"));
rate = parseFloat(prompt("What was the interest rate? (%)"))/100;


solution = loan;

var i = 1

while(i <= years) {
	solution = solution + (solution * rate);
	i = i + 1;
}

console.log(solution)
