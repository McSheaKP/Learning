//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".

function spinalCase(str) {

    
    str = str.toLowerCase();
    str = str.split(" ").join('-');
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    console.log(str)
    return str;
  }
  
  spinalCase('This Is Spinal Tap');