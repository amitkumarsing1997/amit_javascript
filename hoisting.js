// to understand proper hoisting run this code
getName();
console.log(x)
console.log(getName)
var x =7
function getName()
{
    console.log('namaste javascript')
}









// ------------------------
// getName();
// var x =7
// console.log(x)
// console.log(getName)
// function getName()
// {
//     console.log('namaste javascript')
// }
//-----------------------







//run below code to understand call stack and please go to browser for claer understanding
// var x=7
// function getName(){
//     console.log("Namaste javascript");
// }
// getName();
// console.log(x)
// console.log(getName)





//----------------------
// Reference Error
    // here we try to get x which is not defined so here javascript throw reference error
     
// getName();
// console.log(x)
// console.log(getName)

// function getName()
// {
//     console.log('namaste javascript')
// }
//---------------







//---arrow function behave just like normal variable in javascript not like a normal function (must run to understand arrow function how behave in javascript)

//    getName();
//    console.log(x)
//    console.log(getName)
//    var x=7;
//    var getName = () => {
//     console.log("namaste javascript");
//    }




//    console.log(x)
//    console.log(getName)
//    var x=7;
//    var getName = () => {
//     console.log("namaste javascript");
//    }
//    getName();


  
  






/*

Even before code is executed memory will be allocated to each variable and function

first global execution context is created in which memory will be aloccated to 
variable and function




*/


/*
 Hoisting-
   hosisting is a phenomena in javascript by which we can access variable and functions even before you initialize it.we can
   access it without any error.

   in case of x it gives undefined

   but in case of function name it givve whole function syntax due to  hoisting.

*/

