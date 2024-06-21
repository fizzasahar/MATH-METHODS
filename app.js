// 1. 

var num = +prompt("Enter a positive integer: ");

if (num > 0) {
    document.write("Number: " + num + "<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
}
else {
    alert("Enter a positive integer please!")
}

// 2. 

var num = +prompt("Enter a negative integer: ");

if (num < 0) {
    document.write("Number: " + num + "<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
}
else {
    alert("Enter a negative integer please!")
}

// 3. 

var num = +prompt("Enter number: ");
document.write("The absolute value of " + num + " is " + Math.abs(num)  + "<br>");

// 4. 

var randomNumber = Math.random() * 6;
document.write("Random dice value: " + Math.floor(randomNumber)  + "<br>");

// 5.

var coinValue = Math.random() * 2;
coinValue = Math.floor(coinValue);
if (coinValue > 0) {
    document.write("Random coin value: Heads"  + "<br>");
}
else {
    document.write("Random coin value: Tails"  + "<br>");
}

// 6. 

var randomNumber = Math.random() * 100;
document.write("Random number between 1-100: " + Math.floor(randomNumber)  + "<br>");

// 7. 

var weight = prompt("Enter your weight in kilograms: ");
document.write("The weight of user is " + weight + " kilograms"  + "<br>");

// 8. 
var secretNumber = +prompt("Enter a number between 1 and 10");
randomNumber = Math.random() * 10;
randomNumber = Math.ceil(randomNumber);
if (secretNumber === randomNumber) {
    alert("Congratulations");
}
else {
    alert("Try Again");
}

