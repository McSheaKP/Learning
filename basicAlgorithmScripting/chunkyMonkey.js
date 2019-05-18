//Write a function that splits an array (first argument) into groups the length 
//of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    // Break it up.
    //determine how many times to go through first loop
    let returnedArr = [];
    let iterator = arr.length / size;
    for (let i = 0; i < iterator; i ++){
        returnedArr.push(arr.splice(0,size))
    }
    
    return returnedArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);