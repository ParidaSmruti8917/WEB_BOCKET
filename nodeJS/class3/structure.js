//De-structure

//is the process to extract value of array and obj ans to re-assign them to a new variables

// it is a shorthand way to extract the values of array and object.

let myArray=["chubu","namita","dhara"];
let [name1,name2,name3]=myArray;
console.log(myArray);
console.log(name1,name2,name3);
console.log(name2);
console.log((name2="mamta"));
console.log((myArray[2]=name2));
console.log(myArray);

// skipping 
//let [, ,name3, name4]










student={
    name:"dhara",
    age:23,
    dist:"puri",
    marks:[95,90,84],
   
    isMarried:false,
    address:{at:"puri",pin:752015},
};
let {name,city ,age}=student//destr
console.log(name, age,city);








