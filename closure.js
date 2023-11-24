
// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

//a function alongs with its lexical scope form closure. 

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x()




// function x(){
//     var a=7
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// var z=x();  // after running this line x is gone means x execution context is gone from call stack.
//              //all the variable and function gone
//              //now we return function y now it is out of x scope and assign to variable z 
             
// z()     // so how it prints a=7 while x is gone .here closure comes in picture.so still this y function remember its lexical scope where is coming
     // so basically if we return y it only not return y but function along with lexical scope that is closure return




console.log("Another Example to understand closure")
function z1(){
    var c=30
    function y1(){
        var b=20

    function x1(){
        var a=10
        console.log(a)
        console.log(b)
        console.log(c)
    }
    b=2000
    x1()
    //b=3000  // uncomment this and look what is going 
   
}
 y1()
}
var w=z1
w()




// Uses of closures
    // -> Module design Pattern .
    // -> Currying.
    // -> Functions like once.
    // -> memoize
    // -> maintaining state in async world
    // -> setTimeouts
    // -> Iterators
    // and many more ----

