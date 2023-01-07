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


// ***********************************Chapter 6 - 9***********************************************

// Q1

var a = 10;

document.write("Result <br>");
document.write("<br>");

document.write("The value of a is: " + a);

document.write("<br>");

document.write("--------------------------------------------------------------- <br>");

document.write("The value of ++a is: " + ++a);
document.write("<br>");
document.write("<br>");

document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

document.write("The value of a++ is: " + a++);
document.write("<br>");
document.write("<br>");

document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");


document.write("The value of --a is: " + --a);
document.write("<br>");
document.write("<br>");

document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

document.write("The value of a-- is: " + a--);
document.write("<br>");
document.write("<br>");

document.write("Now the value of a is: " + a);


// // Q2

var a = 2, b=1;

var result = --a - --b + ++b + b--;

document.write("<br>");
document.write("<br>");

document.write(result);


// Q3

var greet = prompt("Enter your Name");

alert(greet);


// // Q4-Q5

var tableNum = prompt("please enter a table number");
if (tableNum !== "") {
    for (var i = 1; i <= 10; i++) {
        document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`)
    }
}
else {
    for (var i = 1; i <= 10; i++) {
        document.write(`5 x ${i} = ${5 * i} <br>`)
    }
}


// Q6

var sub1 = prompt("Enter subject 1 name");
var sub2 = prompt("Enter subject 2 name");
var sub3 = prompt("Enter subject 3 name");
var totalMark = 100;
var obt1 = parseInt(prompt("Enter OBT. Marks subject 1 "))
var obt2 = parseInt(prompt("Enter OBT. Marks subject 2 "))
var obt3 = parseInt(prompt("Enter OBT. Marks subject 3 "))
var totalmarks = obt1 + obt2 + obt3;
var per = totalmarks / 300 * 100;
// per.toFixed()

document.write("<table>")
document.write("<tr>")
document.write("<td> " + "<b>"+ "Subject"  + "</b>" + "</td>" +  
                "<td> " + "<b>"+ "Total Marks"  + "</b>" + "</td>"+
                "<td> " + "<b>"+ "obtained Marks"  + "</b>" + "</td>"+
                "<td> " + "<b>"+ "Percentage"  + "</b>" + "</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td> " + sub1  + "</td>" +  
                "<td> "+ totalMark + "</td>"+
                "<td> " +obt1 + "</td>"+
                "<td> "+ (obt1 /totalMark * 100)   +"%"+"</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td> " + sub2  + "</td>" +  
                "<td> "+ totalMark + "</td>"+
                "<td> " +obt2 + "</td>"+
                "<td> "+ (obt2 / totalMark *100) +"%" + "</td>")
document.write("</tr>")


document.write("<tr>")
document.write("<td> " + sub3  + "</td>" +  
                "<td> "+ totalMark + "</td>"+
                "<td> " +obt3 + "</td>"+
                "<td> "+ (obt3 / totalMark *100) +"%"  + "</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td> "   + "</td>" +  
                "<td> "+ 300 + "</td>"+
                "<td> " +totalmarks + "</td>"+
                "<td> "+ per +"%"  + "</td>")
document.write("</tr>")
document.write("</table>")



// ***********************************Chapter 9 - 11***********************************************.


// Q1

var CityName = prompt("Enter city name");

if(CityName == "karachi")
{
    alert("Welcome to city of light");
}

else if(CityName == "Karachi")
{
    alert("Welcome to city of light");
}


// Q2

var gender = prompt("Enter your gender");

if(gender == "male")
{
    alert("Good Morning Sir");
}

else if(gender == "Male")
{
    alert("Good Morning Sir");
}

else if(gender == "female")
{
    alert("Good Morning Maam");
}

else if(gender == "Female")
{
    alert("Good Morning Maam");
}


// Q3

var TrafficColor = prompt("Enter Road traffic Colour");

if(TrafficColor == "red")
{
    alert("Must Stop")
}

else if(TrafficColor == "Red")
{
    alert("Must Stop")
}

else if(TrafficColor == "Yellow")
{
    alert("Ready to Move")
}

else if(TrafficColor == "yellow")
{
    alert("Ready to Move")
}

else if(TrafficColor == "Green")
{
    alert("Move Now")
}

else if(TrafficColor == "green")
{
    alert("Move Now")
}


// Q4

var fuel = prompt("Please enter a remaining Fuel in car" , "10litres");
if(fuel <= "0.25liters"){
    alert("Please refill the fuel in your car")
}

else{
    alert("Please enter a correct value")
}


// Q5

// a.var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

//ANSWER // 
// Displayed

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//ANSWER // 
// NOT Displayed




//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

//ANSWER // 
// NOT Displayed



// if (c === 13){
// alert("condition 2 is true");
// }

//ANSWER // 
//  Displayed

// if (++c < 14){
// alert("condition 3 is true");
// }
//ANSWER // 
// NOT Displayed

// if(c === 14){
// alert("condition 4 is true");
// }
//ANSWER // 
//  Displayed


// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//ANSWER // 
//  Displayed

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//ANSWER // 
//  Displayed


// Q6


var sub1 = parseInt(prompt("Enter Subject 1 Mark"));
var sub2 = parseInt(prompt("Enter Subject 2 Mark"));
var sub3 = parseInt(prompt("Enter Subject 3 Mark"));
var totalMarks = parseInt(prompt("Enter Total MArks"));
var obtMarks = sub1 + sub2 + sub3 ;
var per = obtMarks / totalMarks *100;
if(per>=80 && per<=100){
    document.write(`Total Marks : ${totalMarks} <br> 
                    Marks Obtained : ${obtMarks} <br>
                    Percentage : ${per} <br>
                    Grade : A-One <br>
                    Remarks : Excellent`)
}
else if(per>=70 && per<=80){
    document.write(`Total Marks : ${totalMarks} <br> 
                    Marks Obtained : ${obtMarks} <br>
                    Percentage : ${per} <br>
                    Grade : A <br>
                    Remarks : Good`)
}
else if(per>=60 && per<=70){
    document.write(`Total Marks : ${totalMarks} <br> 
                    Marks Obtained : ${obtMarks} <br>
                    Percentage : ${per} <br>
                    Grade : B <br>
                    Remarks : You need to improve`)
}
else if(per>=00 && per<=60){
    document.write(`Total Marks : ${totalMarks} <br> 
                    Marks Obtained : ${obtMarks} <br>
                    Percentage : ${per} <br>
                    Grade : Fail <br>
                    Remarks : Sorry`)
}
else{
    alert("Please enter a correct Values")
}


// Q7


var secretNum = 8;
var userNum = parseInt(prompt("Enter a scret Number" , "Range 1 to 10"))
if(userNum === secretNum){
    alert("Bingo! Correct answer")
}        

else if(userNum === ++secretNum){
    alert("Close enough to the correct answer")
}
else{
    alert("Please enter a correct number")
}


// Q8


var num = parseInt(prompt("Please enter a number"));
var divisible = num % 3;
if(divisible === 0 ) {
    alert("Your Number is divisible by 3")
}
else{
    alert("Your Number is not Divisible by 3")
}


// Q9


var number = parseInt(prompt("Please enter a Number"));
var even = number % 2 ;
if(even === 0){
    alert("YOUR NUMBER IS EVEN")
}
else{
    alert("YOUR NUMBER IS ODD")
}


// Q10

var temp = parseInt(prompt("Enter weather Temperation"));
if(temp>=40 ){
    alert("It is too hot outside. ")
}        
else if(temp>=30 && temp <=40){
    alert("The Weather today is Normal.")
}
else if(temp>=20 && temp<=30){
    alert("Today’s Weather is cool.")
}
else if(temp>=10 && temp<=20){
    alert("OMG! Today’s weather is so Cool.")
}


// Q11


var num1  = parseInt(prompt("Enter Number 1"));
var opt  = prompt("Enter Operator");
var num2  = parseInt(prompt("Enter Number 2"));
if(opt === "+" ){
    alert( `${num1} + ${num2} = ${(+num1) + (+num2)}` )
}
else if(opt === "-" ){
    alert( `${num1} - ${num2} = ${num1 - num2}` )
}
else if(opt === "*" ){
    alert( `${num1} x ${num2} = ${num1 * num2}` )
}
else if(opt === "-" ){
    alert( `${num1} / ${num2} = ${num1 / num2}` )
}
else if(opt === "%" ){
    alert( `${num1} % ${num2} = ${num1 % num2}` )
}


// ***********************************Chapter 12 - 13***********************************************

// Q1

var stringg = "A"
var code = stringg.charCodeAt()
if(code === 65){
    alert("VARIABLE A AND ASCII CODE IS 65")
}    
else{
    alert("no")
}


// Q2


var val1 = parseInt(prompt("Enter Value 1: "));    
var val2 = parseInt(prompt("Enter Value 2: "));    
if(val1 > val2 ){
    alert("Value 1 is Greater:" + " " + val1)
}
else if(val1<val2){
    alert("Value 2 is Greater:" + " " + val2)
}
else if(val1 == val2){
    alert("Boht values are equal")
}
else{
    alert("please enter a correct value ")
}


// Q3


var value = parseInt(prompt("Enter a number"));
if(value > 0){
    alert("your number is positive")
}    

else if(value < 0){
    alert("your number is negative")
}    
else if(value == 0){
    alert("your number is zero")
}    
else{
    alert("Please enter a correct number")
}


// Q4


var vowel = prompt("Enter a Character");

vowel.toLowerCase()

if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
    alert("Vowel Found")
}

else{
    alert("false")
}


// Q5


var userPassword = prompt("Enter your password");

var password = "faraz12345";

if(userPassword !== "")
{
    if(userPassword === password)
{
        alert("Correct! The password you entered matches the original PAssword")
    }
    else
{
        alert("YOur password is not match")
    }
}
else
{
    alert("please enter a password")
}


// Q6


///ERROR///
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
///FIX///
// var greeting;
// var hour = 13;
// if (hour < 18) {  greeting = "Good day";}

// else{ greeting = "Good evening";
// }


// Q7


var time = parseInt(prompt("Please Enter Time :" ,"Format like: 1900"));
if(time >= 0000 && time <= 1200){
    alert( '"Good morning!"')
}    
else if(time>=1200 && time<=1700){
    alert(' "Good afternoon!" ')
}
else if(time>=1700 && time<=2100){
    alert(' "Good evening!" ')
}
else if(time>=2100 && time<=2359){
    alert(' "Good night!" ')
}
else{
    alert("Please enter a correct time")
}