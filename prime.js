let no=50
for(let i=10;i<no;i++){

    let count=0
    for(let j=2;j<i;j++){
        if(i%j==0){
        count++
        }
    }
    if(count==0){
        console.log(i)
    }
}