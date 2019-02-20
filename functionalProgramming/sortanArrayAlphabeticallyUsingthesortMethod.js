// Use the sort method in the alphabeticalOrder 
// function to sort the elements of arr in alphabetical order.

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  ascendingOrder([1, 5, 2, 3, 4]);
  // Returns [1, 2, 3, 4, 5]
  
  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a < b;
    });
  }
  reverseAlpha(['l', 'h', 'z', 'b', 's']);
  // Returns ['z', 's', 'l', 'h', 'b']

  function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b){
        return b < a;
    })
    // Add your code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
  console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
