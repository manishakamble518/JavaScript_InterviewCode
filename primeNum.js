//Prime Number
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
        console.log("Prime")
    }
}

primeNo(2)