// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.

// ## Boilerplate

//     'use strict';


    var promise = new Promise(function (resolve, reject) {
      // Your solution here
      setTimeout(function(){
          resolve('FULFILLED!');
      },300)
    });

   promise.then(function (value){
       console.log(value)
   })
 
    // Your solution here