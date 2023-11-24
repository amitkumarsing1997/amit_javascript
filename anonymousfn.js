/*



first class function-


/*
function statement - also known as function declaration
 following way of creating function is called function statement
 
*/
// function a() {
//     console.log("a is called")
// }



/*
function expression-

assigning function to a varible or we can say that function act as a value 
*/

// var b = function(){
//     console.log("b called ")
// }


/* 
what is difference between function statement and functionn expression
  - so major difference these two is hoisting 
*/ 

// function a() {
//     console.log("a called")
// }

// a()

// var b = function(){
//     console.log("b called ")
// }

// b()



/*
if we called above function before declaration- than we successfully called 'a' function but we got following error while calling 'b' function
   TypeError: b is not a function

so that is the difference between function statement and function expression 
during the hoisting phase or during the memory creation phase ''function statement' 'a' is created memory and this function is assigned to a
but in case of 'function expression' this b is created just like any other variable it is assigned undefined initially.so here b is undefined and we can't call it like function

*/

// a()
// b()
// function a() {
//     console.log("a called")
// }

// var b = function(){
//     console.log("b called ")
// }



/*
function declaration-
      function declaration also known as 'functon statement'

*/






/*
Anonymous function-
    -a function without a name is known as 'anonymous' function.
    - anonymous function does not have their own identity.means it givens syntax error
        
              function(){
                            }


    - anymous function are use in a place where functions are used as values. means you can use to assign it to some variable.

*/


/*
Named function Expressions - 
             below code is named functionn expressions

                                   var b = function xyz(){
                                     console.log("named function")
                                     }
      


*/
/*
   if we run below code we successfully executed b() but in case of xyz() we got folloeing error
      ReferenceError: xyz is not defined

      because xyz is not created in outer scope or global scope.

      


*/

// var b = function xyz(){
//     console.log("named function")
// }
// b()
// xyz()


/*
  but if we access xyz in inside the function we can access it 
*/
// var b = function xyz(){
//     console.log("named function")
//     console.log(xyz)
// }
// b()


/*  

Parameter and arguments-
    param1 and param2 are parameters we can not access it outside.
   


*/

// var b = function(param1,param2){   // these are known as parameter.
//     console.log("b called")
// }
// b(1,2)      // and these are known as arguments.




/* First class Functions-

      passing a function inside another function 

      or

      the ability of functions to be used as values and can be passed as a argument in another function or can be returned 
      from a function this ability is known as first class function in javascript.

*/

var b = function(param1){
    return function lab(){

    }
}
function xyz(){

}
console.log(b(xyz))


/* First class citizen -
     it is same as first class function.

*/


/*

Arrow Functions-
     

*/
