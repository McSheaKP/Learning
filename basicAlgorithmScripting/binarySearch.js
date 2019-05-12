//You are given a sorted array of integers distinct non-negative number 
//Write a function that finds the smallest missing element in the sequence
//For example [1, 2, 3, 4, 7, 8, 12] should return the element integer 5


//Input will be a sorted array

//output will be the lowest missing integer

//rules, are all numbers positive? - yes
//all numbers are disctinct integers...explain whole numbers of increasing order
//All numbers are integers
//array is sorted
//display the result? - Yes
//can numbers repeat? - no

//Mental model - Brute force
//loop through each of the array indices in sequence
//check to see if the integer is not the same as the previous
//if it is not increment plus one and check if indice is the same as the incremented number
//if it is not then return result
// if it is, then loop through again.

//Brute force

function bruteForce(arr){
    let incrementor = arr[0]
    for(let i = 1; i < arr.length; i++){
        incrementor++;
        const check = arr[i];
        if (incrementor !== check){
            return incrementor
        }
    }
}

testArr1 = [1,2,3,4,7,9,12,15] //expected 5
testArr2 = [1,5,6] //expected 2
testArr3 = [2,3,4,5,6,7,8,9,10,12,13,14,17]//expected 11

// console.log(bruteForce(testArr1));
// console.log(bruteForce(testArr2));
// console.log(bruteForce(testArr3));

//You are given a sorted array of integers distinct non-negative number 
//Write a function that finds the smallest missing element in the sequence
//For example [1, 2, 3, 4, 7, 8, 12] should return the element integer 5

//Solution 2 - Binary Search

