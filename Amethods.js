const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())

console.log(fruits.length)

console.log(fruits.join("*"))

fruits.push("Manisha")
console.log(fruits)
fruits.unshift("Pune")
console.log(fruits)

fruits.shift()
console.log(fruits)

delete fruits[1]
console.log(fruits)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
console.log(arr1.concat(arr2))

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

const fruitsArr = ["Banana", "Orange", "Apple", "Mango"];
fruitsArr.splice(2, 0, "Lemon", "Kiwi");
console.log(fruitsArr)
fruitsArr.splice(1,1 ,"Hello")
console.log(fruitsArr)

const fruitsarr2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitsarr2.slice(1);
console.log(citrus)