function calculateCartPrice(cal1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 5000));


const user = {
    username : "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is $ {anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[2]
}


// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(myNewArray));
