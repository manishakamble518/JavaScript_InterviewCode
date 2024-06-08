// let myMap=new Map()
// myMap.set("Name","Manisha")
// myMap.set("Age",30)
// myMap.set("city","Pune")
// myMap.set("skill","Cypress")

// console.log(myMap)

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
// const map = new Map();

// map.set(1, { "Name": "Manisha" });
// map.set(2, { "Name": "Kamble" });

// // Convert the map to an object for easier output formatting
// // const result = Object.fromEntries(map);
// // console.log(result);
// console.log(map)


// let uniq=[]
// let dup1=[]
// let arr=[1,3,6,8,0,1,2,2,8]
// for(let i=0;i<arr.length;i++){
//     if(!uniq.includes(arr[i])){
//         uniq.push(arr[i])
//     }
//     else{
//         dup1.push(arr[i])
//     }
// }
// console.log(dup1)
// console.log(uniq)


let str="Hello"
let count=[]
for(let i=0;i<str.length;i++){
if(count[str[i]]){
    count[str[i]]++
}
else{

    count[str[i]]=1
}
// if(count==1){
//     console.log(count)
// }  
}
console.log(count)