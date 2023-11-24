/*
 what is callback  function in javascript-
     so if we call a function and pass another function than this another function is called a call back function here y
     is callback function
   


     so if javascript did not have this first class functions and if we did not  have this callback function
     and if we could not pass function in to another function than we could not able to do the async operation in javascript
     because javascript is single threaded synchronous programing language and we can not bear that our main thread will block.

  
     so using the webabi's and settimeout and callback function we can achieve this asynchronous property)



*/

// setTimeout(function(){
//   console.log("timer")
// },5000)

// function x(y){
//    console.log("x")
//    y()
// }
// x(function y(){
//    console.log("y")
// })



/*
      javascript is a synchronous and single threaded language.
*/



/*
     blocking the main thread
*/



/*
      power of callbacks  
*/




/*
     deep about event listeners
*/




/*
     closures demo with event listeners
*/





/*
   scope demo with event listeners
*/








// but using variable in global scope is not a good idea


// let count=0
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//    console.log("Button clicked",++count)
// });


/*

above approach is not good because this count can  be modified to avoid this we use closure.

so closure ensure that this count can not modified 

now in below code the callback function xyz will make closure with (count) its outer scope


in 'Elements' section if we go 'Event Listeners' section -> handler(show call back function 'xyz') -> Scopes -> [global scope, closure] 

*/

function attachEventListeners(){
    let count=0;
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Clicked",++count)
});
}
attachEventListeners();



/*
    garbage collections and removeEventListeners-
        
        event listeners are heavy that means it takes memory because when we call an event listener it form a closure
        even if our callstack is empty means we are not executing any code but still this program not freeing the memory 
        that is why eventlistener are heavy. so that is important we  should remove event listeners if we are not using them

        [because in our page there may be thousand of event listeners like onclickbutton,onmousehover,onscroll 
        than our page may go slow beacuse of these so many closure consuming lots of memory.
    
    so if we remove event listener than all those variables which is held by closure will be go for garbage collections]



*/