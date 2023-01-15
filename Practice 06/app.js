// *********************************Chapter 21 - 25******************************************

// Q1


// var firstUserName = prompt("Enter first Name");

// var LastUserName = prompt("Enter Last Name"); 

// var fullName = `${firstUserName} ${LastUserName}`;

// alert(fullName);


// Q2


// var userInput = prompt("Your favourite phone model is");

// document.write(`My favorite phone model is: ${userInput} <br><br> Length of String: ${userInput.length`);


// Q3


// var word = 'Pakistani';

// document.write(`String: Pakistani <br> Index of 'n': ${word.indexOf('n')}`);


// Q4


// var word = 'Hello World';

// document.write(`String: ${word} <br> Last Index of 'l': ${word.lastIndexOf('l')}`);


// Q5


// var word = 'Pakistani';

// document.write(`String: ${word} <br> Character at index 3: ${word.charAt(3)}`);


// Q6


// var firstUserName = prompt("Enter first Name");

// var LastUserName = prompt("Enter Last Name"); 

// var fullName = firstUserName.concat(" " + LastUserName);

// alert(fullName);


// Q7


// var city = 'Hyderabad';

// var replace = city.slice(5);

// var replace2 = `Islam${replace}`

// alert(replace2)


// Q8


// var message = "Ali and Sami are best friends. They play cricket and football together."

// var replace = message.replace(/and/g,"&");

// document.write(`<h3>${replace}</h3>`)


// Q9

// var value = "452";

// document.write(`Value: ${value} <br> Type: ${typeof value} <br><br>`);

// var value02 = parseInt("452");

// document.write(`Value: ${value02} <br> Type: ${typeof value02}`);


// Q10


// var userInput = "peanuts";

// document.write(`User Input: ${userInput} <br> <br> Upper Case: ${userInput.toUpperCase()}`);


// Q11


// var userInput = "javascript";

// document.write(`User Input: ${userInput} <br> <br> Title Case: ${userInput.slice(0,1).toUpperCase()}${userInput.slice(1,userInput.length).toLowerCase()}`);


// Q12

// var num = 35.36;

// var replaceDot = num.toString().replace(".", "")

// document.write(`Number: ${num} <br> Result: ${replaceDot}`)


// Q13

// var userInput = prompt("Enter UserName");

// for(var i = 0; i < userInput.length;i++){
//     if(userInput[i].charCodeAt === 33 || userInput[i].charCodeAt() === 44 || userInput[i].charCodeAt() === 46 || userInput[i].charCodeAt() === 64){
//         alert("Please enter a valid userName")
//     }
// }

// document.write(`${userInput}`);


// Q14


// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchItem = prompt("What you want to order:").toLowerCase();

// var indeNum = bakeryItems.indexOf(searchItem);

// console.log(indeNum);

// if(bakeryItems.indexOf(searchItem) !== -1)
// {
//     document.write(`${searchItem} is Available at Index ${bakeryItems.indexOf(searchItem)} in our Bakery`)

// }

// else
// {
//     document.write(`${searchItem} is Not Available in our Bakery`)
// }


// Q15


// var password = prompt("Enter Password!");

// var pass_validation = /^[a-zA-Z0-9!$@]{1,}$/;

// if(password !== "")
// {
//         if(!password.match(pass_validation))
//         {
//                 alert("Please enter a valid Password")
//         }
//         else
//         {
//                 alert("Password is Correct")
//         }

// }

// else{
//         alert("Please fill up password field")
// }


// Q16


// var university = "University of Karachi";

// var arr = university.split("");

// document.write(arr);

// document.write(arr.join("<br />")  )


// Q17


// var user = prompt("enter word");
// document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.charAt(user.length-1))
// document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.slice(user.length-1))



// Q18


// var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var count = string.match(/the/g)
// console.log(count.length)




// **************************************Chapter 31 - 34********************************************


// Q1


// document.write(`${new Date()}`);


// Q2

// var now  = new Date().toString().slice(4,7);

// document.write(`Current Month: ${now}`);


// Q3

// var input = prompt("What day is today");

// var correct = input.slice(0,3);

// document.write(`<h2>Today is: ${ correct}</h2>`)


// Q4


// var current = new Date().toString().slice(0,3);

// if(current === "sat" || current === "sun"){
//     alert("Its a Fun-Day")
// }
// else{
//     alert("Boring Day")
// }


// Q5


// var current = new Date().getDate();

// if(current <=15)
// {
//     alert("First Fifteen Days of th Month")
// }
// else
// {
//     alert("Last days of the month")
// }


// Q6


// var now  = new Date()
// var milis = now.getTime()
// var min = now / (1000 * 60*60);
// document.write(now + " <br>" + milis + "<br>" + min)


// Q7


// var now = new Date().getHours()
// if(now >= 0 && now < 12 ){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// console.log(now)


// Q8

// var nows = new Date("December , 31 2020")
// document.write(nows)  


// Q9


// var ramzanDate = new Date("June 18 ,2015");
// var now = new Date();
// var miliram = ramzanDate.getTime();
// var nowmili = now.getTime();
// var differ =  nowmili - miliram;
// var totalDays = differ / (1000*60*60*24)
// totalDays = Math.floor(totalDays)
// document.write(`${totalDays} Days have passed since 1st Ramzan, 2015`);


// Q10

// var now = new Date("Dec 1 , 2015");
// var nowmili = now.getTime()
// var dated = new Date("Dec 25 ,2015").getTime();
// var differ = dated  - nowmili  
// var totalSec = differ / (1000)
// totalSec = Math.floor(totalSec)
// document.write(`on reference Date ${now} <br> ${totalSec} Seconds had passed since beginning of 2015 `)


// Q11

// var now = new Date();
// var oneHours = now.setHours()
// document.write(now)    
// document.write(oneHours)    

// Q12


// var now = new Date()
// var year = new Date()
// year.setFullYear(1915)
// alert(`TODAY : ${now} \n 100 years Back : ${year}`)
// console.log(year);


// Q13

// var age = +prompt("Your age ?");
// var now = new Date().getFullYear()
// var ageCalc = now - age
// document.write(`YOUR Age is: ${age} <br>
//                 Your Birth Year is: ${ageCalc}`)



// Q14

// var dated = new Date();
// var month = dated.getMonth();
// var ConsumerName = "ABC"
// var unitNum = 410;
// var chargesPerUnit = 16;
// var netAmount = unitNum * chargesPerUnit;  
// var lateCharges = 350 ; 
// var grossAmount = netAmount + lateCharges;
// document.write(`<b>K - ELECTRIC BILL </b> <br />
//                 Customer Name : ${ConsumerName} <br>
//                 Month : ${month} <br>
//                 Numbers of units : ${unitNum} <br>
//                 Chages per unit: ${chargesPerUnit} <br>
//                 <br>
//                 <br>
//                 Net Amount : (With in due Date: ) ${netAmount} <br>
//                 Late Charges : ${lateCharges} <br>
//                 Groos Amount : ${grossAmount}`)




