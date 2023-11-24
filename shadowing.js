/*
SHADOWING -
   so in bellow example var a =100 in global scope and var a =10 in local but it hide the value of var a=100
   and print only a=10 in both local and global scope and that is the shadowing.

*/
// var a=100
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)



/*
  the below code executed diferently compare to above
  if we put debugger in below code we found b in two places
  in block scope b is 20 and in script(another scope ) b is 100 so inside block it print 20 but outside block
  is print b=100 

*/

// let b =100
// {
//   // show b=20 is shadowing b=100 here
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(b)



/*
and similar thing happened const also

*/


// const c =100
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(c)



/*
Illegal shadowing-
   so if  a variable is shadowing something it should not cross the boundry of its scope


to run below code we get follwing error-
   SyntaxError: Identifier 'a' has already been declared

*/
// let a=20
// {
//   var a=20
// }


/*
    it is legal

    because var is inside the boundry and it not interferring the 
    boundry of let 'a' 
     
*/

let a=30
  function x(){
    var a=40
    console.log(a)
  }
  x()
/*
   it is legal
*/

  // var a=30
  // {
  //   let a=40
  // }


/*
  it is legal
*/

// let a=20
// {
//   let a=30
// }
