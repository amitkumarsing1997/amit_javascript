const users =[
    {firstName:"akshay",lastName:"saini",age:26},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"deepika",lastName:"padukone",age:26},
];

//["akshay","deepika"]

// const output=users.filter((x)=>x.age<30)
// console.log(output)

const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=acc[curr.age]+1;
    } else {
        acc[curr.age]=1;
    }
    return acc;

},{})
console.log(output);

// findout first name of all users whose age is less than 30

const output2=users.filter((x)=>x.age<30).map((x)=>x.firstName)
console.log(output2)

//solve the problem with reduce function
console.log("now we are going to solve above problem by reduce function")

const output3=users.reduce(function(acc,curr){
    if(curr.age<30){
           acc.push(curr.firstName)
    } 
    //console.log(acc)
    return acc;
},[])

console.log(output3)