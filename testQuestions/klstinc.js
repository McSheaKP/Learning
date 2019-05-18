// Task: Find the missing term in an Arithmetic Progression – 
// An Arithmetic Progression is defined as one in which there is a 
// constant difference between the consecutive terms of a given series of numbers. 
// You are provided with consecutive elements of an Arithmetic Progression. 
// There is however one hitch: Exactly one term from the original series is missing 
// from the set of numbers which have been given to you. 
// The rest of the given series is the same as the original AP. Find the missing term.

// Input Format: The first line contains an Integer N, which is the number of terms which will be provided as input. 
// This is followed by N consecutive Integers, with a space between each pair of integers. 
// All of these are on one line, and they are in AP (other than the point where an integer is missing).

// Output Format: One Number which is the missing integer from the series.

const n = 5; //number of terms
const consecutiveInts = '1 3 5 9 11';
const consecutiveInts = '-1500 -1000 -500 0 500 1500 2000 2500 3000 3500 4000'

//inputs number of terms
//string which contains the number of terms



//First determine what the progression is
//this can be determined by creating a hash with the difference


//Then find the missing term

function missingTerm(numTerms, conscInts){
    
    let arr = conscInts.split(" ");
    const hash = {}
    for(let i = 0; i < arr.length-1; i++){
        let result = Math.abs(arr[i]) - Math.abs(arr[i+1])
                
        if (!hash[result]){
            hash[result] = {}
            hash[result].count = 1;
            hash[result].nums = []
            hash[result].nums.push(arr[i])
        } else if (hash[result]){
            hash[result].count++;
            hash[result].nums = []
            hash[result].nums.push(arr[i])
        }      
    }

    let targetNum; //num in sequence prior to missing num
    let difference; //consistent difference in sequence


    for( key in hash ){
        if(hash[key].count === 1){
            targetNum = +(hash[key].nums[0])
        } else {
            difference = +(Math.abs(key))
        }
    }    
    return (targetNum + difference);
}
const result = missingTerm(n, consecutiveInts);
console.log(result);




// Sample Input: 
// 1 3 5 9 11
//-1500 -1000 -500 0 500 1500 2000 2500 3000 3500 4000

// Sample Output: 
// 7

// Explanation: You are provided with 5 integers. As you can can observe, 
//they have been picked from a series, in which the starting term is 1 and the common difference is 2. 
//The only abberration, i.e. the missing term (7), occurs between 5 and 9. 
//This is the missing element which you need to find.

// Constraints: 3 <= N <= 2500. All integers in the series will lie in the range [-10^6,+10^6].