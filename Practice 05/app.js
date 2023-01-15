// ********************************Chapter 26 - 30 *****************************************

// Q1


var userInput = +(prompt("Enter a positive floating integer"));

var res = Math.round(userInput);

var res1 = Math.ceil(userInput);

var res2 = Math.floor(userInput);

document.write("Number: " + userInput + "<br>");

document.write("Round off value: " + res+ "<br>");

document.write("ceil value: " + res1+ "<br>");

document.write("floor value: " + res2);


// Q2


var userInput = +(prompt("Enter a negative floating integer"));

var res = Math.round(userInput);

var res1 = Math.ceil(userInput);

var res2 = Math.floor(userInput);

document.write("Number: " + userInput + "<br>");

document.write("Round off value: " + res+ "<br>");

document.write("ceil value: " + res1+ "<br>");

document.write("floor value: " + res2);


// Q3


var number = -4;

var abs = Math.abs(number);

document.write(`The absolute value of ${number} is ${abs}`);


// Q4


var number = Math.random() * 6;

var dice = number + 1;

var res = Math.floor(dice)

document.write(`Random Dice Values: ${res} `)


// Q5


var number = Math.random() * 2;

var dice = number + 1;

var coin = Math.floor(dice)

if(coin === 2)
{
    document.write(`${coin} <br> Random Coin Values: Heads `);
}

else
{
    document.write(`${coin} <br> Random Coin Values: Tails `);

}


// Q6

var randomNumber = Math.random() * 100 + 1;

var res = Math.floor(randomNumber);

document.write("Random Number between 1 and 100: " + res)


// Q7

var userWeight = +(prompt("Enter your weight in kilograms"));

userWeight = userWeight.toFixed(1);

document.write(`The weight of user is ${userWeight} kilograms`);


// Q8


var userInput = parseInt(prompt("Enter Secret Number: "));

var number = Math.random() * 10 + 1;

number = Math.floor(number);

if(userInput === number)
{
    alert("Congrats You Won")
}

else{
    alert("Try Again")
}
