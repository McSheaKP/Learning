// Compare two arrays and return a new array with any items only found 
// in one of the two given arrays, but not both. In other words, 
// return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

//Given two arrays
//return an array with elements only found in one of the two arrays

//use a hash to create an index for lookup
//can I assume that each array index is unique within the array?
//

//check to se


function diffArray(arr1, arr2) {
    let hashChecker = {};
    let newArr = [];
    function populateHash(arr){
        for (let i = 0; i < arr.length; i++){
            if(hashChecker[arr[i]] === undefined){
                hashChecker[arr[i]] = 1;
            } else {
                hashChecker[arr[i]] += 1;
            }
        }   
    }
    populateHash(arr1);

    populateHash(arr2);
    
    for (let key in hashChecker){
        if( hashChecker[key] === 1){
            newArr.push(key)
        }
    }
    //loop through each array and populate it in the hash
    console.log(newArr)
    // Same, same; but different.
    return newArr;
  }
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
//   diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(arr1, arr2) {
    // let hashChecker = {};
    let newArr = [];
    function populateHash(arr){
        const hash = {};
        for (let i = 0; i < arr.length; i ++){
            if(hash[arr[i]] === undefined){
                hash[arr[i]] = 1;
            } else {
                hash[arr[i]] += 1;
            }
        }
        return hash;   
    }
    const hashArr1 = populateHash(arr1);

    const hashArr2 = populateHash(arr2);

    for (let key in hashArr1){
        if(!hashArr2[key]){
            newArr.push(key)
        }
    }

    for (let key in hashArr2){
        if(!hashArr1[key]){
            newArr.push(key)
        }
    }
    //loop through each array and populate it in the hash
    console.log(newArr)
    // Same, same; but different.
    return newArr;
  }
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])