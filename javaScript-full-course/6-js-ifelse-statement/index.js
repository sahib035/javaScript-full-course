//chapter 6 if statement

//simple example
// const badal = true;
// if(badal){
//     console.log("umberalla uthaw");
// }else{
//     console.log("no tention");
// }

// driving licience

// const userAge = prompt("enter your age");
// if(userAge >= 18){
//     console.log("you are eligible for licience");
// }else{
//     console.log("your age is less than 18 years you are not eligible for licience");
// }

// peshawar ZU system

// const cardBalance = prompt("please scan your caed");

// if(cardBalance >= 55){
//     console.log("welcome to peshawar ZU system");
// }
// if(cardBalance < 55){
//     console.log("please recharge your card ");
// }

    const username = prompt("enter your name");
    const usernumber = prompt("enter your number");
    if(usernumber === 0){
        console.log(`${username} aff nay 0 enter kia`);
    }
    if(usernumber < 0){
        console.log(`${username} aff nay naggative number enter kia`);
    }
    if(usernumber > 0){
        console.log(`${username} aff possitive number enter kia`)
    }