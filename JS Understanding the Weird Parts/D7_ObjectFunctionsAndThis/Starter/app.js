console.log(this); //points to the global window object

function a() {
  console.log(this);
  this.newVariable = 'hello';
}

var b = function () {
  console.log(this);
}

a(); //this continues to point to the window
console.log(newVariable);

b(); //still points to window

var c = {
  name: 'The c object',
  log: function () {
    var self = this; 
    /*creates a reference point to this(pointing to c) to get 
    circumvent this changing where it's pointing to within the 
    nested method below. Replace references to this with 
    self below
    */

    self.name = 'Updated c object';
    console.log(self); //points to c object

    var setName = function(newName) {
      self.name = newName; //this is now pointing to the global object
    }
    setName('Updated again! The c object');
    console.log(self);
  }
}

c.log(); //when in a method, this refers to the object the method is in