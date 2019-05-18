// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

//Returns an index
//The number should be inserted between values 1 and 2 if it is 1.2
//That index is at a value where the number should be inserted
//

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
// because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the 
// array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) 
// and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a,b){
        return a-b;
    })  
    
    //if it is less than the first index, should be at index 0
    //if it is less than the next index and greater than or equal to the checked index
    //if it is greater than all indexes
    if(num <= arr[0] || arr[0] === undefined){
        return 0;
    } else if ( num > arr[arr.length - 1]){
        return arr.length;
    }  
    for(let i = 0; i < arr.length; i++){
        if(num >= arr[i] && num <= arr[i+1]){
            return i+1
        }
    }
    return num; //returned value should be an index

}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))

// getIndexToIns([10, 20, 30, 40, 50], 35) //should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 35) //should return a number.
// getIndexToIns([10, 20, 30, 40, 50], 30) //should return 2.
// getIndexToIns([10, 20, 30, 40, 50], 30) //should return a number.
// getIndexToIns([40, 60], 50) //should return 1.
// getIndexToIns([40, 60], 50) //should return a number.
// getIndexToIns([3, 10, 5], 3) //should return 0.
// getIndexToIns([3, 10, 5], 3) //should return a number.
// getIndexToIns([5, 3, 20, 3], 5) //should return 2.
// getIndexToIns([5, 3, 20, 3], 5) //should return a number.
// getIndexToIns([2, 20, 10], 19) //should return 2.
// getIndexToIns([2, 20, 10], 19) //should return a number.
// getIndexToIns([2, 5, 10], 15) //should return 3.
// getIndexToIns([2, 5, 10], 15) //should return a number.
// getIndexToIns([], 1) //should return 0.
// getIndexToIns([], 1) //should return a number.