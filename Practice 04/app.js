// *******************************************chapter 14 - 16************************************************

// Q1 - Q2

// var StudentName = ["Ashhad","Irfan","faraz","Iqra","kashif"];

// Q3

// var strings = ["Qualification","15","Pencil","Whiteboard","Watch","mobile"];

// Q4

// var number = [12,50,144,52,10,87,60,100];

// Q5

// var boolean = [true,false,false,true,false];

// Q6

// var mixedArray = ["Karachi",12,"Lahore",true,false,"Islamabad",100,false];

// Q7

// var Qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];

// document.write("<h1>Qualifications:</h1>"+ `<ol>
// <li>${Qualifications[0]}</li>
// <li>${Qualifications[1]}</li>
// <li>${Qualifications[2]}</li>
// <li>${Qualifications[3]}</li>
// <li>${Qualifications[4]}</li>
// <li>${Qualifications[5]}</li>
// <li>${Qualifications[6]}</li>
// <li>${Qualifications[7]}</li> </ol>` );


// Q8


// var StdName = ["Michael","John","Tony"];

// var StdMarks = [320,230,480];

// var per = [StdMarks[0]/500*100, StdMarks[1]/500*100, StdMarks[2]/500*100];

// for(var i = 0;i<StdMarks.length;i++)
// {
//     document.write("<br>" + "Score of " + StdName[i] + " " + "is " + StdMarks[i] + " " + "percentage: " + per[i] + "%" + "<br>");
// }


// Q9


// var colors = ["red","golden","green","blue","black","orange","purple"];

// document.write("<h1>Initialize Colors</h1> " + "<br>");

// for(var i = 0; i < colors.length;i++)
// {
//     document.write(`<h3>${colors[i]}</h3>`);
// }


// Q9 (a)

// document.write("<br>");

// document.write("<h1>Add Beginning to an array</h1> ");

// var userInput = prompt("what color you want to add to the beginning of the array");

// colors.unshift(userInput);

// document.write( `<h3>${colors}</h3>` + "<br>");


// Q9 (b)

// document.write("<br>");

// document.write("<h1>End of an array</h1> ");

// var userInput = prompt("what color you want to add to the end of the array");

// colors.push(userInput);

// document.write( `<h3>${colors}</h3>` + "<br>");


// Q9 (c)

// document.write("<br>");

// document.write("<h1>Two more colors add in the Beginning of an array</h1> ");

// var userInput = prompt("Two more colors add in the Beginning of an array");

// colors.unshift(userInput);

// document.write( `<h3>${colors}</h3>` + "<br>");


// Q9 (d)

// document.write("<br>");

// document.write("<h1>Del first color of an array</h1> ");

// var userInput = prompt("what color you want first del beginning of the array");

// colors.shift(userInput);

// document.write( `<h3>${colors}</h3>` + "<br>");


// Q9 (e)

// document.write("<br>");

// document.write("<h1>Del last color of an array</h1> ");

// var userInput = prompt("what color you want last del end of the array");

// colors.pop(userInput);

// document.write( `<h3>${colors}</h3>` + "<br>");


// Q9 (f)

// document.write("<br>");

// document.write("<h1>Add Position to add color of an array</h1> ");

// var userInput = prompt("which position did you add color name of an array");

// var StartingPoint = +prompt("Enter Starting Point");

// var delArr = +prompt("Enter del Colors");

// colors.splice(StartingPoint,delArr,userInput);

// document.write( `<h3>${colors}</h3>` + "<br>");


// Q9 (g)

// var qts = prompt("You want to delete a colors (yes/no)")
// if(qts === "yes"){
//     var qts2 = parseInt(prompt("how many color s you want to delete")) 
// }
// else{
//     alert("as your wish")
// }
// colorName.splice(qts2 , qts2)
// document.write(colorName)


// Q10

// var Scores = [320,230,480,120];

// document.write("<h1>Ordered Scores of Students:</h1> " + `<h2>${Scores.sort()}</h2>`)


// Q11

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar",];

// var selectedCities = cities.slice(2,4);

// document.write("<h1>Cities List</h1>" + `${cities}` + "<h1>Selected List Here</h1>" + `${selectedCities}`);


// Q12

// var arr = ["This","is","my","cat"];

// var join = arr.join(" ");

// document.write("<h2>Array</h2>" + `${arr}` + "<br>" + "<h2>String</h2>" + join);


// Q13

// var devices = ["keyboard","mouse","Printer","monitor"];

// document.write("<h2>Devices</h2>" + devices + 

//     `<h2>Out:</h2> ${devices[0]}
//     <h2>Out:</h2> ${devices[1]}
//     <h2>Out:</h2> ${devices[2]}
//     <h2>Out:</h2> ${devices[3]}` );


// Q14


// var devices = ["keyboard","mouse","Printer","monitor"];

// document.write("<h2>Devices</h2>" + devices + 

//     `<h2>Out:</h2> ${devices[3]}
//     <h2>Out:</h2> ${devices[2]}
//     <h2>Out:</h2> ${devices[1]}
//     <h2>Out:</h2> ${devices[0]}` );


// Q15

// var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier","LG"];

// document.write("<select>");

// for(var i = 0; i < phone.length; i++){
//     document.write(`<option>${phone[i]}</option>`)
// }

// document.write("</select>")


// *******************************************chapter 17 - 20************************************************

// Q1

// var multiArray = new Array(3);
// multiArray[0] = new Array(0 , 1 , 2 , 3)
// multiArray[1] = new Array(1 , 0 , 1, 2)
// multiArray[2] = new Array(2 , 1 , 0 , 1)
// document.write(multiArray[0].join(" ") + "<br />")
// document.write(multiArray[1].join(" ") + "<br />")
// document.write(multiArray[2].join(" ") + "<br />")


// Q2


// var digits = [1,2,3,4,5,6,7,8,9,10];

// for(var i =0;i<digits.length;i++)
// {
//     document.write("<br>" + `${digits[i]}`);
// }


// Q3


// var tableNumber = +prompt("Enter a number to show its multiplication table");

// var tableLength = +prompt("Enter length multiplication table");

// document.write(`Multiplication table of ${tableNumber} <br /> length ${tableLength}  <br /> <br />`);

// for(var i = 1 ; i <= tableLength; i++)
// {
//     document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br />`)
// }


// Q4


// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(var i = 0 ; i < fruits.length ; i++)
// {
//     document.write(`<br> Element at index ${i} is ` + fruits[i]);
// }


// Q5


// document.write("<h1>Counting</h1> <br />");

// for(var i = 1; i<=15;i++)
// {
//     document.write(i, ",");
// }

// document.write("<h1>Reverse Counting</h1> <br />");

// for(var a = 10; a>=1;a--)
// {
//     document.write(a, ",");
// }

// document.write("<h1>Even</h1> <br />");

// for(var b = 0; b<=20;b=b+2)
// {
//     document.write(b, ",");
// }


// document.write("<h1>Even</h1> <br />");

// for (var c = 0; c <=20; c = c + 3) 
// {
//         document.write(c + ", ")
// }



// document.write("<h1>Series</h1> <br />");

// for (var d = 2; d <=20; d = d + 2) 
// {
//         document.write(d + "k" + ", ")
// }


// Q6


// var A = ["cake","apple pie","cookie","chips","patties"];

// var userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/maam?").toLowerCase();

// var boolean = "false";

// for(var i = 0 ; i<A.length;i++)
// {
//     if(userInput === A[i])
//     {
//         console.log(`${userInput} is avaliable at index ${i} in our bakery.`);
//         boolean = "true"
//     }
// }
// if(boolean === "false")
// {
//     console.log(`We are sorry. ${userInput} is  not Available  in our Bakery`)
// }


// Q7


// var arr = [20, 50, 40, ];
// var largestt = Math.max(...arr)
// console.log(largestt)
// var largest = 0;
// for (var i = 0; i < arr.length; i++) {
//         if(arr > largest){
//                 var largest = arr[i]
//         }
// }
// console.log(largest)


// var arr = [24, 53, 78, 91, 12 ]
// var largest = 0;
// for (var i = 0; i < arr.length; i++){
//         if(arr[i] > largest ){
//                 largest = arr[i]
//         }
// }
// console.log(largest)


// Q8


// var arr2 = [24, 53, 78, 91, 12];
// var smallest = arr2[0] ;
// for(var a = 0 ; a<arr2.length ; a++){
//         if( smallest > arr2[a]){
//                 var smallest = arr2[a]
//         }
// }
// console.log(smallest)


// Q9

// for(var i = 5; i <=100;i=i+5){
//     document.write(i, ", ")
// }
