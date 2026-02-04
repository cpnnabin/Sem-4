
// Exercise 1: Variables and Data Types
let personName = "Alice";
let age = 22;
let email = "alice@example.com";
console.log("Name:", personName);
console.log("Age:", age);
console.log("Email:", email);

// Exercise 2: Functions and Conditional Statements
function isAdult(age) {
	return age >= 18 ? "Adult" : "Minor";
}
console.log("isAdult(16):", isAdult(16));
console.log("isAdult(18):", isAdult(18));
console.log("isAdult(25):", isAdult(25));

// Exercise 3: Loops
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// Exercise 4: Arrays and Loops
let fruits = ["Apple", "Banana", "Cherry", "Mango"];
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// Exercise 5: Conditional Statements and Functions
function isEven(number) {
	return number % 2 === 0 ? "Even" : "Odd";
}
console.log("isEven(3):", isEven(3));
console.log("isEven(8):", isEven(8));
console.log("isEven(0):", isEven(0));

// Exercise 6: Conditional Statements and Loops
for (let i = 1; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + ": Even");
	} else {
		console.log(i + ": Odd");
	}
}

// Exercise 7: Functions, Arrays, and Loops
let numbers = [1, 2, 3, 4, 5];
function sumArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
console.log("Sum of array:", sumArray(numbers));

// Exercise 8: Nested Loops
for (let i = 1; i <= 10; i++) {
	let row = "";
	for (let j = 1; j <= 10; j++) {
		row += (i * j) + "\t";
	}
	console.log(row);
}
