//Change how weight is declared in the Bird function so it is a private variable. 
//Then, create a method getWeight that returns the value of weight

//here we have a constructor function bird
//It has the function passed to the method variable getweight

function Bird() {
    let weight = 15;
    this.getWeight = function() {
        return weight;
    }
      
 }