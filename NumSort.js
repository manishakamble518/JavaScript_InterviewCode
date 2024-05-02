const points = [40, 100, 1, 5, 25, 10];
//Acsending Order
points.sort(function(a, b)
{
    return a - b
});
console.log(points)


//Descending Order
points.sort(function(a,b){
    return b-a
})
console.log(points)
