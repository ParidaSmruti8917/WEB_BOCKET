//Array

// an array in js is a  data structure to store multiple values of any type under a single name ,including no.,string,array and objects.
// an array is a collection of items stroed at a contiguoue memory location.
// an array is a zero-indexed meaning it starts from index 0.
// How to create an array

let numAr=[1,2,3,45,10];
console.log(numAr);
console.log(typeof numAr);

let randomAryy=["namita", "dhara", 35];
console.log(randomAryy);

//Accessing elements

console.log(randomAryy.length);
console.log(randomAryy[0]);

console.log ( randomAryy[ randomAryy.length-1]);


// Modifying the element:

randomAryy[2]="mamata";
console.log(randomAryy);


// Array Methode:
//push method:

// the push() method adds one or more elements to the end of an array and returns new length.

let bike=["jawa","ktm"];
console.log(bike);
bike.push("r15");
console.log(bike);//add 

bike.pop();// remove last one
console.log(bike);