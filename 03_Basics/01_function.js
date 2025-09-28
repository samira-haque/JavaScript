function myName(){
    console.log("s");
    console.log("a");
    console.log("i");
    console.log("r");
    console.log("a");
}

// myName()

// function addTwoNumbers(number1,number2){

//     console.log(number1+number2);
// }

//addTwoNumbers(4,9)
// addTwoNumbers(4,null)

function addTwoNumbers(number1,number2){

    // let result = number1 +  number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,5)

console.log("result: ", result);


function logInUserMessage(username)
{
    if(!undefined){
    // if(username === undefined){
        console.log("Please Enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("samira"))
// console.log(logInUserMessage(""))
console.log(logInUserMessage())




