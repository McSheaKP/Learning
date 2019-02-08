// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. 
// Then add a bark() method to the Dog object so that beagle can both eat() and bark(). 
// The bark() method should print "Woof!" to the console.


function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

//Here we are creating the object which is being passed in to the Dog.prototype
//The object that we are using to pass into this is the Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

//Here we are setting future instances of dog to be of the dog.prototype.constructor
//If we did not do that, they would be instances of the animal.prototype.
Dog.prototype.constructor = Dog;
function Dog() { }

// Add your code below this line
Dog.prototype.bark = function(){
    console.log("Woof!")
}



// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"