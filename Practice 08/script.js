// ***********************************Chapter 43 - 48*******************************************

// Q1

// function Click(){
//     alert("This is a Link");
// }

// Q2

// function Images(){
//     alert("Thank you for purchasing am item for us!")
// }

// function StdRecords(){
//     `<table><tr></tr></table>`
// }

// var main_content = document.getElementById("main-content");
// console.log(main_content)

///////=============PART 2 ======//////
// var childNodes = main_content.getElementsByTagName("p")
// // console.log(childNodes)
// for(var i = 0 ; i < childNodes.length ; i++){
//     document.write(childNodes[i])
// }


///////=============PART 3 ======//////

// var className = main_content.getElementsByClassName("render");
// for(var i = 0 ; i < className.length ; i++){
//     document.write(className[i].innerHTML + "<br>")
// }    


///////=============PART 4 ======//////

// var inputVAlue = document.getElementById("first-name");
// inputVAlue.value = "Jaffar ";



///////=============PART 5 ======//////


// var lastNameVal = document.getElementById("last-name");
// var emailVal = document.getElementById("email");
// lastNameVal.value = "Aman ";
// emailVal.value = "amanjaffar50@gmail.com"


///////=============QUESTION # 02 ======//////

///////=============PART 1 ======//////
// var formContent = document.getElementById("form-content");
//     console.log(formContent.nodeType)

///NODE TYPE IS 1 ////

///////=============PART 2 ======//////

// var lastName = document.getElementById("lastName");
// console.log( "lastName node type ==>>   " + lastName.nodeType)

// var lastNameChild = lastName.childNodes
// for(var i = 0 ; i<lastNameChild.length ; i++){
//     console.log(lastNameChild[i].nodeType)

// }

///////=============PART 3 ======//////
// var lastName = document.getElementById("lastName");
// console.log(lastName.childNodes)   


///////=============PART 4 ======//////
// var main_content = document.getElementById("main-content");
// console.log(main_content.firstChild)
// console.log(main_content.lastChild)

///////=============PART 5 ======//////
// var lastName = document.getElementById("lastName");
// console.log(lastName.nextSibling)
// console.log(lastName.previousSibling)

///////=============PART 6 ======//////

// var email = document.getElementById("email");
// console.log(email.parentNode)
// console.log(email.parentNode.nodeType)