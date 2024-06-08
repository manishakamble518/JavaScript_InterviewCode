let studentsMarks = [10, 20, 20, 50,30,10,99, 30, 50, 70, 30] 
let map=new Map()
for(let num of studentsMarks){
    if(map.has(num)){
        map.set(num,map.get(num)+1)
    }
    else{
        map.set(num,1)
    }
}
console.log(map)

let rNum=undefined
hCount=0
for([num,count] of map){

    if(count>hCount){

        rNum=num
        hCount=count
    }
}
console.log(rNum,hCount)



let arr=[2,2,3,3,3,3,4,4,5,5]
let map1 = new Map()

for(ele of arr){

    if(map1.has(ele)){
        map1.set(ele,map1.get(ele)+1)
    }
    else{
        map1.set(ele,1)
    }
}
console.log(map1)

let mCount=0
let rpNum= undefined

for([num,count] of map1){

    if(count>mCount){
        rpNum=num
        mCount=count
    }
}
console.log(rpNum,mCount)

let a=['"Manisha","Rani","Kajal","Santosh"']
console.log(a.sort())

//Sort
let a1=[10,50,60,4,85,7,95,60]
let sortedArr=a1.sort(function(a,b){
    return b-a
})
console.log(sortedArr)

let dup=a1.filter(function(el,index){
    return a1.indexOf(el)!=index
})
console.log(dup)

let count1={}
for(let a of a1){
    if(count1[a]){
        count1[a]++
    }
    else {
        count1[a]=1
    }
}
console.log(count1)

let m=new Map()
for(let a of studentsMarks){
    if(m.has(a)){
        m.set(a, m.get(a)+1)
    }
    else{

        m.set(a, 1)
    }
}
console.log(m)
let highestCiount=0
let hNum=0;
for([num,count] of m){

    if(count>highestCiount){

        hNum=num
        highestCiount=count
    }
}
console.log(num,highestCiount)

let max=studentsMarks[0]
let smax=0
for(let a of studentsMarks){

    if(a>max){

        smax=max
        max=a
    }
    else if(a>smax && a!=max){
        
        smax=a
    }
}

console.log(smax)
console.log(max)

let set =new Set(studentsMarks)
console.log(set)