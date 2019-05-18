// Basic Algorithm Scripting: 
// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	// repeat after me
	let newStr = '';
	for(let i = 0; i < num; i++){
		newStr += str;
		console.log(newStr)
	}
	return newStr;
  }
  
  repeatStringNumTimes("abc", 3);

//repeatStringNumTimes("*", 3) //should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
// The built-in repeat()-method should not be used