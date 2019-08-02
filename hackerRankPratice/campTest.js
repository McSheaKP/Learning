/*
    Take the string given and provide the first repeated word as the return value.
    For example given the string 'He, had had quite: enough of this nonsense.' 
        return should be: had
    Delimters for this task are ,:; -
    
*/
function firstRepeatedWord(s) {
    // Write your code here
    //create a hash for word storage
    let hash = {};
    //break apart the string based on the delimteres
    let result = s.split(/,| |:|;|-/);
    //filter out spaces
    result = result.filter(index => index !== "");
    for(let i = 0; i < result.length; i++){
        if(!hash[result[i]]){
            hash[result[i]] = 1;
        } else if (hash[result[i]]) {
            return result[i];
        }
    }    

}

//  console.log(firstRepeatedWord(' He, had had quite: enough of this nonsense.'))

/* 
 * Complete the 'getMaxOccurrences' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER minLength
 *  3. INTEGER maxLength
 *  4. INTEGER maxUnique
 *  Note: maxUniqe is defined as the number of instances of each unqiue char
 *  e.g. (abb) has meets the max uniq char of 2 but does not meet the max unique char of 1 due to bb
 */


function getMaxOccurrences(s, minLength, maxLength, maxUnique, xHighest) {
    // Write your code here

    //create hash for all qualifying substrings
    let hash = {};
    //loop through and get minlength
    for(let i = 0; i < s.length; i++){
        //slice at the present index each substr
        console.log(hash);
        for(let j = 0; j < maxLength; j++){
            let endOfSlice = i + (minLength + j);
            console.log(endOfSlice)

            if(endOfSlice <= s.length) {
                let substr = s.slice(i, endOfSlice)
                if(substr.length >= minLength && substr.length <= maxLength){
                    if(checkUnique(substr, maxUnique)){
                        if(!hash[substr]){
                            hash[substr] = 1;
                        } else {
                            hash[substr]++
                        }
                    }
                }
            }            
        }
        
        
        
    }
    // console.log(hash)
    let values = Object.values(hash);
    let sorted = values.sort((a, b) => b - a);
    return sorted[xHighest]
}

function checkUnique(substr, maxUnique){
    let set = new Set(substr)
    return set.size <= maxUnique;
    // let hash = {};
    // for(let i = 0; i < substr.length; i++){
    //     if(!hash[substr[i]]){
    //         hash[substr[i]] = 1
    //     } else {
    //         hash[substr[i]]++
    //     }
    // }
    // let values = Object.values(hash);
    // let sorted = values.sort((a, b) => b - a);
    // if(sorted[0] <= maxUnique){
    //     return true;
    // }
    // return false;
}

console.log(getMaxOccurrences('abbde', 2, 3, 2))

/*
ab
abc
bc
bcd
de
ded
ed
ede
de freq 2

*/