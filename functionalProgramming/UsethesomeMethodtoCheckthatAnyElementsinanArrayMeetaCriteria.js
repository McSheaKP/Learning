// Use the some method inside the checkPositive function 
// to check if any element in arr is positive. 
// The function should return a Boolean value.
function checkPositive(arr) {
    // Add your code below this line
    
    return arr.some(function(index){
       return index > 0;
    })
    // Add your code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));