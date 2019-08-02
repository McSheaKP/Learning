/*
Emma is playing a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. 
She can jump on any cumulus cloud having a number that is equal to the 
number of the current cloud plus  or . 
She must avoid the thunderheads. 
Determine the minimum number of jumps it will take Emma to jump 
from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  
if they are safe or  if they must be avoided. For example,  
indexed from . The number on each cloud is its index in the list 
so she must avoid the clouds at indexes  and . 
She could follow the following two paths:  or . 
The first path takes jumps while the second takes .

Function Description

Complete the jumpingOnClouds function in the editor below. 
It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
Input Format

The first line contains an integer , the total number of clouds. 
The second line contains  space-separated binary integers describing clouds  where .

Constraints

Output Format

Print the minimum number of jumps needed to win the game.

Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4
*/

const test1 = [0, 0, 1, 0, 0, 1, 0];
const test2 = [0, 0, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {
    let numJumps = 0;
    //ulilize index of to check where in the array the next 1 is, and set the 
    //index(i)of the present iteration to that of the last number 1 + 1

    

    //input array containing 0s or 1s
    for(let i = 0; i < c.length; i++){
        //check two indexes ahead first
        if( (c[i+1]===0 && c[i+2]===0) || c[i+1]===1) {
            i++;
            numJumps++;
            //console.log('i value', i);
        } else if(c[i+1]===0){
            numJumps++;
        }
    }
    return numJumps;

    //loop through the array

    //increment number of jumps as interator increase

    //return output number of jumps
}

console.log(jumpingOnClouds(test1));
console.log(jumpingOnClouds(test2));
