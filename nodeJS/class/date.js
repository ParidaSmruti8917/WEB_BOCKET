let myDate=new Date();
console.log(myDate);// 2024-05-21T09:47:39.472Z
console.log(myDate.toDateString());// Tue May 21 2024
console.log(myDate.toLocaleString());//21/5/2024, 3:19:07 pm
console.log(myDate.toLocaleDateString());//21/5/2024
console.log(myDate.toTimeString());//15:20:42 GMT+0530 (India Standard Time)
console.log(new Date("03-o5-2024"));
console.log(Date.now());

let myStamp=Date.now();
console.log(myStamp);

let newDate =new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());