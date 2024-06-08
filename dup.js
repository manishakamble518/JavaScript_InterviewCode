// let arr1=[10,5,23,12,1,3,1,3,5]
// const duplicates=arr1.filter(function(el,index,arr){
//     return arr.indexOf(el)!==index
// })

// console.log(duplicates)


// let a=[10,58,42,10,75,1,98]
// let max=0
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         max=a[i]
//     }
// }
// console.log(max)

// let a=[10,58,42,10,75,1,98]
// let min=a[0]
// for(let i=0;i<a.length;i++){
//     if(a[i]<min){
//         min=a[i]
//     }
// }
// console.log(min)

// let a=[10,58,42,10,75,1,98,5,79]

// let sortedArr=a.sort(function(a,b){
//     return a-b
// })
// let len=sortedArr.length
// console.log(a[len-2])


// console.log(a.includes(75))

function isPrime(num){
    if(num<=1){
        return true
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
        
    }
    return true
}

console.log(isPrime(15))