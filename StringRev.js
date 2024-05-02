let str="Winjit"
let rev=str.split('').reverse().join("")
console.log(rev)


function reverseString(str) { 
    const strRev =  [...str].reverse().join("")
    console.log(strRev); 
} 
reverseString("Geeksfor"); 

let revStr=""
for(let i=str.length-1;i>=0;i--){
    revStr+=str.charAt(i)
}
console.log(revStr)


// let sum=0
// let str1 ='he2752221llo'
// let str2= str1.split('')

// let digits=str2.filter(function(ele,index){
//     return str2.indexOf(ele)==index
// })
// console.log(digits)

// for(let i=0;i<digits.length;i++){

//     if(Number(parseInt(digits[i]))){

//        sum+=parseInt(digits[i])
//     }
// }
// console.log(sum)


//return duplicates no
let num= [10,60,53,85,75,10,53]
for(let i=0;i<num.length;i++){

    if(num.lastIndexOf(num[i])==num.indexOf(num[i])){

        console.log(num[i])
    }
}


let sum=0
let str1 ='he2752221llo'
let str2= str1.split('')

let digits=str2.filter(function(ele,index){
    return str2.indexOf(ele)==index
})
console.log(digits)

for(let i=0;i<digits.length;i++){

    if(Number(parseInt(digits[i]))){

       sum+=parseInt(digits[i])
    }
}
console.log(sum)