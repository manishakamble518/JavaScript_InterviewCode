let myMap=new Map()
myMap.set("Name","Manisha")
myMap.set("Age",30)
myMap.set("city","Pune")
myMap.set("skill","Cypress")

console.log(myMap)

// console.log("****************************")
// myMap.delete("skill")
// console.log(myMap)

// console.log("****************************")
// myMap.forEach(function(key,value){
//     console.log(key+":"+value)
// })

// console.log("****************************")
// for (const key of myMap.keys()) {
//     console.log(key)
// }


// console.log("****************************")
// for (const value of myMap.values()) {
//     console.log(value)
// }

// console.log("****************************")
// for (const [key,value] of myMap.entries()) {
//     console.log(key+"="+value)
// }

// Create a Map object
const map = new Map();

map.set(1, { "Name": "Manisha" });
map.set(2, { "Name": "Kamble" });

// Convert the map to an object for easier output formatting
// const result = Object.fromEntries(map);
// console.log(result);
console.log(map)