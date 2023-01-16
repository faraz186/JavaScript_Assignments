// **********************************Chapter 35 - 38*****************************************

// Q1

// function Current()
// {
//     var date = new Date();
//     document.write(date);
// }

// Current();


// Q2


// function greetings(name1,name2)
// {
//     alert(name1 + "  "  + name2);

// }

// var Firstinput = prompt("Enter your first Name");

// var Secondinput = prompt("Enter your Last Name");

// greetings(Firstinput,Secondinput);


// Q3


// function Sum(num1,num2)
// {
//     var res = num1 + num2;

//     return res;

// }

// var Firstinput = +prompt("Enter first Name");

// var Secondinput = +prompt("Enter Second Name");

// var add = Sum(Firstinput,Secondinput);

// alert(add);


// Q4


// function calc(num1 , opt , num2 )
// {
//         if(opt === "+")
//         {
//             return num1 + num2 
//         }
//         else if(opt === "-")
//         {
//             return num1  - num2 
//         }
//         else if(opt === "*")
//         {
//             return num1  * num2 
//         }
//         else if(opt === "/")
//         {
//             return num1  / num2 
//         }
//         else
//         {
//             return "Enter Correct operator"
//         }
// }    
// var num1 = +(prompt("enter number 1"));
// var opt = prompt("enter opt");
// var num2 = +(prompt("enter number 1"));

// var add = calc(num1 , opt , num2);
// document.write(`Number 1: ${num1} <br> Operator ${opt} <br> Numeber 2: ${num2} <br> Calculation : ${add} `)


// Q5


// function Square(num1)
// {
//     var square = num1 * num1;

//     return square;
// }

// var num1 = +prompt("Enter Square value");

// var res = Square(num1);

// alert(res);


// Q6


// function factorial(num)
//  {
//      var sum = 1;
//     for(var i = num ; i>= 1 ; i-- )
//     {
//             sum = sum * i
//     } 
//         return sum
// }

// var funValue = factorial(5);

// document.write("Factorial Value: " + " " + funValue);


// Q7


// function Counting(numOne,numTwo)
// {
//     for(var i = numOne;i<=numTwo;i++)
//     {
//         document.write(`<br> ${i} <br>`)
//     }

// }

// var startPoint = +prompt("Enter Starting Point");

// var EndPoint = +prompt("Enter Ending Point");

// Counting(startPoint,EndPoint)


// Q8


// function Hypotenuse(val1,val2)
// {   
//     return Math.sqrt(Math.pow(val1,2) + Math.pow(val2,2));

// }


// var base = +prompt("Enter base value");

// var perpendicular = +prompt("Enter perpendicular value");

// var result = Hypotenuse(base,perpendicular);

// document.write(`BASE: ${base} <br> PERPENDICULAR: ${perpendicular} <br> HYPOTENUSE: ${result}`);


// Q9


// function Rectangle(val1,val2)
// {   
//     var Area = val1 * val2;

//     return Area;

// }

// var width = +prompt("Enter Width Value");

// var height = +prompt("Enter height Value");

// var AreaOfRectangle = Rectangle(width,height);

// document.write(`Area of Rectangle: ${AreaOfRectangle}`);


// Q10


// function pali(str){
//     var re = /[\W]/g;
//     var lowerstr = str.toLowerCase().replace(re,"");
//     var reversestr = lowerstr.split("").reverse().join("");
//     return reversestr === lowerstr

// }   

// console.log(pali("madam"));


// Q11


// function Correct(para)
// {
//     var word = para.split(" ");

//     var arr1 = [];

//     for(var i = 0; i < word.length;i++)
//     {
//         arr1.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
//     }
//     return arr1.join(" ")

// }

// var line = prompt("Enter any line");

// document.write(Correct(line));


// Q12


// function length(letter)
// {

//     var word = letter.split(" ");

//     var arr = word[0];

//     for(var  i = 0 ; i<word.length ; i++)
//     {
//         if(arr.length < word[i].length)
//         {
//                 arr = word[i]
//         }
//     }

//     return arr
// }
// document.write(length("Web Development Tutorial "))


// Q13

// function letterCount(str , letter){
//     var count = 0;
//     for(var i = 0 ; i < str.length ; i++){
//         if(str.charAt(i) == letter){
//             count++
//         }
//     }


//     return count
// }
// var Userstring = prompt("Enter any String Word")
// var userChar = prompt("Enter any Word Character")
// var result = letterCount(Userstring ,userChar)
// document.write(`User Argument : ${Userstring}
//                 <br> User Letter : ${userChar} <br>
//                 word count: ${result}`);


// Q14


// function calcCircumference(radius){
//         var circumference = 2*(Math.PI * radius);
//         return circumference
// }
// function calcArea(radius){
//     var   area = Math.PI * (radius * radius)
//     return area
// }

// var circumferenceResult = calcCircumference(20).toFixed(3);
// var areaResult = calcArea(10).toFixed(3);

// document.write(`"The circumference is NN". ${circumferenceResult} <br>`)
// document.write(`"The area is NN". ${areaResult}`)

// console.log(calcArea(20))
// // console.log(calcCircumference(20))