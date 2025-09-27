// singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "samira",
    "full name" : "Samira Haque",
   [ mySym]: "mykey1",
    age : 18,
    location: "Dhaka",
    email : "samira@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "Saturday"]

}

console.log(jsUser.email);
console.log(jsUser["email"]); // like string 
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "Arshiya@chatgpt.com"
Object.freeze = "samira@micrisoft.com"

console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS viewers");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS viewers, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

