"use strict";

let s1=new Set()
s1.add("Manisha")
s1.add(44)
s1.add("Rani")
console.log(s1)

s1.delete("Rani")
console.log("Rani")

console.log(s1.has("Rani"))
console.log(s1.size)

s1.add("Kamble")
s1.add(23)

for(let element of s1){
    console.log(element)
}

console.log("****************************************")
s1.forEach(function(el){
    console.log(el)
})

// List all Elements
const letters = new Set(["a","b","c"]);
let text = "";
for (const x of letters.values()) {
  text += x;
}
console.log(text)