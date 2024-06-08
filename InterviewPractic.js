let str="Manisha"
let rev=str.split('').reverse().join('')
console.log(rev)

//reverse each word from String
str1="I am Manisha"
let revword=str1.split(" ").reverse().join(" ")
console.log(revword)
let revword1=str1.split('').reverse().join('')
console.log(revword1)
if(revword1==str1){
    console.log("String is Palindrome")
}
else{
    console.log("String is not Palindrome")
}

//without Predefined Method
let rWord=""
for(let i=str.length-1;i>=0;i--){
    rWord+=str.charAt(i)
}
console.log(rWord)

//Reverse each Word
let rStr=[]
let s=str1.split(" ")
for(let i=0;i<s.length;i++){
    let word=s[i]
    let revWord=""
    for(let j=word.length-1;j>=0;j--){
        revWord+=word.charAt(j)
    }
    rStr.push(revWord)
}
console.log(rStr.join(' '))


//Count letters
let s3=str.split('')
console.log(s3.length)

//Count Words
let s4=str1.split(' ')
console.log(s4.length)

let count=[]
let str2=str1.toLowerCase()
for(let i=0;i<str2.length;i++){
if(str1[i]!=' '){
    if(count[str2[i]]){
        count[str2[i]]++
    }
    else{
        count[str2[i]]=1
    }
}    
}
console.log(count)

//Ascending sort
let arr=[10,30,58,75,98,45]
let a= arr.sort(function(a,b){
    return a-b
})
console.log(a)
console.log(a[a.length-2])

//Max
let max=0
for(let i=0;i<str2.length;i++){

    if(arr[i]>max){
        max=arr[i]
    }

}
console.log(max)

//second max
let secondMax=0
let max1=0
for(let i=0;i<str2.length;i++){

    if(arr[i]>max1){
        secondMax=max1
        max1=arr[i]
    }
    else if(arr[i]>secondMax && arr[i]!=max1){
        secondMax=arr[1]
    }
}
console.log(secondMax)
//console.log(max1)

//prime Number
function primeNo(n){
    
    let count=0
    for(let i=2;i<n;i++){
        if(n%i==0){
           count=1
           break
        }
    }
    if(count==1){
        console.log("Number is not prime")
    }
    else{
        console.log("Number is Prime")
    }
}

primeNo(9)

// factorial
let num=5
let fact=1
if(num==0){
    return 1
}
for(let i=1;i<=num;i++){

    fact=fact*i
}
console.log(fact)

//Fibbonacci 
let a1=0,b1=1
for(let i=1;i<=10;i++){
    let temp=a1+b1
    a1=b1
    console.log(temp)
    b1=temp
}

