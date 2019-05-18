// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element 
// of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let arr3 = [];
    for (let i = 0; i < arr2.length; i++){
        arr3.push(arr2[i])
    }
    for(let i = 0; i < arr1.length; i++){
        let index = arr1.slice(i ,i+1)
        
        arr3.splice(n+i, 0 , index[0])
    }
    return arr3;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1) // should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) //should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 
// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].