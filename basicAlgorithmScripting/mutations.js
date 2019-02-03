// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


    //array will contain two strings
    //check if each char in the 2nd string is contained in the 1st string
function mutation(arr){
    //move each char in the string to an index in an array and do lower case transform to catch capitilization edge cases
    let arr1 = arr[0].toLowerCase().split('');
    let arr2 = arr[1].toLowerCase().split('');
    //array will contain two strings
    //check if each char in the 2nd string is contained in the 1st string
    //write a loop to check each indice in the 2nd string to see if its in the first string
    for(let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            return false;
        }
    }
    return true;
}

console.log(mutation(['hello', 'hey']));