/*
web apis-
   setTimeout()-
   DOM APIs
   fetch()
   LocalStorage
   console
   Location

   above are the powers which browsers have it is not a part of javascript it is powers which is given to the browser.
   and browser gives the power to the javascript engine to use these superpowers.


   browser gives to use these superpower by the help of global object(window)




*/


/*
  call stack -> 
      event loop->
        callback queue-> 

        when java script see the eventhandler it store the callback function 'cb' in to different memory location(which is web api environment) and start execute next line code which is console.log("end").

        and now when all code executed the call stack become empty.

        but the 'event loop'  chalta rahega and when user click on btn the function comes immediatelly in to the 'callback queue'.

        and event loop check whether the call stack is empty or not if call stack is emppty it allow the function 'cb' from callback queue to move in to the 'call stack' and here global execution context is created in call stack.

        -> anything which come inside the call stack it will be quickly executed .
        -> 


    



    


*/


// console.log("start")

// document.getElementById("btn")
// .addEventListener("click",function cb(){
//     console.log("call back")
// })

// console.log("End")


/* 

Fetch -
   fetch does not work same way as 'setTimeout' and 'eventListener' .it works little different approach

   -> fetch basically goes for request of api calls so fetch returns a 'promise'
   and in below code we also have call back function cbF which will be executed when this promise has been resolved.


*/

/*
    [ execution of below code ]
     so as usual global execution context is created pushed inside the call stack
     code executed line by line
     first it print 'Start'
      now it move to next line which is 'setTimeout' and 'cbT' is registered in web api environment as a callback function 
         and timer of 5000 started

     and now javascript engine move to the next line
     and now we have the fetch function which is again a web api which is used for network call so it also registered a call back function 'cbF' in web api environment
     now we have two function 'cbF' and 'cbT' in webapi environment

     cbT is waiting for its timer to expire

     and cbF is waiting for data is returned from netflix server. 
        

     now suppose this netflix server is very fast and it return the data in 50 milisecond .
     so what you expect does this call back function will go to the 'callback queue' answer is NO

     just like a 'callback queue' we also have the 'microtask queue' this queue is exactly similar to this call back queue
     but it has higher priority 

     what ever function comes into this 'microtask queue ' will be executed first

     so what comes inside microtask queue ans is 'cbF' will go to the microtask queue.

     and again the job of event loop is to checking whether call stack is empty or not.
     suppose there are millions line of code which takes some time meanwhile 'cbF' already comes in microtask queue and waiting for its execution.
     so due to this millions line of code our call stack not empty. and suppose timer also expire and 'cbT' comes in call stack queue and waiting for its execution.

     and now both the call back function is waiting for its execution

     and still millons line of code still executing.

     meanwhile job of event loop is countiously checking whether call stack is empty or not.

     and suppose this millions line of code is executed and we also executed last line code console.log("End")

     and further nothing to execute so global execution context is popped out from the call stack and now call stack is empty

     and now event loop see that the call stack is empty and event loop also see there are some task in microtask queue and call back queue.

     because of higher priority of microtask queue there is high chance of event loop take 'cbF' function and put inside of the call stack and it removed from the microtask queue

     and now call stack run the cbF function line by line and console.log("CB Netflix") printed
     and now it gone from call stack and call stack become empty

     meanwhile event loop again moinitoring that now call stack is empty and there is no task in microtask queue but there is task in call back queue which is 'cbT' call back function.
     
     and now event loop put this cbT function from callback and put inside the callStack.

     and now call stack execute this cbT function line by line 
     and print console.log(" CB SetTimeOut") and after this call back is empty 
     and now there is no callback function inside the microtask queue and callback queue
     
     so now our whole mission is completed.


      
     

    


     

*/


console.log("Start");

setTimeout(function cbT() {
    console.log(" CB SetTimeOut")
},5000)

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix");
})

console.log("End")


/*
 MicroTask Queue-
    - all the callback function which comes through promises will go inside this microtask queue.

    and there is some thing known as 'mutation observer' which check whether there is some mutation in DOM tree or not
    if there is mutation in dom tree it can execute some call back function


-> But all the other callback function [callback function which comes from setTimeout , callback function which comes from eventListener etc]
   all that will go into the 'callback queue'

-> callback queue also known as 'task queue'



*/

