let num = 100;
console.log(num); //to print the output

let Num = 50;
console.log(Num);

let second_num = 1000;//second_num(snakeCase)
console.log(second_num);

let secondNum = 1000;//secondNum (camel case)
console.log(secondNum);


let decimal_num = 12.34;
console.log(decimal_num);

console.log(typeof decimal_num);

let rollno = 8;
console.log(rollno);


let num1 = 10;
let num2 = 20;
let add = num1 + num2;
console.log(add);


let f_num = 20;
let s_num = 10;
let sub = f_num - s_num;
console.log(sub);


let m_fno = 10;
let m_sno = 20;
let mul = m_fno * m_sno;
console.log(mul);


let d_fno = 20;
let d_sno = 10;
let div = d_fno / d_sno;
console.log(div);


let r_fno = 20;
let r_sno = 10;
let rem = r_fno % r_sno
console.log(rem);

let name = "Namita";
console.log("my name is:", name);// namita

console.log(`my name ${name}`);

console.log(typeof name);//string

let numbers = "100"// let,var,const(keyword), =(assign operator), "100" (value);




//BigInt:in big int we can store any type of int like smaller or larger.

let BigInt = 100000;
console.log(BigInt);

//Null:
let result = null; // null: empty;
console.log(typeof result);


//undefined:

//let value = undefined;
let value;//nothing is assigend.
console.log(value);//undefined
console.log(typeof value);//undefined



//Boolean:
let isMarried = false;
console.log(typeof isMarried);// false
console.log(!isMarried);//true


//symbol: it is a data type in JS to produce unique key values ans it's introduced in ES6.
// it is used to creat unique identifiers for objects.




let symbol1 = Symbol("abc");
let symbol2 = Symbol("def");
console.log(symbol1 === symbol2);

console.log(symbol1.description);
console.log(symbol2.description);

let num_value1 = 100;
let num_value2 = "150";
console.log(num_value1 + num_value2);//100150



let output = 0 / 0;
console.log(output);