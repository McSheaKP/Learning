//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.


//Theses two mixins here are going to be combined into a module that can be passed around.
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
};

let singMixin = function(obj) {
    obj.sing = function() {
        console.log("Singing to an awesome tune");
    };
};
  

  let funModule = (function (){
      return {
          isCuteMixin: function(){
              obj.isCute = function(){
                  return true;
              }
          },
          singMixin: function(){
              obj.sing = function(){
                  console.log('Singing to an awesome tune')
              }
          }
      }
  }()) // here we have the immediately invoked function

  console.log(funModule);