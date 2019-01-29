// Truncate a string (first argument) 
// if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
	// Clear out that junk in your trunk
	if(str.length > num){
		return str = str.slice(0, num) + "..."
	} else {
		return str = str.slice(0, num)
	}
	
}
  
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) //should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) //should return "A-tisket a-tasket A green and yellow basket".