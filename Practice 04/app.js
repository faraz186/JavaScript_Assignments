// var gender= prompt("Enter your gender");

// var age = prompt("Enter your age");

// var ticketNumber = 0;

// if(gender == "male")
// {
//     if(age > 20)
//     {
//         ++ticketNumber;
//         console.log("Allowed ,"  + ticketNumber)
//     }
//     else
//     {
//         console.log("not allowed")
//     }
// }


// ****************************Arrays***************************

// var cities = ["Karachi","Lahore",4,"Sialkot","KPK","Hyderabad",true,"Islamabad",false,1000];

// console.log(cities);

// console.log(cities[2],cities[6],cities[9]);

// -----------------------------------------------------------------------

// var nestedArrays = ["Muree",45,[["Karachi"],true,45,["Rawalpindi",true,100,"China"]],false];


// console.log(nestedArrays[2][3][0]);


// var cities = ["karachi","islamabad","kpk","Lahore",12,true];

// cities.pop();

// cities.push("false");

// cities.shift();

// cities.unshift("Rawalpindi");

// // cities.splice(4,2);

// cities.splice(5,1,"Quetta",100);

// console.log(cities);


// var nestedArrays = ["Muree",45,[["Karachi"],true,45,["Rawalpindi",true,100,"China"]],false];

// // nestedArrays.splice(2,7,"Islamabad");

// // nestedArrays.splice(2,0,"Hunza");

// nestedArrays[2][0].splice(1,0,"Canada");

// console.log(nestedArrays);


// ******************************For loop************************************

var cityFound = "no";

var cleanestCity = ["Canada","America","Turkey","Switzerland"];

var cityToCheck = prompt("Enter your country");

for(var i = 0;i <=3;i++){
    if(cityToCheck == cleanestCity[i]){
        console.log("It is one of the cleanest country");
        cityFound = "yes";
        break;
    }
    // else{
    //     console.log("Not Cleanest City")
    // }
}

if(cityFound == "no")
{
    console.log("No Found")   
}
