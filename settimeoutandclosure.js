/*
so setTimout takes this callback function and attaches the timer and when timer expire it call the function.
and javascript not wait till the time and execute further queries.(example it execute Namaste Javascript).




so closure is a function along its lexical environment. When function is taken out from its original scope and executed 
in some other scope still it remember its lexical environment .
so when settimeout taken the function and store it some place and attach a timer.so that function remember the 
reference to i (reference to i not the value of i). so when all loop completed these 5 copies of function pointed
to the same reference of i or same memory location of i .they all are pointing to the same reference of i because environment of all the functions
are same.

and javascript does not wait for anything it does not wait for the timer to expire and in quick manner it execute
for loop and setimeout makes 5 copies function and at the end i reference to the value of 6.so when first timer expires
and call back function run the value of i become 6 so it print 6 .because i pointing to the same memory location 


*/


// function x(){
//   var i=1
//   setTimeout(function(){
//     console.log(i)
//   },3000)
//   console.log("Namasate Javascript")
// }
// x();










/*

so to solve we use let in place of var.
because let have block scope while var have global scope.So because of let each and every loop iteration
this i will be a new varaiable all together or we can say it is a new copy of i alltogether and when each time 
settimeout is run this callback function has a new copy of i altogether and function makes closure with this new variable 
or copy of that variable.

so in simple terms you can assumme that each and every time when function is called it is reffering to the different
memory location which is there individual i seperate copy of i which was in the scope.


so  it is only reason let have block scope and it creates a new copy every time which pointed to the differrent memory location .when this loop is executed and every time it pointed to the different memory location.


while var is a global scope and it create copy of var everytime which pointed to the same memory location  when loop is executeed and every time it pointed to the same memory location.

*/

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//           },i*1000)    
//     }
//     console.log("Namasate Javascript")
//   }
//   x();


  /*
   but we want to solve the problem with var vaiable only-

  so in var the copy of i referes to the same memory location.
  so to solve this problem somehow we have to give the new copy of i variable everytime to the settimeout and forms a closure with it which refers to the different memory location.

 

  */

  /*
    so due to close function we creaeted new copy of x everytime when for loop is executed 

  */


  function x(){
    for(var i=1;i<=5;i++){
       function close(x) {
            setTimeout(function(){
                console.log(x)
              },x*1000)  
            }  
        close(i) 
    }
    console.log("Namasate Javascript")
  }
  x();