
var n=2
function square(num){
    var ans =num*num;
    return ans;
}
var square2=square(n);
var square4=square(4);

/*
when you run above code a global execution context is created
and 

{{even before the code is executed javascript provide memory to the variable and function .}}

this execution context also created in two phases the first phase is memory creation phase and second is code execution phase

1) Memory-

   =>(reserve a memory space for n)=>(so when it allocate memory to n it store special value in it which is undefined)
   now it go next line where it see a function square so now it also allocate the memory to square 
 
   n:  undefined  ->(in code execution this undefined replaced with 2)    
                            
  
  =>(reserve to memory to square)=>(in case of function it literally store whole function code { }in this memory space n ki undefined)
  
  square:  whole function code ->

  square2: undefined -> replace undefined to 4

  square4: undefined  -> replace undefined to 16 



2)Code Execution -

    n=2  executed

    function  tabhi  execute hoga jab use call kiya jayega

    when you invoke a function or call a functon a brand new execution context is created \
      here square(n) is called so a brand new execution context is created in which two phase is created
              
      
      function square(num){
                   var ans =num*num;
                       return ans;
                    }


        
        1)Memory-
             
                 num:undefined -> (n=2 is passed as place of num in code execution phase)

                 ans: undefined ->(2*2)->undefined is repleace with 4
        
        2)Code-
             now in code execution now we execute code line by line
             after when whole code is executed 
             this execution context is deleted.


so when javaScript completed code execution the whole global execution context is also deleted.
*/



/*

so how javascript manage this exection context because first gloabal exection context created than agin sub execution context created when function is called
than how javascript manage all this

Ans-> Call stack

|    |
|    |
|    |
|    |
|    |
|----|        SO WHEN e1 (sub execution context) execution  completed it remove from stack
| e1 |        than after GEC(global execution context) is removed after execution is completed.
|----|
|GEC |
------

call stack synonyms
   -Execution Context stack
   -Program stack
   -Control stack
   -runtime stack
   -machine stack
*/