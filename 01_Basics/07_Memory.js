// stack (premitive) , heap(non-premitive)

const { useInsertionEffect } = require("react");

let myYoutubename = "Samira Haque"

let anothername = myYoutubename
anothername = "copy&paste"

console.log(myYoutubename)
console.log(anothername);


let user = {
    email : "samira@gmail.com",
    upi :"user@ybl"
}

let userTwo = userOne 

userTwo.email = "abc@gmail.com"

console.log(userOne.email);

console.log(userTwo.email);
