var s=1
if(1){
    function f(){}
    var s=1
    if(1){

        function f(){
            s+=typeof f
          
        }
        console.log(s)
        s+=typeof f;

    }
    console.log(s)
}


// let sum=0
// function add(...args){

//     for(a of args){

//         sum+=a
//     }
// console.log(sum)
// }

// add(10,20,30,50,4,50)

function add1(num){

    return function(num2){
        console.log(num-num2)
        return num+num2
    }
}
let a=add1(15)(10)
console.log(a)
 
var n=10
let m=20

function display(){
    console.log(n)
    console.log(m)
}
display()

// let str="dnafhsdjfh4567698955"
// let str2=str.split('')
// let unique = str2.filter(function(el,index){
//     return str2.indexOf(el)==index
// })
// let sum=0
// for(let a of unique){
//     if(Number(parseInt(a))){
//         sum+=parseInt(a)
//     }
// }
// console.log(sum)


let str="Hi am Manisha am am"
let str2=str.split(" ")
let count={}
for(let i=0;i<str2.length;i++){

    if(count[str2[i]]){
        count[str2[i]]++
    }
    else{
        count[str2[i]]=1
    }
    
}
console.log(count)

 let max=0
 let word=""
for(a in count){

    if(count[a]>max){
        max=count[a]
        word=a
    }

  
}
console.log(word,max)