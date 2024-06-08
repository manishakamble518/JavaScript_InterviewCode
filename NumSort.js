const points = [40, 100, 1, 5, 25, 10];
//Acsending Order
points.sort(function(a, b)
{
    return a - b
});
console.log(points)


//Descending Order
points.sort(function(a,b){
    return b-a
})
console.log(points)

let str="Welcome to the Javascript World"
let count=str.split(" ").length;
console.log(count)

let pro=new Promise(function(resolve,reject)
{
    reject("Hello")
}).then(function(str){
    console.log(str)
}).catch(function(str){
    console.log(str)
})