//control flow statement:

//conditional stmt:stmt that are perform differnt actions based on different conditions used to make decisions.

//types
//1.if stmt
//2.else
//if-else 
//switch
//ternary 

//if: stmt
let age=24;//declared variable
if(age>=18){
    console.log("eligiable for vote");
}

//if-else
let age1=17;//declared variable
if(age1>=18){
    console.log("eligiable for vote");
}
else{
    console.log("not eligiable");
}

//else-if
let age2=17;//declared variable
if(age2>=18){
    console.log("eligiable for vote");
}
else if(age2==18){

    console.log("you are 18");
}
else{
    console.log("not eligiable");
}

//switch stmt:switch is based on options
let day=4//declare variable
switch (day) {
    case 1:
        console.log("monday");
        
        break;
        case 2:
        console.log("tue");
        
        break;
        case 3:
        console.log("wed");
        
        break;
        case 4:
        console.log("thu");
        
        break;
        case 5:
        console.log("fri");
        
        break;
        case 6:
        console.log("sat");
        
        break;
        case 7:
        console.log("sund");
        
        break;

    default: console.log("invalid date");
        break;
}

// Ternary:?
let age3=24;
age3>=18? console.log("you are 18"): console.log("you are not 18 ");
