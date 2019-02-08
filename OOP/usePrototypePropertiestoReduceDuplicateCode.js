//Add a numLegs property to the prototype of Dog

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  

  let beagle = new Dog("Snoopy");
  

  //Here the object dog, has the prototype property of numLegs, that is equal to 4 assigned to it.
  //Because of prototypal inheritance, any instances of of the Dog constructor function will
  //also contain the property of numLegs through a pointer and not a direct variable assignement.
