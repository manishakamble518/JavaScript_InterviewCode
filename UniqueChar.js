function find_unique_characters(str) {
    var unique = '';
    for (var i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
        unique += str[i];
      }
    }
    return unique;
  }
  
  console.log(find_unique_characters('baraban'));
  console.log(find_unique_characters('anaconda'));


  function find_unique_characters1(str) {
    var duplicate = '';
    for (var i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) != str.indexOf(str[i])) {
        duplicate += str[i];
        
      }
    }
    return duplicate;
  }
  
//   console.log(find_unique_characters1('baraban'));
//   console.log(find_unique_characters1('anaconda'));

let arr=[10,3,5,8,95,10]
let sort1=arr.sort(function(a,b){
    return a-b
})

console.log(sort1[sort1.length-1])