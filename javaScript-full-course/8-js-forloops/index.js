//for loop in javascript 


// const cleanestcities = ["peshawar","multan","lahore","sialkoot","karachi"];
// const citytocheck = prompt("enter your city:");
// for(i = 0 ; i < cleanestcities.length; i++ ){
//     if(citytocheck === cleanestcities[i]){
//         alert("it is one of the cleanest city");
//     }else{
//         alert("city not found");
//     }
// }


//How forloop work in js

//totalIteration :5(0,1,2,3,4,)
// citytocheck = "karachi"

//Iteration0:
//cityindex:0
//cityindex < cleanestcity.lenght -> 0 < 5 (True)
//citytocheck === cleanestcity[cityindex]-> "karachi" === cleanestcity[0] -> "karachi" === "peshawar" -> (False)

//Iteration1:
//cityindex:1
//cityindex < cleanestcity.lenght -> 1 < 5 (True)
//citytocheck === cleanestcity[cityindex]-> "karachi" === cleanestcity[1] -> "karachi" === "multan" -> (False)

//Iteration2:
//cityindex:2
//cityindex < cleanestcity.lenght -> 2 < 5 (True)
//citytocheck === cleanestcity[cityindex]-> "karachi" === cleanestcity[2] -> "karachi" === "lahore" -> (False)

//Iteration3:
//cityindex:3
//cityindex < cleanestcity.lenght -> 3 < 5 (True)
//citytocheck === cleanestcity[cityindex]-> "karachi" === cleanestcity[3] -> "karachi" === "sialkot" -> (False)

//Iteration4:
//cityindex:4
//cityindex < cleanestcity.lenght -> 4 < 5 (True)
//citytocheck === cleanestcity[cityindex]-> "karachi" === cleanestcity[4] -> "karachi" === "karachi" -> (True)

// After the true condition execute the alert will be display (that this one city is cleanest city)


// On this process loop work 