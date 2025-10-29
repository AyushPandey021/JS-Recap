// // Topics🎯


// Hoisting 
// 🎯hositing is  the concept in js , you acess the variable and before assign, so you assign the variable so js breaks in 2 parts the variable, var = a , a = 10  so js by default puting the variable in top if  you runing that so its given output undefined, not error because assign varible in top. its a by default nature of javascript. 
// it is called hoisting
// ➡️➡️ here is the Right way (interview ans)
// 🎯 Hoisting
// Hoisting is a concept in JavaScript where you can access a variable 
// before it is assigned a value. 
// JavaScript internally divides the code into two parts: 
// declaration and assignment. 
// For example: var a = 10 → 'var a' is declared first, then 'a = 10' is assigned. 
// During execution, JavaScript automatically moves all declarations to the top. 
// So, if you access the variable before assignment, it gives 'undefined' 
// instead of an error because the variable is already declared in memory. 
// This default behavior of JavaScript is called "Hoisting".

console.log(a);
var a = 5;// js me variable and functions unko js declearation wala part top me move kr deta hai, usse hum hoisting kehte hai.

//🎯 let aur const bhi hoist hote hain,
// par wo “temporal dead zone” me rehte hain jab tak unhe initialize na kiya jaye

// IIFE 🎯 =>  ( immediately invoked function expression  )
//A function in JavaScript that executes immediately after it is defined.
// ➡️ interview Ans
// IIFE stands for Immediately Invoked Function Expression.
// It’s a function that executes immediately after it’s defined.
// It helps to create a private scope and avoid global variable.
(function op() {
    var b = 4  // its not puting the value in global scope , not access out of funtion
    console.log(b);
    console.log("IFFE the immediatly runing");
})()
// higher order function 🎯=> ek aisa function ya to return kre function ya accept  kre function in perameter , ya to dono it is called higher order function 
// ➡️ Interview Ans 
// A Higher-Order Function is a function that can take another function as an argument, return a function, or both.
// It allows us to write cleaner, reusable, and more flexible code — for example, map, filter, and reduce are built-in higher-order functions in JavaScript.
function high(ap) {

    return function low() {
        console.log("inner funtion ", ap);

    }

}
/*frist function colling*/high("ayush")/*second function colling*/()
// ➡️2nd term => A function returns a function as the perameter ➡️
let pera = (fnc) => {
    fnc()
}

pera(function () {
    console.log("Perameterd return function 🤨");

})

// 🎯 Callback Function and 
// A callback function is a function passed as an argument to another function.🎯

//A function that takes another func-tion as an argument 
// or returns a function is called a Higher-Order Function.
// ➤ The function which is passed as an argument is called a Callback Function.

function np(callback) {
    // 'np' is a Higher-Order Function because it takes another function as a parameter.
    callback(); // Calling the callback function
}

// Here, we are passing a function as an argument → this is a Callback Function
np(function () {
    console.log("This is a callback function");
});

//  function kehte h 
// frist class fnc🎯 => First-Class Functions mean that in JavaScript, functions are treated as values.
const greet = function () {
    console.log("Hello Ayush!");
};
greet();




// global scope=> you writeing any code & variable out of the brakets,function,braces  so  this vlaue is globle scoped, its acess anywhere 
let global = 50
// local  scope=>a local scope means you declear the variable inside the fucntion , brakets , braces so you only acess inside the block not outside 
function local(){
    let lock = 535
console.log(lock);

}// its acessed only local function
local()
// closures🎯=>thsi is a concept  function return the new function and retuned function store the outer funtion data   and use.


// interview🎯
// A closure is a function that remembers and accesses variables from its outer function, even after the outer function has finished executing.


let outer  =(v)=>{
return function iner(p){
    return v + p 
}
}
let closure = outer(5)
console.log(closure(10));




