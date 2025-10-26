// let a ={name:"John", age:30, city:"New York"};
// let b = [1,2,3,4,5];
// console.log(typeof(a));
// console.log(b);
// let c  = 10/0;
// console.log(c );


// let a  = 5
// let b  = 15
// console.log(a + b );
// console.log(a % b );
// console.log(a - b );
// console.log(a /b );
// console.log(a * b );


// console.log("equal  = ",a <= b );

// console.log(true && false);
// console.log(true || false);
// console.log(!true);


let age= 18; 
if (age >=18){
    console.log("yes");
}else{
    console.log("not");
}
let ap = age >=18 ? "ha" : "na";
console.log(ap);

let a = 20 
let b = 20
console.log(20 =="20" );



// ➡️ forEach => forEach is a type of loop used for arrays.
// It allows you to iterate over each element of an array and perform an action on it.
// forEach takes a function as an argument, which runs once for every element in the array.
// Note: forEach does not return a new array; it just executes the given function.
// ➡️➡️  forEach() ek loop jaisa method hota hai jo array ke har element par function run karta hai.
// Ye naya array return nahi karta, bas har element ke sath jo kaam karna hai wo kar deta hai (like print, update, etc).

let number = [1,2,3,4,5,6]
number.forEach(function(num){
    console.log("Ayush", num );


    
})

let fruits = ["Apple","Banana", "Carry","Mango"]
fruits.forEach(function(a){
    console.log("Fal",a);

    
})
function greet(name) {
  return "Hello " + name;
}

function callFunction(fn) {
  console.log(fn("Ayush"));
}

callFunction(greet);









// msotly useing using Initialization and private code 
(function(){
    console.log("IIFE funtion ");
    
})()


