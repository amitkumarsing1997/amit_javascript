/* 
'let' and 'const' declarations are hoisted but it differently hoisted than 'var' . we can say let and const is in temporal 
dead zone for the time being.
*/

// console.log(b)
// let a =10;
// var b=100;

/* 
we can access 'a' only when we declare 'let a' before the console 
,in short 'let a' other wise we get reference error.
below code give 'reference error'
*/
// console.log(a)
// let a=10;
// var b=100



/*
in below code 'let' also hoisted with 'undefined' value but in seperate memory of 'var b' while b also hoisted with 'undefined' in
value in different memory area. 


*/



// let a=10
// console.log(a)
// var b=100


/*
TEMPORAL DEAD ZONE-
  it is a time since when this 'let' variable was hoisted and till it is initialized some values. so time between them is known
  as temporal dead zone.


  to avoid temporal dead zone put your declarartion and initialization of variable specially let and const at the top
  of the code .

*/




/*

*/

// below code is ok
// var c=10
// var c=100




// below code is ok
// var m=30
// m=40





 // below code is not ok  [SyntaxError: Identifier 'y' has already been declared]
// let y=23
// let y=45





// below code is ok
// let n=75
// n=85




//below code is not ok     [SyntaxError: Identifier 'q' has already been declared]
// const q=23
// const q=45







// below code is not ok  [TypeError: Assignment to constant variable.]
// const r=56
// r=87



// it is not ok  [SyntaxError: Missing initializer in const declaration]
// const re



//ReferenceError: Cannot access 'a' before initialization
// console.log(a)
// let a=1900





// ReferenceError: u is not defined
// console.log(u)






/*
  till now we have seen following types of errror
     1. reference error  -> ReferenceError: Cannot access 'a' before initialization
     2. syntax error     ->  const a
                                 ^
                            SyntaxError: Missing initializer in const declaration

        Ex- const a 

     3. type error       ->  TypeError: Assignment to constant variable.


*/