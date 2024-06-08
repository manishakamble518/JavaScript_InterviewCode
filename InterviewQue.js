// let Str="Hello Manisha"
// let str1=Str.split(" ")

// for(let i=0;i<str1.length;i++){
//     if(str1[i]=='Manisha')
//     console.log("String Found")
// }

let arr=[10,20,1,52,7,90]

let max=0;
let secondMaax=0
for(let i=0;i<arr.length;i++){

    if(arr[i]>max){
        secondMaax= max
        max=arr[i]

    }
    else if(arr[i]>secondMaax && arr[i]!=max){
        secondMaax=arr[i]
    }
}
console.log(secondMaax)

// class Person{

//     constructor(name, city){
//         this.name=name
//         this.city=city
//     }

//     display(){
//         console.log("Name:"+this.name+" "+"City:"+this.city)
//     }
// }

// let obj=new Person("Manisha","city")
// obj.display()

// let obj={

//     name:"Manisha",
//     city:"Pune"

// }

// for(key in obj){
//     console.log(`Hello ${obj[key]}`)
// }

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b)
// {
//     return a - b
// });

// console.log(points)

let a=10
let b=a

a=20
console.log(a)
console.log(b)