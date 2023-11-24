/*
   when we run the below program javascript engine try to find b in local scope of a function 
   when it not found b in local space than it try to find in outside of function 'a' and here outside is global space and
   here it found the b which is 10 so it print 10

*/

/*
LEXICAL ENVIRONMENT-

[lexical environment=> local memory + along with lexical environment of its parent.]

lexical terms means in a hirearchy or in a sequence.

whenever an execution context is created a lexical environment also created 


in below example we can say that 'c' function is lexically sitting inside 'a' function. and 'a' is lexically inside the global scope.

*/

function a(){
    var b=10
    c()
function c(){

}
}
a();
console.log(b)

// function a(){
//     console.log(b)
// }
// var b=10;
// a()




/*


*/

function a(){
    c()
    function c(){
        console.log(b)
    }
}
var b=10;
a()


/*

Scope-
   where you can access specific variable or function in our code that is Scope.

   Scope Chain-
       the whole chain of lexical environment is known as Scope Chain. and it  define whether a function or variable 
       present inside a scope or not. If the scope chain is exhausted and variable is not found that means it is not inside the scope chain.


*/

