// **************************Chapter 01******************************

// Q1

alert("Assalam-o-Alaikum!! Welcome to Our Website")

// Q2

alert("Error! Please enter a correct password.")

// Q3

alert("Welcome to JS land.. \n Happy Coding")

// Q4

alert("Welcome to JS land...\n\n" + " " + "Prevent this page from creating additional dialogs.");

// Q5

alert("Hello.... I can run  JS throughmy web browser's console")

// Q6

// using console 


// **************************Chapter 02******************************

// Q1

var num = 8;

document.write("Sum of 3 and 5 is <br>"+num);

// Q2(i)

var num1 = 15;

document.write("Multiply of 3 and 5 is <br>"+num1);

// Q2(ii)

var num2 = 2;

document.write("subtract of 3 and 5 is <br>"+num2);

// Q2(iii)

var num3 = 5/3;

document.write("division of 3 and 5 is <br>"+num3);

document.write("<br>");

// Q3 (a)

document.write("<br>");

var numOne;

document.write(numOne);

// Q3 (b)

document.write("<br>");

var numOne = 5;

document.write("Initial Value: " + numOne);

// Q3 (c)

document.write("<br>");

numOne++;

document.write("Value after Increment " + numOne);

// Q3 (d)

document.write("<br>");

numOne+=7;

document.write("Value after addition: " + numOne);

// Q3 (e)

document.write("<br>");

numOne--;

document.write("Value after decrement " + numOne);

// Q3 (f)

document.write("<br>");

numOne%=3;

document.write("The remainder is : " + numOne);


// Q4

document.write("<br>");

var ticketMovie = 600 * 5;

document.write("Total cost to buy 5 tickets to a movie is " + ticketMovie + "PKR.");

// Q5

var table = 4;
var table1 = 8;
var table2 = 12;
var table3 = 16;
var table4 = 20;
var table5 = 24;
var table6 = 28;
var table7 = 32;
var table8 = 36;
var table9 = 40;

document.write("<br>");

document.write("Table of " + table);

document.write("<br>");

document.write("4 x 1 = " + table);

document.write("<br>");

document.write("4 x 2 = " + table1);

document.write("<br>");

document.write("4 x 3 = " + table2);

document.write("<br>");

document.write("4 x 4 = " + table3);

document.write("<br>");

document.write("4 x 5 = " + table4);

document.write("<br>");

document.write("4 x 6 = " + table5);

document.write("<br>");

document.write("4 x 7 = " + table6);

document.write("<br>");

document.write("4 x 8 = " + table7);

document.write("<br>");

document.write("4 x 9 = " + table8);

document.write("<br>");

document.write("4 x 10 = " + table9);


// Q6

document.write("<br>");

var celsius = +prompt("Enter Celsius Temperature");

var conversion = (celsius *9/5)+32;

document.write(celsius +"<sup>o</sup>C" + "is" + conversion + "<sup>o</sup>F");

document.write("<br>");

document.write("<br>");

// --------------------------------------------------------------------------------

var Fahrenheit = +prompt("Enter Fahrenheit Temperature");

var conversion1 = (Fahrenheit -32)*5/9;

document.write(Fahrenheit +"<sup>o</sup>F" + "is" + conversion1 + "<sup>o</sup>C");


// Q7

var item1 = 650;
var item2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;

var priceItem1  = item1 * qty1;
var priceItem2  = item2 * qty2;
var total = priceItem1 + priceItem2 + shipping;

document.write(`Price of Item 1 is ${item1} <br>
                Quantity of item 1 is ${qty1} <br>
                Price of Item  is ${item2} <br>
                Quantity of item 1 is ${qty2} <br>
                Shipping Chagers ${shipping} <br>
                Total Cost of your order is ${total}`)


// Q8

var totalMarks = 980;
var obtMarks = 804;
var per = obtMarks / totalMarks *100
document.write(`Total Marks: ${totalMarks} <br> 
Obatined Marks: ${obtMarks} <br> 
Percentage:${per}    `)

// Q9


var US = 10;
var saudi  =25;
var USConvert = US * 104.80;
var saudiConvert = saudi * 28;
var total = USConvert + saudiConvert;
document.write("Total Currency in PKR: " +total)


// Q10


var num = 13;
var add = num  + 5 ;
var mul = num * 10;
var div = num  / 2 ;

console.log(num,add,mul,div);


// Q11

var currentYear = +(prompt("Enter Current Year"));
var yourYear = +(prompt("Enter Your BirthYear"));

var age = currentYear - yourYear;

document.write(`Current Year: ${currentYear} <br>
                Birth Year: ${yourYear} <br>
                Your age is: ${age}`);


// Q12

var fsnack = "cocomo";
var age = 20;
var maxAge = 65;
var maxSnack = 3;
document.write( ` You will need ${maxAge * maxSnack} to last you until the ripe old age of ${maxAge}`)   


// **************************Chapter 03******************************

// Q1

var age = prompt("Enter your age");

alert("I am " + age + " years old");

// Q2

var site = 14;

alert("You have visited this site " + site + " times.");

// Q3

var birthYear = 2001;

document.write("My Birth Year is " + birthYear + "<br>"+ "<br>"+
" Data type of my declared variable is " + typeof(birthYear));

// Q4

var Visitor_Name = prompt("Enter your name");
var product = prompt("Enter your product");
var quantity = +prompt("Enter Quantity");

document.write("<br>"+"<br>"+Visitor_Name + " ordered " + quantity + " " +  product + " on XYZ Clothing Store");


// ****************************Chapter 04******************************


// Q1(1)

var variables = num1,num2,num3;

// Q1(2)

// Legal Variables Names

// var FullName
// var Full_Name
// var Fullname123
// var fullname

// Illegal Variables Names

// var 123FullName
// var #$FullName
// var FullName%
// var Full-Name
// var Full Name

// Q1(3a)

document.write("<h1>Rules For naming JS Variables</h1>")

// Q1(3b)

// _
// CamelCase
// FullName123
// $my_FullName

// Q1(3c)

// var _name
// var $name
// var name

// Q1(3d)

document.write("Variable name are case Sensitive");

// Q1(3e)

// JS Keyword
