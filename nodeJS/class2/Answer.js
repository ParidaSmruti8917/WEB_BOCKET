 //q-1-ans 
 let Birthday=  new Date ('2000/11/29');
 console.log(Birthday);

 //q-2-ans
 let curTime= new Date
 console.log(curTime.toTimeString());

 //q-3-ans

 let currentDate = new Date("2024-05-22"); // format

 let currentDay = currentDate.getDate();
 let currentMonth = currentDate.getMonth();
 let currentYear = currentDate.getFullYear();
 
 let MyBirthday = new Date("2000-01-01"); // format
 
 let birthDay = MyBirthday.getDate();
 let birthMonth = MyBirthday.getMonth() + 1; // Months are zero-indexed
 let birthYear = MyBirthday.getFullYear();
 
//q-4-ans
//push method used in js for adding new element to the end of an array,it modify the original array also increase its length.

//q-5-ans
//pop method is used in js to remove an element from the end of an arry.it follow LiFO order.

//q-6-ans
let fruits=["apple","banana","mango"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);

//q-7-ans
let num=[1,2,3,4,5];
num.pop();
console.log(num);

//q-8-ans
let color=["red","green","blue"];
color.push("yellow");
console.log(color);
color.pop();
console.log(color);

//q-9-ans
let num1=[1,2,3,4]
num1.push("namita","dhara","bishnu","smruti")
console.log(num1);

//q-10-ans
let stack=[];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);

//q-11-ans
let letter=['a','b'];
letter.push("c","d");
let lastLetter=letter.pop();
console.log(letter);
console.log(lastLetter);


//q-12-ans
let no1=[1,2,3,4,5,6];
console.log(no1);
console.log(no1.length);
no1.push(7,8);
console.log(no1.length);
no1.pop();
console.log(no1.length);

//q-13-ans
let myAry=[10,20,30];
myAry.push(40);
console.log(myAry.pop());
console.log(myAry);


//q-14-ans
let numm1=[1,2,3]
console.log(numm1);//1 2 3

//step-2
numm1.push(4);
console.log(numm1);//1 2 3 4
//step-3
numm1.shift();
console.log(numm1);//2 3 4

//q-15-ans
//step-1
let fruits1=["mango","lichi"];
let fruits2=["ice apple","kiwi","lichi"];
let con=fruits1.concat(fruits2);//mango,lichi,ice apple,kiwi,lichi
console.log(con);
let dup=[new Set(con)];//mango,lichi,ice apple.kiwi.lichi
console.log(dup);





