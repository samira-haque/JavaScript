const user = {
    username: "samira",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// // user.username = "Arshiya"
// // user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "samira"
//     console.log(this.username);
// }

// chai()



const chai = () => {
    let newname = "Sahira"
    console.log(this);
    
}

chai()



const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));


const myArray = [2,5,3,7,8]

// myArray.forEach()