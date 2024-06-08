let arr=[5,85,42,12,35,75,1,75,5,42]
let set= new Set(arr)
console.log(set)

let str="Winjit One Word"

reverseString=[]
let words=str.split(" ")
for(let i=0;i<words.length;i++){
   let word= words[i]
   let revWords=""
   for(let j=word.length-1;j>=0;j--){
    revWords=revWords + word.charAt(j)
   }
   reverseString.push(revWords)
   //reverseString.push(revWords) 
}

console.log(reverseString.join(' '))


let str2="abccdf85563ku3665"
let sum=0
let s2=str2.split("")
let unique=s2.filter(function(el,index){
  return s2.indexOf(el)===index
})
console.log(unique)
for(let i=0;i<unique.length;i++){
  if((Number(parseInt(unique[i])))){
    sum+=parseInt(unique[i])
  }
}
console.log(sum)
// for(let i=0;i<unique;i++){
//   let word=unique[i]
//   let revWords=""
//   for(let j=word.length-1;j>0;j--){
  //  revWords+=word.charAt(i)
//   }
// }
// console.log(revWords)


// let arr1 =str2.split('')
// let sum=0
// let uniq=arr1.filter(function(el,index){

//   return arr1.indexOf(el)==index
// })
// console.log(uniq)
// for(let i=0;i<uniq.length;i++){

//   if(Number(parseInt(uniq[i]))){

//     sum+=Number(parseInt(uniq[i]))
//   }
// }
// console.log(sum)

