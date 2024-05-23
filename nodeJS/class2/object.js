// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

// Syntax:

// Traditional method













let student={
    name:"dhara",
    age:23,
    dist:"puri",
    marks:[95,90,84],
   
    isMarried:false,
    address:{at:"puri",pin:752015},

};
console.log(student);




//constuctor:
let newStudent= new Object();
newStudent.name="dhara",
newStudent.age=23,
  newStudent. dist="puri",
   newStudent .marks=[95,90,84],
   
    newStudent.isMarried=false,
   newStudent. address={at:"puri",pin:752015}
   console.log(newStudent);

console.log(student.name);
console.log(student["marks"]);