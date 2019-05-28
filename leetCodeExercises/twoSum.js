/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

//given array of integers
//return indices of the numbers
//cannot use the same number twice

//does not say that the array of nums is sorted

//create a hash for each indice and the value


var twoSum = function(nums, target) {
    let hash = {}
    
    for(let i = 0; i < nums.length; i++){
        //if num does not exist in hash, create it with its value as the key an the array index as the value
        if(!hash[nums[i]]){
            hash[nums[i]] = i;
        }
       
        //compare the targeted number with the num that we are assessing
        const hashCheck = target - nums[i];
        //console.log('hashCheck', hashCheck)
        //if number we are targeting already exists in hash
        //and it is not the same as the number we are 
        
        console.log(hash[hashCheck])
        
        //if the check exists in the hash (e.g. the sum match is present)
        //and 
        if(hash[hashCheck] !== undefined && (hash[hashCheck] != i)){
            let returnArr = [];
            returnArr.push(hash[hashCheck])
            returnArr.push(i);
            return returnArr
        }
    }
    
    return -1;
    
};


// const nums = [2, 7, 11, 15];
// const target = 9;
const nums = [3, 3];
const target = 6;


console.log(twoSum(nums, target));
