alert("Hello WORLD..");

document.write("Hello Welcome to JavaScript");

console.log("Hello Welcome to First Class of JavaScript")

// ---------------------------------------------------------

var firstName = "Mohammad";

var lastName = "Faraz";

var fullName = firstName + " " + lastName;

alert(fullName);

console.log(fullName)

// ---------------------------------------------------------

var number = 102;

var number02 = 69.2;

var result = number + number02;

alert(result);

console.log(result)

// ---------------------------------------------------------

var Name = "Mohammad Kashif Iqbal";

Name = "Mohammad Faraz";

alert(Name);

console.log(Name);

// ----------------------Illegal Variables-----------------------

// var 123Name
// var user Name
// var $#abc
// var fullName%#
// var full-name

// ----------------------Legal Variables-----------------------

// var name123
// var number_01
// var FullName
// var fullname

// --------------------------------------------------------------

var num = 20;

var S_Num = 15;

var result =  num + S_Num;

var result2 =  num - S_Num;

var result3 =  num * S_Num;

var result4 =  num / S_Num;

var result5 =  num % S_Num;

alert(result,result2,result3,result4,result5);


// ----------------Pre and Post Inc & Dec---------------------

var num = 1;

var num2 = 5;

var result6 = num++;
var result7 = num--;
var result8 = ++num;
var result9 = --num;


console.log("result6" +" "+ result6);
console.log("result7" +" "+ result7);
console.log("result8" +" "+ result8);
console.log("result9" +" "+ result9);

// ----------------------------------------------------------------

var calculation = 10 + 13 * 5 - (3.2-8);

var calculation02 = (20-8) * 5 /4 - ((1*3)+4/2);

console.log(calculation);

console.log(calculation02);


// ----------------------------------------------------------------

var test = true;

var test02 = false;

console.log(test)

console.log(test02)


// ----------------------------------------------------------------

var UserName = "faraz@gmail.com";

console.log("Welcome to " + UserName);

// ----------------------------------------------------------------

var VarRes = "Umair" + 10;

var VarRes1 = "50" + 10;

var VarRes2 = 100 + 10;

console.log(VarRes);

console.log(VarRes1);

console.log(VarRes2)

// ----------------------------------------------------------------

var UserName = "Faraz";

var number = "100";

var number03 = 12;

console.log(typeof UserName);

console.log(typeof number);

console.log(typeof number03);

// ----------------------------------------------------------------

var user = prompt("Enter Your Name");

var age = +prompt("Enter your age");

var city = prompt("Enter where do you live")

console.log("Welcome " + user);

console.log("Your age " + age);

console.log("Live in " + city);

