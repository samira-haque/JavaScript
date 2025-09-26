const name = " samira_Haque "
const repoCount = 50

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('samira_haque')

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "  samira"
console.log(newStringOne);
console.log(newStringOne.trim()); // trim => space remove

const url = "https://hitesh.com//hitt%20yesh"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));









