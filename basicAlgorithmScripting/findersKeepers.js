// Create a function that looks through an array (first argument) 
// and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.

function findElement(arr, func) {
    let newArr = []
    arr.forEach(element => {
        console.log(func(element))
        if (func(element) === true){
            newArr.push(element);     
        }
    });
    if (!newArr[0]){
        return undefined;
    }
    return newArr[0]
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) //should return 8.
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) //should return undefined.
//findElement([1, 2, 3, 4], num => num % 2 === 0);