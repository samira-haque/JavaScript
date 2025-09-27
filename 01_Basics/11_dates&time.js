// Dates

let myDate = new Date ()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString()); 


console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025, 8,26) // months start form 0
let myCreatedDate = new Date("2025-09-26") // month start with 1
console.log(myCreatedDate.toDateString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleDateString(`default`,{
    weekday: "long",
    // timeZone: ``
})



