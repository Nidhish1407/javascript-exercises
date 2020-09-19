function add (a,b) {
	if(a==0 && b==0)return 0;
	else return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (a) {
	let sum = 0;
    a.forEach( i => sum+= +i);

	return sum;
}

function multiply (a) {
	let tot = 1;
	a.forEach( i => tot*= +i);
	return tot;
}

function power(a,b) {
	return a**b;
}

function factorial(a) {
	if(a==1 || a==0)return 1;
	else return a*factorial(a-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}