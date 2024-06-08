//Fibbonacci
let a=0,b=1
let arr=[]
for(let i=1;i<=10;i++){
    let temp=a+b
    a=b
    b=temp
    arr.push(temp)
}
console.log(arr)
