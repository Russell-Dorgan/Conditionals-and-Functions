// Equals
let equals - 1 === 1;
console.log(equals);

//Greater Than
let greaterThan - 5 > 1;

// Less Than
let lessThan = 2 < 10;

// Greater Than Equals
let greaterThanEq = 5 >= 5;

//Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
	let storeAisLower = storeA < storeB;
	if (storeAisLower) {
		console.log("Store A has a lower price.")
	} else if (storeB <storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log ("Their prices are equal")
	}
}

compareStorePrices(10, 5);
compareStorePrices (7, 10);

function squareNum (number) {
	return number * number;

}

let squaredNumber = squareNum (4);
console.log(squaredNumber);

let x = 10;

function addnumbers (n, m, x) {
	console.log(x);
	if (1===1) {
		let b = 8;
	}
	console.log(b);
	return n + m;
}

addNumbers(1, 2, 10);

let ourArray = [1, 2, 3, 4, 5];
console.log(ourArray[0]);

for(counter; comp; incr){

	while (true) {
		console.log('Ran');
	}
}