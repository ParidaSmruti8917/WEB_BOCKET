let num1 = 100;
let num2 = 200;
console.log("num1", num1);
console.log("num2", num2);
console.log(typeof num1);//using backticks

console.log(` num1:${num1} and num2:${num2}`);

let conversion_num1 = String(num1);
console.log(typeof conversion_num1);//number to String

let conversion_num2 = Number(num1);
console.log(typeof conversion_num2);//string to no


let c_no1="100";
let c_no2="200";

console.log(typeof c_no1);//string
console.log(typeof c_no2);//string

// without using constructor funcation we can convert
console.log(typeof +c_no1);//num
console.log(typeof +c_no2);//num

