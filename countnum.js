let studentsMarks = [10, 20, 20, 30, 10, 30, 50, 70, 30]
let count={}
for(let i=0;i<studentsMarks.length;i++){
    
    if(count[studentsMarks[i]]){
    count[studentsMarks[i]]++
    
    }
    else{
         count[studentsMarks[i]]=1
    }
}
console.log(count)