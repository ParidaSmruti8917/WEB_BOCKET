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


//unshift method
let shoes=["adidas","puma","nike"];
console.log(shoes);
shoes.unshift("campus");
console.log(shoes);//adding elements in starting of ana array


//shift method
shoes.shift();
console.log(shoes);//removing the first elements from an array 

//slie method
console.log(shoes.slice(1));
console.log(shoes.slice(0,1));//slice the not req part

//splice method
let se1=[1,2,3,4,5]
console.log(se1);
console.log(se1.splice(1,4));


//adding elements using splice method
se1.splice(1,3, 5,7);
console.log(se1);//1=5 3=7 

//replace using splice
se1.splice(3,4,9,8);
console.log(se1);
console.log(se1);



let num1=200;
let num2=300;
let num3=500;
console.log(Array.of(num1,num2,num3));



let mixAr=[1,2,3,["dhara","namita"],[2.5,1.3,3.8]];
console.log(mixAr);
console.log(mixAr.flat(Infinity));

