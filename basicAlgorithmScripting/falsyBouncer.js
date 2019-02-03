// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let newArr = [];
    arr.forEach(element => {
        if(!element){

        } else {
            newArr.push(element);
        }
    });
    return newArr;
  }
  
bouncer([7, "ate", "", false, 9]);
  console.log(test)
  