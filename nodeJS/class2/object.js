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


//modifying object
student.name="namita";//dot notation
student.age="24";
console.log(student);

//bracket notation
student["name"]="chubu";
student["age"]=24;
console.log(student);

//deleting obj 
delete student.age;
console.log(student);

//obj keys
let keys=Object.keys(student);
console.log(keys);//its give uh only keys

//object value
let value=Object.values(student);
console.log(value);//it gives uh  the keys  value

//object entries
let entry=Object.entries(student);
console.log(entry);//both key and values