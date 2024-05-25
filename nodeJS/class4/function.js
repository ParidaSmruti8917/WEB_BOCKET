//function:function is a reusable block of code to perform a particular task.
//functions can take arguments,can return values

//syntax:
// function functionName(parameters){
    //code
//}


function chubu( ) {
    console.log("welcome chubu");
    
}
 

//add return value
function add(num1,num2) {
    return num1+num2;
    
}
let result=add(2,3);
console.log(result);
console.log(add(2,3));


//arrow function:
let arrow =()=>{
    console.log("hey chubu");
}

let mul=(num1,num2)=>{
    return num1*num2
}
let output=mul(2,3);
console.log(output);

//higher order function:
//a function that takes another function as an argument or return as a result.

//using array method
//anonymous function
//()=={}
//function () {}

//map method:
let array=[1,2,3,4,5,6,7,8,9];
//make every element double

for(let i=0;i<array.length;i++){
    array[i]=array[i]*2;
}
console.log(array);

//hof map method:
let double=array.map((Element,index)=>{
    return Element*2
});
console.log(double);

//filter method:
//find out the odd no
let odd=array.filter((p)=>{
    return p%2!==0;

});
console.log(odd);

//reduce method
// find out the sum of all Element
let sum=array.reduce((total,p)=>
{
    return total+p;
},0);
console.log(sum);

//foreach method:
let answer=array.forEach((p,i)=>{
    console.log(p,i);
});
console.log(answer);

//custom function
function evenOdd(num) {
    if(num%2==0){
        return `even no ${num}`;
    }else{
        return`odd no ${num}`;
    }
    
}
//reuse-2
for (let i = 0; i < array.length; i++) {
    console.log(evenOdd(array[i]));
    

}
// reuse-2
console.log(`your no is ${evenOdd(24)}`);