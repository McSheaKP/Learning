// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the 
// numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. 
// Try to pair program. Write your own code.

//given an array of two numbers
//return sum of all numbers inclusive from one number to the other
//numbers are presumably integers

//take lowest number and highest number
//for loop where loop length is equal to highest minus lowest
//

// 4 1, should equal 4 3 2 1 = 10

function sumAll(arr) {
   
    let smaller = 0;
    let sum = 0;
    
    //Find difference amount between two nums
    let difference = Math.abs(arr[0] - arr[1])
    console.log("difference", difference)

    //Find which num is bigger
    if(arr[0] < arr[1]){
       smaller = arr[0];
    } else {
       smaller = arr[1];
    }
   

    for(let i = 0; i <= difference; i++){
        sum += smaller + i;
    }

    
    return sum;
  }
  
console.log(sumAll([1, 4]));
console.log(sumAll([5, 10])) //should return 45.


function gauss (arr) {
    // S = (n / 2) * (a1 + aN)
    // arr = [2,5] -> 2,3,4,5
    const numberOfTerms = Math.abs(arr[0] - arr[1]) + 1;
    return (numberOfTerms / 2) * (arr[0] + arr[1]);
}

console.log(gauss([1, 4]));
console.log(gauss([5, 10])) //should return 45.
