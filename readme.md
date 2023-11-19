JavaScript- Java Script is a synchronous single threaded language.

synchronous single threaded means - Execute one command at a time and in a specific order.Means it go next line when current line execution finished.

Execution Context-
  -Everything in javascript happens inside an Execution Context.
  -You can assume as a container in which whole javascript code is executed.

  |---------Execution Context have two  Components------------------------------------------
      
      (1)   Memory Component or Variable Environment-
                it is a place where all variable and function store as a key value pair.
              
               key : value
               a  :  10
               fn: {....}


      (2)   Code Component Environment or Thread of Execution -   
            - It is a place where whole javascript code is executed.        




window-
  window is a actually global object which is created along with the global execution context.
  ->a global object in context with browser is known as window.
  -> even if our javascript file is empty yet javascript engine create a gloabl object.
  -> and at the global level or in the global execution context
        this===window
  -> so at global level 'this' point out the global object.

  global space-
       any thing which is not inside the function is in gloabla space.

       so any variable and function which is wriiten in global space it automatically attached with global object or window object.
