// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regulatUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Samira",
            lastname : "Haque"
        }
    }
}

console.log(regulatUser.fullname.userfullname);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email: "samira@gmail.com"
    },
    {
        id : 1,
        email: "samira@gmail.com"
    },
    {
        id : 1,
        email: "samira@gmail.com"
    },
]

users[1] .email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//*********Destructuree************/

const course = {
    coursename: "This is a course",
    price: "999",
    courseInstructor:"Samira"
}

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = ({company}) => {


// }                                    //react

// navbar(campany = "samira")

// {
//     "name": "samira",
//   "  coursename ": "CouseName",
//     "price": "$10"
// }


[
    {},
    {},
    {}  // random user me API
]