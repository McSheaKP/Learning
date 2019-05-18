// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should 
// also capitalize connecting words like "the" and "of".

function titleCase(str) {
    //convert string to lowercase
    str = str.toLowerCase();
    let newStr = ''
    //make an array with each index being the word in the sentence
    let arr = str.split(" ");
    //loop through each element in the index and capitalize the first character
    //while also making all other characters lowercase
    arr.map(index => {
        newStr += index.charAt(0).toUpperCase() + index.slice(1) + " "
    }) 
    console.log(newStr)
    return newStr;
}
  

titleCase("I'm a little tea pot");
// titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot")// should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") //should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //should return Here Is My Handle Here Is My Spout.