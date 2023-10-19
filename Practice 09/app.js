var obj = {
    name:"faraz",
    age:22,
    email:"faraz@gmail.com",
    address:{
        street:"A",
        postalCode:75950,
        city:"karachi",
        country:"pakistan"
    },
    getName:function()
    {   
        return this.name
    }
}

console.log("constructor" in obj)


console.log(obj.hasOwnProperty("constructor"))


obj.courses = ["HTML5","CSS3","JS"];


obj.courses.push("REACT JS")


console.log(obj.courses[0])


console.log(obj)

for(var key in obj)
{
    for(var val in obj[key])
    console.log(obj[key][val])
}


console.log(obj.getName());

console.log("email" in obj)

delete obj.name;
console.log(obj)


var obj1 = {
}


console.log(obj1.name = "faraz");

console.log(obj1)


var obj2 = {
    users:{
        user1:{
            name: "Muhammad Faraz",
            email: "Maryse_Lubowitz49@gmail.com",
            postCode: "79465",
            city: "Lancaster",
            country: "Burundi",
            phoneNumber: "536.734.2063",
            favouriteQuote: "Id harum sit odio quia vitae provident."
        },
        user2:{
            name: "Ahsan Khan",
            email: "Ahsan_Khan49@gmail.com",
            postCode: "79465",
            city: "Lancaster",
            country: "Burundi",
            phoneNumber: "536.734.2063",
            favouriteQuote: "Id harum sit odio quia vitae provident."
        },
        user3:{
            name: "Tony Stark",
            email: "Tony_Stark49@gmail.com",
            postCode: "79465",
            city: "Lancaster",
            country: "Burundi",
            phoneNumber: "536.734.2063",
            favouriteQuote: "Id harum sit odio quia vitae provident."
        }
    },
    users2:{}
}

console.log(obj2.users.user2)

var input = "users";
var input2 = "user1";

console.log(obj2[input])

for(var users in obj)
{
    for(var user in obj2[users]){
        console.log(obj2[users][user].email)    
    }
}    
var user = "users";

console.log(obj2[user])



function Student(name,age,course,email)
{
    this.name = name
    this.age = age
    this.course = course
    this.email = email

}

Student.prototype.getName = function(){
    return this.name
}

var std1 = new Student("faraz",22,"HTML","faraz@gmail.com");
var std2 = new Student("ahsan",25,"CSS","ahsan@gmail.com");
var std3 = new Student("iqbal",18,"JS","iqbal@gmail.com");
var std4 = new Student("aslam",30,"HTML","aslam@gmail.com");
var std5 = new Student("farooq",27,"HTML","farooq@gmail.com");
var std6 = new Student("ahmed",20,"HTML","ahmed@gmail.com");
var std7 = new Student("basit",26,"CSS","basit@gmail.com");


console.log(std1,std2,std3,std4,std5,std6,std7)

console.log(std1)

function para()
{
    var text = "My name is Muhammad Faraz..";
    var anchor = document.getElementById("link");
    anchor.innerHTML = text;
}


function checkForLastName() {
     if (document.getElementById("lastNameField").value.length.trunc() === 0) {
     alert("Please enter your last name");
     return false;
     }
}

 function validateRadios() 
 {
     var radios = document.getElementsByName("r1");

     console.log(radios);

     for (var i = 0; i < radios.length; i++) 
     {
        if (radios[i].checked) 
        {
             return true;
        }
  }
     alert("Please check one.");
     return false;
}

try{
    setTimeout(function(){
        console.log("please wait..." )
    },1000)
    
    
    setTimeout(function(){
        console.log("Fetching data..." )
    },3000)
    
    setTimeout(function(){
        console.log("Compiling data from database server..." );
    },5000)
    
    
    setTimeout(function(){
        console.log(" data is successfully send..." )
    },7000);
    
    setTimeout(function(){
        aler("Welcome User..")
    },8000);
    
}

catch(err){
    console.log(err)
}


try{
    setTimeout(function(){
        aler("Hello World...")
    }, 2000);
}
catch(err){
    console.log(err)
}

function greetWorld() {
    try{
        var greeting = "Hello world!";
        aler(greeting);
    }
    catch(err){
       throw "Error occur..";
    }
     }

     greetWorld()


try {
    aler("Welcome guest!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err;
  }