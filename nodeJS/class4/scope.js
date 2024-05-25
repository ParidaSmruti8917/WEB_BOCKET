//scope
// the current context of execution where values and expressions are visible or can be referenced

//global scope:
let globalVariable="kanha is everything";

 function funscope(){
    //function scope
    let myChubu="mine";
    console.log(globalVariable);
    console.log(myChubu);
 }
 //console.log(globalVariable);
 //console.log(myChubu); not define
 //right way
 funscope()