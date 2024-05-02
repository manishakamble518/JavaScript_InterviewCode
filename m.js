let arr=[10,30,50,40]
console.log(arr)

console.table(arr)

console.log(typeof NaN)

let obj={
    first:10,
    sec:30,
    first:50
}
console.log(obj)


let obj1={
    first:10,
    sec:30,
    first:50,
    sum:function(){
        console.log("Abc")
    }
}
console.log(Object.keys(obj1))

console.log(2+2+"hi"+2+2)
console.log(parseInt("4213")+2)

function display(str){

    for(let i=0;i< str.length;i++){

        for(let j=0; j<str.length;j++){

            if(!(str[i]==str[j])){
                
                console.log(str[i])
                break;
            }
        }
    }
}

display("Maniha")