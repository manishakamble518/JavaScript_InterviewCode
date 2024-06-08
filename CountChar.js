// let str="It is a sunny day today"
// //let str = ['red', 'red', 'blue', 'red', 'blue', 'green'];
// let lower=str.toLowerCase()
// let count=[]
// for(let i=0;i<lower.length;i++){
//     if(lower[i]!=" "){

//         if(count[lower[i]]){
//             count[lower[i]]++ 
//         }
//         else{
//             count[lower[i]]=1
//         }
//     }
  
// }
// console.log(count)


// let ar=[2,3,4,5,6,3,4,8,9,9]

// let dup=ar.filter(function(el,index){
//     return ar.indexOf(el)!=index
// })
// console.log(dup)


// let unique=ar.filter(function(el,index){
//     return ar.indexOf(el)==index
// })
// console.log(unique)


// let arr=[1,1,2,2,3,4,4]

// let u=arr.filter(function(el,index){
//     return arr.indexOf(el)==index
// })
// for(let i=0;i<u.length;i++){

//         for(let j=i+1;j<u.length;j++){
            
//             sum=u[i]+u[j]
//             if(sum==5){
//                 console.log(u[i],u[j])
//             }
//         }
// }

//Ascending Order
let a=[10,8,65,72,18,96]
let sortedArr=a.sort(function(a,b){
    return a-b
})

console.log(sortedArr)

//Descending Order
let sortedArr2=a.sort(function(a,b){
    return b-a
})
console.log(sortedArr2)

// console.log(Math.max(a))
// console.log(Math.min(a))

// let evenSum=0;
// let oddSum=0;
// for(let i=0;i<ar.length;i++){

//     if(ar[i]%2==0){
//         evenSum+=ar[i]
//     }
//     else{

//         oddSum+=ar[i]
//     }
// }
// console.log(evenSum)
// console.log(oddSum)

// console.log(new Set(arr))
// let c=0
// let a=[10,8,10,18,65,72,18,96]
// for(let i=0;i<a.length;i++){

//     for(let j=i+1;j<a.length;j++){

//         if(a[i]==a[j]){

//             console.log(a[i]+" ")
//             c++
//         }
//     }
// }
// if(c==0){
//     console.log("No duplicates")
// }

