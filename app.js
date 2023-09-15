// var firstName = prompt("Enter first name");
// var LastName = prompt("Enter last name");

// var fullname = "Mr. " +firstName + " " + LastName + "!";

// console.log(fullname)

// if(true)
// {
//     alert("Hello")
// }

// var kiyalanahai = prompt("kiya lana hai");
// var kg = 1;

// if(kiyalanahai === "dahi" )
// {
//     console.log("tw ley ana..")
// }

// else if(kiyalanahai === "doodh")
// {
//     console.log("chalo ley ana..")
// }

// else if(kiyalanahai === "bread")
// {
//     console.log("abey yr ley ana..")
// }

// else{
//     console.log("kuch bhi ley ana khali hath mut ana..")
// }

// var language = prompt("Enter language");

// if (language === "javascript") {
//   var city = prompt("Enter location");
//   if (city === "karachi") {
//     var exp = prompt("Enter you experience");
//     if (exp === "2 years") {
//       console.log("Congratulation you hired!!");
//     } else {
//       console.log("experience lao ja ke...");
//     }
//   } else {
//     console.log("karachi ajao...");
//   }
// } else {
//   console.log("javascript ja ke sikho...");
// }

// var FirstNum = +prompt("Enter first Value");
// var operator =  prompt("Enter operator");
// var SecondNum = +prompt("Enter Second Value");

// if(operator === "+")
// {
//     console.log(FirstNum + SecondNum);
// }

// else if(operator === "-")
// {
//     console.log(FirstNum - SecondNum);

// }

// else if(operator === "*")
// {
//     console.log(FirstNum * SecondNum);

// }

// else if(operator === "/")
// {
//     console.log(FirstNum / SecondNum);

// }


// var input = +prompt("Enter a number");
// var secNum = 7;

// if(input === secNum)
// {
//     alert("Bingo!! Guess number is correct")
// }
// else if(++input === secNum)
// {
//     alert("Almost there not far enough")
// }
// else{
//     alert("Incorrect guessing number...")
// }


// if(input % 2 === 0)
// {
//     console.log("Even Number",input)
// }
// else{
//     console.log("Odd Number",input);
// }

// if(input % 5 === 0)
// {
//     console.log(input + " is divisible by 5..")
// }
// else{
//     console.log(input + " is not divisible by 5..")
// }



// var firstSubject = +prompt("Enter first subject marks");
// var SecondSubject = +prompt("Enter Second subject marks");
// var ThirdSubject = +prompt("Enter third subject marks");
// var totalMarks = +prompt("Enter total marks of all subject");
// var obtMarks = firstSubject + SecondSubject + ThirdSubject;
// var perc = obtMarks / totalMarks * 100;

// document.write("<b><em><center>Marksheet of Final Exams..</center></b></em> <br> <br>" );

// if(perc >=80 && perc <=100)
// {
//     document.write("<b>Percentage: </b>" + perc + "<br>"+ "Grade: " + "A+" + "<br>" + "Remarks: " + "Congratulations to the Wonderful Response ")
   
// }
// else if(perc >=70 && perc <=80){
//     document.write("<b>Percentage: </b>" + perc + "<br>"+ "<b>Grade: </b>" + "A" + "<br>" + "<b>Remarks: </b>" + "Great Effort !!")
// }
// else if(perc >=60 && perc <=70){
//     document.write("<b>Percentage: </b>" + perc + "<br>"+ "<b>Grade: </b>" + "B" + "<br>" + "<b>Remarks: </b>" + "Great Progress!! ")
// }
// else if(perc >=50 && perc <=60){
//     document.write("<b>Percentage: </b>" + perc + "<br>"+ "<b>Grade: </b>" + "C" + "<br>" + "<b>Remarks: </b>" + "More Improvment!! ")
// }
// else if(perc >=40 && perc <=50){
//     document.write("<b>Percentage: </b>" + perc + "<br>"+ "<b>Grade: </b>" + "D" + "<br>" + "<b>Remarks: </b>" + "More Effort !!");
// }
// else if(perc >=33 && perc <=40){
//     document.write("<b>Percentage: </b>" + perc + "<br>"+ "<b>Grade: </b>" + "E" + "<br>" + "<b>Remarks: </b>" + "Not satisfy more effort and improvement ")
// }
// else if(perc >=0 && perc <= 33)
// {
//     document.write("<b>Percentage: </b>" + perc + "<br>"+ "<b>Grade: </b>" + "F" + "<br>" + "<b>Remarks: </b>" + "Sorry! Failed.. ")
// }


// var userInput = +prompt("Enter a number");

// document.write("<center>Generating Table..</center> <br>");
// for(var i = 1; i <=10;i++)
// {
//     document.write("<center>" + userInput + "x" + i + "=" + userInput * i + "<br>" + "</center>")
// }

// var userGender = prompt("Enter your gender");
// var userAge = +prompt("Enter your age");
// var userWeight = +prompt("Enter your weight");

// if(userGender === "male" || userAge>=20 && userWeight >=75)
// {
//     console.log("Come to our try out..")
// }
// else{
//     console.log("sorry..")
// }

// var arr1 = [12,14,15,19,20,21,22];


// var arr2 = ['faraz',"rabi","haseeb","Muhammad","faizan"];

// var returnValue = arr2.splice(1,0,"abc","xyz");

// console.log(returnValue)
// console.log(arr1.concat(arr2))

// var userInput = prompt('Enter where do you live??');

// var cities = ["karachi","islamabad","lahore","quetta"];
// var method = "no";
// for(var i = 0 ; i < cities.length;i++)
// {
//     if(userInput === cities[i])
//     {
//         method = "yes";
//         alert(cities[i] + " is a cleanest city...");
//         break;
//     }
    
// }

// if(method === "no")
// {
//     alert("It is not in the list")
// }


// for(var i = 0 ; i <= 10;i++)
// {
//     for(var j = 0 ; j < i ; j++)
//     {
//         document.write("*")
//     }
//     // document.write("<br>")
// }

// var word = prompt("Enter a word");
// var check = "";

// for(var i = word.length-1;i>=0;i--)
// {   
//     check = check + word[i];

// }

// if(check === word)
// {
//     console.log(word + " is a palindrome word..")
// }


// var name = "faraz";

// name = name.slice(0,2);

// console.log(name)


// var starting = +prompt("Enter starting position ");
// var deleted = +prompt("Enter how many elements did you deleted your original array ");
// var addingElement = prompt("Enter elements.. ");
// var addingElement1 = prompt("Enter elements.. ");
// var addingElement2 = prompt("Enter elements.. ");


// var arr = ["dog","elephant","cat","lion"];

// console.log(arr);

// arr.push(userInput,userInput1,userInput2);

// arr.unshift(userInput,userInput1,userInput2);

// arr.splice(starting,deleted,addingElement,addingElement1,addingElement2);

// console.log(arr);


// var arr = new Array("faraz",12,true,"abc");

// console.log(arr[0] = "xyz")


// var arr = ["Nokia","Apple","samsung","vivo","oppo","redmi"];

// document.write("<select>" + "<option>" + arr[0]  +"</option>"+
// "<option>" + arr[1]  +"</option>" +
// "<option>" + arr[2]  +"</option>"+
// "<option>" + arr[3]  +"</option>"+
// "<option>" + arr[4]  +"</option>"+
// "<option>" + arr[5]  +"</option>"+
// "</select>")


// var userInput = prompt("Enter where do you live...");

// var firstChar = userInput.slice(0,1).toUpperCase();

// var otherChar = userInput.slice(1).toLowerCase();

// var CWord = firstChar + otherChar;

// var city = ["Karachi","Lahore","Islamabad","Peshawar","Rawalpindi"] ;

// var flag = "no";

// for(var i = 0 ; i < city.length ; i++)
// {
//     if(CWord === city[i])
//     {
//         flag = "yes";
//     }
// }

// if(flag === "no")
// {
//     console.log("Match not Found...")
// }
// else{
//     console.log("Match Found...")
// }


// var arr = [["faraz","arsalan",100,true],["mustufa",200,false]];

// for(var i = 0; i < arr.length;i++)
// {
//     for(var j = 0 ; j < arr[i].length;j++)
//     {
//         console.log(arr[i])

//     }
// }


// var str = prompt("Enter any sentence..")
// var flag = false;
// for(var i = 0; i <str.length;i++)
// {
//     if(str.slice(i,i+2) === "  ")
//     {
//         flag = true;
//     }
// }

// if(flag)
// {
//     console.log("Double Space Acquired..")
// }
// else{
//     console.log("No Double Space..")

// }


// var text = "Directs the Center for Science and Culture at the Discovery Institute in Seattle. He returns to Uncommon Knowledge with Peter Robinson to discuss his newest book, Dr. Stephen Meyer Return of the God Hypothesis: Three Scientific Discoveries That Reveal the Mind Behind the Universe";

// for(var i = 0; i <text.length;i++)
// {
//     if(text.slice(i,i+17) === "Dr. Stephen Meyer")
//     {
//         text = text.slice(0,i) + "Doctor Muhammad Faraz" + text.slice(i+17);
//     }
// }
// console.log(text);



// var indexWord = text.indexOf("Dr. Stephen Meyer");
// var firstText = text.slice(0,indexWord);
// var replacingText = "Doctor Muhammad Faraz";
// var remainingText = text.slice(indexWord + 17);
// console.log(firstText + replacingText + remainingText);


// var text = "to be or not to be";

// console.log(text.indexOf("be"))

// console.log(indexWord);

// var text = "Directs the Center for Science and Culture at the Discovery Institute in Seattle. Dr. Stephen Meyer returns to Uncommon Knowledge with Peter Robinson to discuss his newest book, Dr. Stephen Meyer Return of the God Hypothesis: Three Scientific Discoveries That Reveal the Mind Behind the Universe";

// console.log(text.replaceAll("Dr. Stephen Meyer","Doctor Muhammad Faraz"));


// var number = Math.random() * 6 + 1;

// var finalChoice = Math.floor(number)

// console.log(finalChoice)


// var headUser = prompt("Enter head username");

// var tailUser = prompt("Enter tail username");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss)

// if(floor === 0)
// {
//     console.log(headUser + " win the toss...")
// }
// else
// {
//     console.log(tailUser + " win the toss..")
// }

// function submitForm()
// {
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");

//    if(name.value.trim() && email.value.trim())
//    {
//     console.log("name----> " , name.value);
//     console.log("email----> ", email.value);
//     name.value = "";
//     email.value = "";
//    }
//    else{
//     alert("Please Enter value..")
//    }

// }